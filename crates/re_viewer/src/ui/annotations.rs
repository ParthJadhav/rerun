use std::{collections::BTreeMap, sync::Arc};

use lazy_static::lazy_static;
use nohash_hasher::IntSet;

use re_arrow_store::LatestAtQuery;
use re_data_store::EntityPath;
use re_log_types::{
    component_types::{ClassId, KeypointId},
    context::{AnnotationInfo, ClassDescription},
    AnnotationContext, Component, MsgId,
};
use re_query::query_entity_with_primary;

use crate::{misc::ViewerContext, ui::scene::SceneQuery};

#[derive(Clone, Debug)]
pub struct Annotations {
    pub msg_id: MsgId,
    pub context: AnnotationContext,
}

impl Annotations {
    pub fn class_description(&self, class_id: Option<ClassId>) -> ResolvedClassDescription<'_> {
        ResolvedClassDescription(
            class_id.and_then(|class_id| self.context.class_map.get(&class_id)),
        )
    }
}

pub struct ResolvedClassDescription<'a>(pub Option<&'a ClassDescription>);

impl<'a> ResolvedClassDescription<'a> {
    pub fn annotation_info(&self) -> ResolvedAnnotationInfo {
        ResolvedAnnotationInfo(self.0.map(|desc| desc.info.clone()))
    }

    /// Merges class annotation info with keypoint annotation info (if existing respectively).
    pub fn annotation_info_with_keypoint(&self, keypoint_id: KeypointId) -> ResolvedAnnotationInfo {
        if let Some(desc) = self.0 {
            // Assuming that keypoint annotation is the rarer case, merging the entire annotation ahead of time
            // is cheaper than doing it lazily (which would cause more branches down the line for callsites without keypoints)
            if let Some(keypoint_annotation_info) = desc.keypoint_map.get(&keypoint_id) {
                ResolvedAnnotationInfo(Some(AnnotationInfo {
                    id: keypoint_id.0,
                    label: keypoint_annotation_info
                        .label
                        .clone()
                        .or_else(|| desc.info.label.clone()),
                    color: keypoint_annotation_info.color.or(desc.info.color),
                }))
            } else {
                self.annotation_info()
            }
        } else {
            ResolvedAnnotationInfo(None)
        }
    }
}

#[derive(Clone, Copy)]
pub enum DefaultColor<'a> {
    OpaqueWhite,
    TransparentBlack,
    EntityPath(&'a EntityPath),
}

#[derive(Clone)]
pub struct ResolvedAnnotationInfo(pub Option<AnnotationInfo>);

impl ResolvedAnnotationInfo {
    pub fn color(
        &self,
        color: Option<&[u8; 4]>,
        default_color: DefaultColor<'_>,
    ) -> re_renderer::Color32 {
        if let Some([r, g, b, a]) = color {
            re_renderer::Color32::from_rgba_premultiplied(*r, *g, *b, *a)
        } else if let Some(color) = self.0.as_ref().and_then(|info| {
            info.color
                .map(|c| c.into())
                .or_else(|| Some(auto_color(info.id)))
        }) {
            color
        } else {
            match default_color {
                DefaultColor::TransparentBlack => re_renderer::Color32::TRANSPARENT,
                DefaultColor::OpaqueWhite => re_renderer::Color32::WHITE,
                DefaultColor::EntityPath(entity_path) => {
                    auto_color((entity_path.hash64() % std::u16::MAX as u64) as u16)
                }
            }
        }
    }

    pub fn label(&self, label: Option<&String>) -> Option<String> {
        if let Some(label) = label {
            Some(label.clone())
        } else {
            self.0
                .as_ref()
                .and_then(|info| info.label.as_ref().map(|label| label.0.clone()))
        }
    }
}

#[derive(Default, Clone, Debug)]
pub struct AnnotationMap(pub BTreeMap<EntityPath, Arc<Annotations>>);

impl AnnotationMap {
    /// For each `EntityPath` in the `SceneQuery`, walk up the tree and find the nearest ancestor
    ///
    /// An entity is considered its own (nearest) ancestor.
    pub fn load(&mut self, ctx: &mut ViewerContext<'_>, scene_query: &SceneQuery<'_>) {
        crate::profile_function!();

        let mut visited = IntSet::<EntityPath>::default();

        let data_store = &ctx.log_db.entity_db.data_store;
        let latest_at_query = LatestAtQuery::new(scene_query.timeline, scene_query.latest_at);

        // This logic is borrowed from `iter_ancestor_meta_field`, but using the arrow-store instead
        // not made generic as `AnnotationContext` was the only user of that function
        for entity_path in scene_query
            .entity_paths
            .iter()
            .filter(|entity_path| scene_query.entity_props_map.get(entity_path).visible)
        {
            let mut next_parent = Some(entity_path.clone());
            while let Some(parent) = next_parent {
                // If we've visited this parent before it's safe to break early.
                // All of it's parents have have also been visited.
                if !visited.insert(parent.clone()) {
                    break;
                }

                match self.0.entry(parent.clone()) {
                    // If we've hit this path before and found a match, we can also break.
                    // This should not actually get hit due to the above early-exit.
                    std::collections::btree_map::Entry::Occupied(_) => break,
                    // Otherwise check the obj_store for the field.
                    // If we find one, insert it and then we can break.
                    std::collections::btree_map::Entry::Vacant(entry) => {
                        if query_entity_with_primary::<AnnotationContext>(
                            data_store,
                            &latest_at_query,
                            &parent,
                            &[MsgId::name()],
                        )
                        .ok()
                        .and_then(|entity| {
                            if let (Some(context), Some(msg_id)) = (
                                entity.iter_primary().ok()?.next()?,
                                entity.iter_component::<MsgId>().ok()?.next()?,
                            ) {
                                Some(entry.insert(Arc::new(Annotations { msg_id, context })))
                            } else {
                                None
                            }
                        })
                        .is_some()
                        {
                            break;
                        }
                    }
                }
                // Finally recurse to the next parent up the path
                // TODO(jleibs): this is somewhat expensive as it needs to re-hash the entity path.
                next_parent = parent.parent();
            }
        }
    }

    // Search through the all prefixes of this entity path until we find a
    // matching annotation. If we find nothing return the default `MISSING_ANNOTATIONS`.
    pub fn find<'a>(&self, entity_path: impl Into<&'a EntityPath>) -> Arc<Annotations> {
        let mut next_parent = Some(entity_path.into().clone());
        while let Some(parent) = next_parent {
            if let Some(legend) = self.0.get(&parent) {
                return legend.clone();
            }

            next_parent = parent.parent().clone();
        }

        // Otherwise return the missing legend
        Arc::clone(&MISSING_ANNOTATIONS)
    }
}

// ---

const MISSING_MSG_ID: MsgId = MsgId::ZERO;

lazy_static! {
    pub static ref MISSING_ANNOTATIONS: Arc<Annotations> = {
        Arc::new(Annotations {
            msg_id: MISSING_MSG_ID,
            context: Default::default(),
        })
    };
}

// default colors
// Borrowed from `egui::PlotUi`
pub fn auto_color(val: u16) -> re_renderer::Color32 {
    let golden_ratio = (5.0_f32.sqrt() - 1.0) / 2.0; // 0.61803398875
    let h = val as f32 * golden_ratio;
    egui::Color32::from(egui::ecolor::Hsva::new(h, 0.85, 0.5, 1.0))
}
