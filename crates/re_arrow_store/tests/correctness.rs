//! Correctness tests.
//!
//! Bending and twisting the datastore APIs in all kinds of weird ways to try and break them.

use std::sync::atomic::{AtomicBool, Ordering::SeqCst};

use rand::Rng;

use re_arrow_store::{
    test_row, DataStore, DataStoreConfig, GarbageCollectionTarget, LatestAtQuery, WriteError,
};
use re_log_types::{
    component_types::InstanceKey,
    datagen::{
        build_frame_nr, build_log_time, build_some_colors, build_some_instances, build_some_point2d,
    },
    external::arrow2_convert::deserialize::arrow_array_deserialize_iterator,
    Component as _, DataCell, Duration, EntityPath, MsgId, Time, TimeType, Timeline,
};

// ---

#[test]
fn write_errors() {
    init_logs();

    let ent_path = EntityPath::from("this/that");

    {
        pub fn build_sparse_instances() -> DataCell {
            DataCell::from_component_sparse::<InstanceKey>([Some(1), None, Some(3)])
        }

        let mut store = DataStore::new(InstanceKey::name(), Default::default());
        let row = test_row!(ent_path @
            [build_frame_nr(32.into()), build_log_time(Time::now())] => 3; [
                build_sparse_instances(), build_some_point2d(3)
        ]);
        assert!(matches!(
            store.insert_row(&row),
            Err(WriteError::SparseClusteringComponent(_)),
        ));
    }

    {
        pub fn build_unsorted_instances() -> DataCell {
            DataCell::from_component::<InstanceKey>([1, 3, 2])
        }

        pub fn build_duped_instances() -> DataCell {
            DataCell::from_component::<InstanceKey>([1, 2, 2])
        }

        let mut store = DataStore::new(InstanceKey::name(), Default::default());
        {
            let row = test_row!(ent_path @
                [build_frame_nr(32.into()), build_log_time(Time::now())] => 3; [
                    build_unsorted_instances(), build_some_point2d(3)
            ]);
            assert!(matches!(
                store.insert_row(&row),
                Err(WriteError::InvalidClusteringComponent(_)),
            ));
        }
        {
            let row = test_row!(ent_path @
                [build_frame_nr(32.into()), build_log_time(Time::now())] => 3; [
                    build_duped_instances(), build_some_point2d(3)
            ]);
            assert!(matches!(
                store.insert_row(&row),
                Err(WriteError::InvalidClusteringComponent(_)),
            ));
        }
    }
}

// ---

#[test]
fn latest_at_emptiness_edge_cases() {
    init_logs();

    for config in re_arrow_store::test_util::all_configs() {
        let mut store = DataStore::new(InstanceKey::name(), config.clone());
        latest_at_emptiness_edge_cases_impl(&mut store);
    }
}

fn latest_at_emptiness_edge_cases_impl(store: &mut DataStore) {
    let ent_path = EntityPath::from("this/that");
    let now = Time::now();
    let now_minus_1s = now - Duration::from_secs(1.0);
    let now_minus_1s_nanos = now_minus_1s.nanos_since_epoch().into();
    let frame39 = 39.into();
    let frame40 = 40.into();
    let num_instances = 3;

    store
        .insert_row(&test_row!(ent_path @ [
                build_log_time(now), build_frame_nr(frame40),
            ] => num_instances; [build_some_instances(num_instances as _)]))
        .unwrap();

    if let err @ Err(_) = store.sanity_check() {
        store.sort_indices_if_needed();
        eprintln!("{store}");
        err.unwrap();
    }

    let timeline_wrong_name = Timeline::new("lag_time", TimeType::Time);
    let timeline_wrong_kind = Timeline::new("log_time", TimeType::Sequence);
    let timeline_frame_nr = Timeline::new("frame_nr", TimeType::Sequence);
    let timeline_log_time = Timeline::log_time();

    // empty frame_nr
    {
        let row_indices = store.latest_at(
            &LatestAtQuery::new(timeline_frame_nr, frame39),
            &ent_path,
            InstanceKey::name(),
            &[InstanceKey::name()],
        );
        assert!(row_indices.is_none());
    }

    // empty log_time
    {
        let row_indices = store.latest_at(
            &LatestAtQuery::new(timeline_log_time, now_minus_1s_nanos),
            &ent_path,
            InstanceKey::name(),
            &[InstanceKey::name()],
        );
        assert!(row_indices.is_none());
    }

    // wrong entity path
    {
        let row_indices = store.latest_at(
            &LatestAtQuery::new(timeline_frame_nr, frame40),
            &EntityPath::from("does/not/exist"),
            InstanceKey::name(),
            &[InstanceKey::name()],
        );
        assert!(row_indices.is_none());
    }

    // bunch of non-existing components
    {
        let components = &["they".into(), "dont".into(), "exist".into()];
        let row_indices = store
            .latest_at(
                &LatestAtQuery::new(timeline_frame_nr, frame40),
                &ent_path,
                InstanceKey::name(),
                components,
            )
            .unwrap();
        let rows = store.get(components, &row_indices);
        rows.iter().all(|row| row.is_none());
    }

    // empty component list
    {
        let row_indices = store
            .latest_at(
                &LatestAtQuery::new(timeline_frame_nr, frame40),
                &ent_path,
                InstanceKey::name(),
                &[],
            )
            .unwrap();
        assert!(row_indices.is_empty());
    }

    // wrong timeline name
    {
        let row_indices = store.latest_at(
            &LatestAtQuery::new(timeline_wrong_name, frame40),
            &EntityPath::from("does/not/exist"),
            InstanceKey::name(),
            &[InstanceKey::name()],
        );
        assert!(row_indices.is_none());
    }

    // wrong timeline kind
    {
        let row_indices = store.latest_at(
            &LatestAtQuery::new(timeline_wrong_kind, frame40),
            &EntityPath::from("does/not/exist"),
            InstanceKey::name(),
            &[InstanceKey::name()],
        );
        assert!(row_indices.is_none());
    }
}

// ---

// This one demonstrates a nasty edge case when stream-joining multiple iterators that happen to
// share the same exact row of data at some point (because, for that specific entry, it turns out
// that those component where inserted together).
//
// When that happens, one must be very careful to not only compare time and index row numbers, but
// also make sure that, if all else if equal, the primary iterator comes last so that it gathers as
// much state as possible!

#[cfg(feature = "polars")]
#[test]
fn range_join_across_single_row() {
    init_logs();

    for config in re_arrow_store::test_util::all_configs() {
        let mut store = DataStore::new(InstanceKey::name(), config.clone());
        range_join_across_single_row_impl(&mut store);
    }
}

#[cfg(feature = "polars")]
fn range_join_across_single_row_impl(store: &mut DataStore) {
    use arrow2::array::Array;
    use polars_core::{
        prelude::{DataFrame, JoinType},
        series::Series,
    };
    use re_log_types::component_types::{ColorRGBA, Point2D};
    use re_log_types::external::arrow2_convert::serialize::TryIntoArrow as _;

    let ent_path = EntityPath::from("this/that");

    let points = build_some_point2d(3);
    let colors = build_some_colors(3);
    let row =
        test_row!(ent_path @ [build_frame_nr(42.into())] => 3; [points.clone(), colors.clone()]);
    store.insert_row(&row).unwrap();

    let timeline_frame_nr = Timeline::new("frame_nr", TimeType::Sequence);
    let query = re_arrow_store::RangeQuery::new(
        timeline_frame_nr,
        re_arrow_store::TimeRange::new(i64::MIN.into(), i64::MAX.into()),
    );
    let components = [InstanceKey::name(), Point2D::name(), ColorRGBA::name()];
    let dfs = re_arrow_store::polars_util::range_components(
        store,
        &query,
        &ent_path,
        Point2D::name(),
        components,
        &JoinType::Outer,
    )
    .collect::<Vec<_>>();

    let df_expected = {
        let instances: Box<dyn Array> = vec![InstanceKey(0), InstanceKey(1), InstanceKey(2)]
            .try_into_arrow()
            .unwrap();
        let points: Box<dyn Array> = points.try_into_arrow().unwrap();
        let colors: Box<dyn Array> = colors.try_into_arrow().unwrap();

        DataFrame::new(vec![
            Series::try_from((InstanceKey::name().as_str(), instances)).unwrap(),
            Series::try_from((Point2D::name().as_str(), points)).unwrap(),
            Series::try_from((ColorRGBA::name().as_str(), colors)).unwrap(),
        ])
        .unwrap()
    };

    assert_eq!(1, dfs.len());
    let (_, df) = dfs[0].clone().unwrap();

    assert_eq!(df_expected, df);
}

// ---

#[test]
fn gc_correct() {
    init_logs();

    let mut store = DataStore::new(
        InstanceKey::name(),
        DataStoreConfig {
            component_bucket_nb_rows: 0,
            ..Default::default()
        },
    );

    let mut rng = rand::thread_rng();

    let num_frames = rng.gen_range(0..=100);
    let frames = (0..num_frames).filter(|_| rand::thread_rng().gen());
    for frame_nr in frames {
        let num_ents = 10;
        for i in 0..num_ents {
            let ent_path = EntityPath::from(format!("this/that/{i}"));
            let num_instances = rng.gen_range(0..=1_000);
            let row = test_row!(ent_path @ [
                build_frame_nr(frame_nr.into()),
            ] => num_instances; [
                build_some_colors(num_instances as _),
            ]);
            store.insert_row(&row).unwrap();
        }
    }

    if let err @ Err(_) = store.sanity_check() {
        store.sort_indices_if_needed();
        eprintln!("{store}");
        err.unwrap();
    }
    check_still_readable(&store);

    let msg_id_chunks = store.gc(
        GarbageCollectionTarget::DropAtLeastPercentage(1.0),
        Timeline::new("frame_nr", TimeType::Sequence),
        MsgId::name(),
    );

    let msg_ids = msg_id_chunks
        .iter()
        .flat_map(|chunk| arrow_array_deserialize_iterator::<Option<MsgId>>(&**chunk).unwrap())
        .map(Option::unwrap) // MsgId is always present
        .collect::<ahash::HashSet<_>>();
    assert!(!msg_ids.is_empty());

    if let err @ Err(_) = store.sanity_check() {
        store.sort_indices_if_needed();
        eprintln!("{store}");
        err.unwrap();
    }
    check_still_readable(&store);
    for msg_id in &msg_ids {
        assert!(store.get_msg_metadata(msg_id).is_some());
    }

    store.clear_msg_metadata(&msg_ids);

    if let err @ Err(_) = store.sanity_check() {
        store.sort_indices_if_needed();
        eprintln!("{store}");
        err.unwrap();
    }
    check_still_readable(&store);
    for msg_id in &msg_ids {
        assert!(store.get_msg_metadata(msg_id).is_none());
    }

    let msg_id_chunks = store.gc(
        GarbageCollectionTarget::DropAtLeastPercentage(1.0),
        Timeline::new("frame_nr", TimeType::Sequence),
        MsgId::name(),
    );

    let msg_ids = msg_id_chunks
        .iter()
        .flat_map(|chunk| arrow_array_deserialize_iterator::<Option<MsgId>>(&**chunk).unwrap())
        .map(Option::unwrap) // MsgId is always present
        .collect::<ahash::HashSet<_>>();
    assert!(msg_ids.is_empty());

    if let err @ Err(_) = store.sanity_check() {
        store.sort_indices_if_needed();
        eprintln!("{store}");
        err.unwrap();
    }
    check_still_readable(&store);

    assert_eq!(2, store.total_temporal_component_rows());
}

fn check_still_readable(_store: &DataStore) {
    #[cfg(feature = "polars")]
    {
        _ = _store.to_dataframe(); // simple way of checking that everything is still readable
    }
}

// ---

pub fn init_logs() {
    static INIT: AtomicBool = AtomicBool::new(false);

    if INIT.compare_exchange(false, true, SeqCst, SeqCst).is_ok() {
        re_log::setup_native_logging();
    }
}
