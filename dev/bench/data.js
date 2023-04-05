window.BENCHMARK_DATA = {
  "lastUpdate": 1680708550803,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ff3191cd7acfa7e63baf09b5cb0e41299c882c1",
          "message": "Fix arrows requiring a radius to be visible (#1720)\n\n* Fix arrows requiring a radius to be visible.\r\n.. that is the immediately user-facing problem this solves. But in fact it makes the line renderer a bit more predictable: Previously, line caps would extend the line. Now they stay within the bounds of the previously determined line positions!\r\n\r\n* fix combination of round and arrow caps causing incorrect line length\r\n\r\n* fix rectangles no longer being properly rounded\r\n\r\n* spelling\r\n\r\n* control outward extending for start/end caps separately. Make viewer arrows have a rounded base with outwards extension\r\n\r\n* line shader simplifications",
          "timestamp": "2023-03-28T13:08:30+02:00",
          "tree_id": "551104791fe562e5accbf0019c62650aa07837c4",
          "url": "https://github.com/rerun-io/rerun/commit/0ff3191cd7acfa7e63baf09b5cb0e41299c882c1"
        },
        "date": 1680002466739,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 608152,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1845,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 287,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152510,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43451781,
            "range": "± 1105165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122816272,
            "range": "± 1289870",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151781168,
            "range": "± 552829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323725799,
            "range": "± 1702107",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177567386,
            "range": "± 953469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53587070,
            "range": "± 1103956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 231015505,
            "range": "± 1410548",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288112,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6188,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 385152,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 687040,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352164,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1607,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359563,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6078235757,
            "range": "± 11589970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1752430,
            "range": "± 15347",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3061032,
            "range": "± 8796",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15449,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43639,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 479866,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andreas Reich",
            "username": "Wumpf",
            "email": "andreas@rerun.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ff3191cd7acfa7e63baf09b5cb0e41299c882c1",
          "message": "Fix arrows requiring a radius to be visible (#1720)\n\n* Fix arrows requiring a radius to be visible.\r\n.. that is the immediately user-facing problem this solves. But in fact it makes the line renderer a bit more predictable: Previously, line caps would extend the line. Now they stay within the bounds of the previously determined line positions!\r\n\r\n* fix combination of round and arrow caps causing incorrect line length\r\n\r\n* fix rectangles no longer being properly rounded\r\n\r\n* spelling\r\n\r\n* control outward extending for start/end caps separately. Make viewer arrows have a rounded base with outwards extension\r\n\r\n* line shader simplifications",
          "timestamp": "2023-03-28T11:08:30Z",
          "url": "https://github.com/rerun-io/rerun/commit/0ff3191cd7acfa7e63baf09b5cb0e41299c882c1"
        },
        "date": 1680006729913,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 612022,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1850,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 292,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152890,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48635666,
            "range": "± 1324793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134976653,
            "range": "± 1236588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166405250,
            "range": "± 1061791",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350408483,
            "range": "± 2080116",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188774152,
            "range": "± 1165284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62299776,
            "range": "± 878320",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247162441,
            "range": "± 1574092",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288290,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6105,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 384037,
            "range": "± 2590",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 700886,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350984,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1609,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359916,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6900254250,
            "range": "± 16932732",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1767107,
            "range": "± 26753",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3084449,
            "range": "± 19563",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16067,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 44048,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 480052,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f8334cde15bd113575b1cb6b23846c3b3b0528",
          "message": "Release 0.4.0 - Outlines, web viewer and performance improvements (#1722)\n\n* Thank external contributors in the changelog\r\n\r\n* Fix the same error message being printed twice\r\n\r\n* Update CHANGELOG.md\r\n\r\n* Bump version numbers to 0.4.0\r\n\r\n* Add video to changelog",
          "timestamp": "2023-03-28T15:58:56+02:00",
          "tree_id": "fe1ee6c2a62f7015f82ebe9d2f08643f345ce5fa",
          "url": "https://github.com/rerun-io/rerun/commit/c8f8334cde15bd113575b1cb6b23846c3b3b0528"
        },
        "date": 1680012627847,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 596359,
            "range": "± 3009",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1814,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 441,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152387,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50695755,
            "range": "± 603943",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137012958,
            "range": "± 1435717",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170403732,
            "range": "± 2595227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355326946,
            "range": "± 4914258",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 195058291,
            "range": "± 1641424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65364685,
            "range": "± 766884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252334343,
            "range": "± 2500244",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 285061,
            "range": "± 832",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6148,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 391709,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 687065,
            "range": "± 4473",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 359476,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1606,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358495,
            "range": "± 1886",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7157328145,
            "range": "± 97519078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1806534,
            "range": "± 17878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2999236,
            "range": "± 11723",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 18070,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 44949,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 509535,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af7d3b192157f942e35f64d3561a9a8dbcc18bfa",
          "message": "Fix videos for GitHub in CHANGELOG.md",
          "timestamp": "2023-03-28T19:27:46+02:00",
          "tree_id": "72627cb39a8b515ffdc235f577916b20e1f515f6",
          "url": "https://github.com/rerun-io/rerun/commit/af7d3b192157f942e35f64d3561a9a8dbcc18bfa"
        },
        "date": 1680025109491,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 598886,
            "range": "± 2743",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1842,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 287,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 442,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149831,
            "range": "± 1530",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43920815,
            "range": "± 1452001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122581807,
            "range": "± 1503108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153137893,
            "range": "± 866290",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321713536,
            "range": "± 1551166",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178398636,
            "range": "± 1177896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 52854533,
            "range": "± 686112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 231463087,
            "range": "± 1626600",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 283689,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6001,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 383307,
            "range": "± 2587",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699827,
            "range": "± 6210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352387,
            "range": "± 2435",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1566,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357533,
            "range": "± 2317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6176279631,
            "range": "± 21733185",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1741136,
            "range": "± 11763",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3046213,
            "range": "± 14712",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17999,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43167,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 501600,
            "range": "± 4994",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c12938cab1da4e4971fa33d9d0dfa1e2313345a",
          "message": "Post-release cleanup (#1726)\n\n* re_web_viewer_server: be explicit with what gets bundled in the crate\r\n\r\n* Fix a warning in release builds\r\n\r\n* Publish the crates quietly to better follow their progress\r\n\r\n* Update the RELEASES.md checklist\r\n\r\n* Highlight all breaking changes\r\n\r\n* Improve RELEASES.md\r\n\r\n* Remove dead doctest\r\n\r\n* Build-fix",
          "timestamp": "2023-03-28T20:41:58+02:00",
          "tree_id": "e3d2072ce96bb10e899b3c356b2d4a7fcc271636",
          "url": "https://github.com/rerun-io/rerun/commit/1c12938cab1da4e4971fa33d9d0dfa1e2313345a"
        },
        "date": 1680029694697,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 593911,
            "range": "± 5519",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1792,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 274,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 144420,
            "range": "± 2553",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 38988125,
            "range": "± 1978229",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126675529,
            "range": "± 1989102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156272521,
            "range": "± 3573050",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329849052,
            "range": "± 3822145",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178154001,
            "range": "± 2223215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53719099,
            "range": "± 1587126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 232970399,
            "range": "± 3184196",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 267185,
            "range": "± 3173",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5806,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 369900,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 656456,
            "range": "± 7786",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343418,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1485,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351741,
            "range": "± 3020",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6991458492,
            "range": "± 29665211",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1644339,
            "range": "± 17752",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2904465,
            "range": "± 26689",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16990,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41970,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 479655,
            "range": "± 5078",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3b459f016a40a77ba23f5e396f84a4ea20d86e5",
          "message": "end-to-end batching 4: retire `MsgBundle` + batching support in transport layer (#1679)\n\n* Batching support at the transport layer\r\n\r\n* fmt\r\n\r\n* woop\r\n\r\n* self reviewW\r\n\r\n* doctest whining\r\n\r\n* oh cmon\r\n\r\n* addressing PR comments\r\n\r\n* 0-indexed rows in examples",
          "timestamp": "2023-03-29T10:00:41+02:00",
          "tree_id": "2bd9aafdb003a0dbdc3e5be29fd394b6e76af217",
          "url": "https://github.com/rerun-io/rerun/commit/d3b459f016a40a77ba23f5e396f84a4ea20d86e5"
        },
        "date": 1680077643842,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 613360,
            "range": "± 2450",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1854,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 437,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153084,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45095447,
            "range": "± 815265",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 183869457,
            "range": "± 1497684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 222487012,
            "range": "± 1418038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 449525904,
            "range": "± 2751440",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 265744193,
            "range": "± 1871293",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 99878259,
            "range": "± 874456",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 364404996,
            "range": "± 2309100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35268140,
            "range": "± 2123546",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9356328,
            "range": "± 812413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1808729,
            "range": "± 8582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 49341341,
            "range": "± 1943977",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 991089,
            "range": "± 4752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 17540706,
            "range": "± 1258358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 20186464,
            "range": "± 1180501",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 279031,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7659,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 391445,
            "range": "± 2031",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697272,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 323104,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2859,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 332868,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6918828701,
            "range": "± 18334367",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1799250,
            "range": "± 16872",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3065257,
            "range": "± 19725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16274,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 44550,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 531374,
            "range": "± 5794",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f1791af6f4f91d02ef2e0760e49d4ca35d5cefd",
          "message": "Change EntityPathHash to be 64 bit (#1723)\n\n* Change EntityPathHash to be 64 bit\r\n\r\n* use write! macro instead of f.write_str\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-03-29T10:14:00+02:00",
          "tree_id": "daa880c61a4d996e4b8737920d1eb295917d6d81",
          "url": "https://github.com/rerun-io/rerun/commit/1f1791af6f4f91d02ef2e0760e49d4ca35d5cefd"
        },
        "date": 1680078445819,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 604916,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1871,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 283,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153548,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44548872,
            "range": "± 764710",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 181860171,
            "range": "± 1302133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 222431426,
            "range": "± 1062884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 447867584,
            "range": "± 1669452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 266281764,
            "range": "± 1017764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 95347641,
            "range": "± 1029190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 362483952,
            "range": "± 1618307",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 34624454,
            "range": "± 2336250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9713815,
            "range": "± 851019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1769737,
            "range": "± 16169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 47728270,
            "range": "± 2667756",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 971167,
            "range": "± 4061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 17318155,
            "range": "± 1991361",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 19165108,
            "range": "± 1065307",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 286779,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7956,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 385614,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693373,
            "range": "± 1835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 338533,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2905,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347684,
            "range": "± 6006",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6845684190,
            "range": "± 18410707",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1777679,
            "range": "± 12548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2994167,
            "range": "± 8352",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17183,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43095,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506123,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0c2fdea77633e92b891ed6db6bff28d4661e973",
          "message": "Central GpuReadback handling for re_viewer, experimental space view screenshots (#1717)\n\nEXPERIMENTAL: screenshot in context menu on spatial views",
          "timestamp": "2023-03-29T11:28:01+02:00",
          "tree_id": "934d2f8b6c1789578d5ae667a865239a51f02e24",
          "url": "https://github.com/rerun-io/rerun/commit/f0c2fdea77633e92b891ed6db6bff28d4661e973"
        },
        "date": 1680082884311,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 605599,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1836,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151509,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43059300,
            "range": "± 528134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 167580898,
            "range": "± 1263022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 209851844,
            "range": "± 3733358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 417361966,
            "range": "± 1812551",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 251422372,
            "range": "± 810673",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 85077520,
            "range": "± 727163",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 338052305,
            "range": "± 1368801",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35444065,
            "range": "± 1258314",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9305538,
            "range": "± 761267",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1762443,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 47352681,
            "range": "± 2488976",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 985723,
            "range": "± 2709",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 18418610,
            "range": "± 1256736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 19568993,
            "range": "± 714999",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288751,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7800,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 389641,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 696104,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 337022,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2935,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346135,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6133941953,
            "range": "± 22892058",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1809200,
            "range": "± 7892",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3045916,
            "range": "± 11102",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17082,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42955,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506159,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d84d2d1bd8911ccbd99574a11f2492078cd7bbf9",
          "message": "GPU based picking with points (#1721)\n\n* a working re_renderer example for picking in point clouds\r\n* a debug overlay renderer\r\n* a (incomplete) picking draw phase, fully implemented for point clouds\r\n* the ability to schedule readback transfers for picking rects that are rendered on demand to a small texture\r\n* refactor draw phase processing out to its own module (we should formalize things things some more later!)",
          "timestamp": "2023-03-29T15:58:33+02:00",
          "tree_id": "b0a0e4d2c29574766ed666891cb97d314408cf61",
          "url": "https://github.com/rerun-io/rerun/commit/d84d2d1bd8911ccbd99574a11f2492078cd7bbf9"
        },
        "date": 1680099133943,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 595656,
            "range": "± 5248",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1827,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149051,
            "range": "± 2000",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42956054,
            "range": "± 846925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 181906241,
            "range": "± 1670214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 219005854,
            "range": "± 1655460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 443594955,
            "range": "± 3756558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 266153192,
            "range": "± 2562157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 94505495,
            "range": "± 1244586",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 359343268,
            "range": "± 14241870",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 31349750,
            "range": "± 1599319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8889953,
            "range": "± 501904",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1770994,
            "range": "± 15125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44236809,
            "range": "± 2346489",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 987788,
            "range": "± 5247",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16492553,
            "range": "± 1183928",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 18039322,
            "range": "± 881815",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 280540,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7621,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 381834,
            "range": "± 3251",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 683418,
            "range": "± 8730",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 335913,
            "range": "± 2797",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2836,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347147,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6801273546,
            "range": "± 16225597",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1743930,
            "range": "± 21940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2966999,
            "range": "± 25040",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16890,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42739,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 497910,
            "range": "± 6017",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d219e67de1c30f593175dc8c38f782d44614cf0",
          "message": "improved renderer label handling (#1731)\n\n* use format! instead of push_str on DebugLabel\r\n\r\n* change most DebugLabels to more principled naming approach by mirrored rust field\r\n\r\n* introduce include_shader_module for automatic debug labels on shader modules\r\n\r\n* doc warning fix\r\n\r\n* strip path prefix from shader",
          "timestamp": "2023-03-29T19:30:14+02:00",
          "tree_id": "af087239b8dafe360924ba5923dbbcd2fba6be23",
          "url": "https://github.com/rerun-io/rerun/commit/6d219e67de1c30f593175dc8c38f782d44614cf0"
        },
        "date": 1680111848912,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 604432,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1875,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 280,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 167577,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48140756,
            "range": "± 553167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 186798797,
            "range": "± 1628346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 230999657,
            "range": "± 3655728",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 462511998,
            "range": "± 4022138",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 276288133,
            "range": "± 1820309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 101352669,
            "range": "± 1355560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 372735857,
            "range": "± 2649819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 45633505,
            "range": "± 826076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 16223157,
            "range": "± 767037",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1855934,
            "range": "± 37424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 61330388,
            "range": "± 1387494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 1031892,
            "range": "± 38272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 24058907,
            "range": "± 355251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 25835228,
            "range": "± 488503",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 291854,
            "range": "± 2182",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7839,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 400285,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 723520,
            "range": "± 10485",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352255,
            "range": "± 6589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2941,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355726,
            "range": "± 3360",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 8198778068,
            "range": "± 96848496",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 2023940,
            "range": "± 250786",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3199163,
            "range": "± 275112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17113,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43284,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 507484,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82f5d69948d6f4379ce70816e25bfc850fe94d22",
          "message": "Optimize the depth-cloud shader when depth=0 (#1729)\n\n* Optimize the depth-cloud shader when depth=0\r\n\r\ndepth=0 is a degenerate case that causes a 1440x1920 depth-map\r\nfrom https://github.com/rerun-io/rerun/pull/1538 take 75ms (!) on my\r\nM1 MacBook Pro.\r\n\r\nWith this fix this goes down to 15 ms\r\n\r\nHowever, if we zoom out a lot, so that the depth point cloud covers\r\na very small part of the screen, the slowness returns.\r\n\r\nI suspect this is a GPU binning problem of some sort, where too many\r\npoints in too small of a screen area causes performence issues.\r\n\r\n* Put happy-path first, and also handle NaNs\r\n\r\n* var -> let\r\n\r\n* Remove unnecessary parenthesis in wgsl if-statements",
          "timestamp": "2023-03-30T10:39:04+02:00",
          "tree_id": "9768c8bf499dffa5a5db1384725b16e3ee35b215",
          "url": "https://github.com/rerun-io/rerun/commit/82f5d69948d6f4379ce70816e25bfc850fe94d22"
        },
        "date": 1680166845980,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10706570,
            "range": "± 389113",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12452965,
            "range": "± 359625",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 11718709,
            "range": "± 366919",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10344431,
            "range": "± 349602",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10205868,
            "range": "± 334515",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 9931804,
            "range": "± 351812",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 11597255,
            "range": "± 597620",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11200708,
            "range": "± 457977",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10043978,
            "range": "± 350760",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 9999497,
            "range": "± 315662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1806,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1837,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1829,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1804,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1797,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1827,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1838,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1815,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1807,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1814,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 273,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 272,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 429,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 274,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 430,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 272,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 426,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 273,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 428,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 272,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 425,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 275,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 430,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 271,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 428,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 272,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 422,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 273,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 420,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 10731768,
            "range": "± 391536",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2426758,
            "range": "± 24070",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2356495,
            "range": "± 23638",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 2056590,
            "range": "± 21943",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1939902,
            "range": "± 24654",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10241736,
            "range": "± 538329",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2375451,
            "range": "± 29926",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2389685,
            "range": "± 22242",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 2044606,
            "range": "± 23931",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1982228,
            "range": "± 22101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 40599288,
            "range": "± 697218",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165205809,
            "range": "± 1451326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 205478067,
            "range": "± 1474392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 412623098,
            "range": "± 2059405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 253241563,
            "range": "± 1595261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 84861512,
            "range": "± 1103824",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 336380010,
            "range": "± 2357202",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 30957516,
            "range": "± 1271417",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9263854,
            "range": "± 397210",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1931279,
            "range": "± 19131",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44449171,
            "range": "± 1420466",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 1065718,
            "range": "± 9497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16651452,
            "range": "± 712473",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 18118866,
            "range": "± 686053",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 280045,
            "range": "± 4128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7381,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 425198,
            "range": "± 3168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717571,
            "range": "± 8166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 361435,
            "range": "± 3655",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2790,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 368416,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6182615719,
            "range": "± 22343798",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1851832,
            "range": "± 20835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3113566,
            "range": "± 30277",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16716,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 45410,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506513,
            "range": "± 6390",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "v.sury@fizyr.com",
            "name": "vsuryamurthy",
            "username": "vsuryamurthy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "118630cbcc15ce19fcd8971a5a9a7a46e0761e86",
          "message": "Remove unnecessary dependencies (#1711)\n\n* remove unnecessary dependencies from re_viewer\r\n\r\n* remove more unused dependencies\r\n\r\n* remove some more external unused dependencies\r\n\r\n* update cargo lock\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-03-30T14:31:57+02:00",
          "tree_id": "9864211244a79a396ae08b7cf3c3b4e5319a46bc",
          "url": "https://github.com/rerun-io/rerun/commit/118630cbcc15ce19fcd8971a5a9a7a46e0761e86"
        },
        "date": 1680180909206,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 12379764,
            "range": "± 657716",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 14032856,
            "range": "± 630549",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 13325329,
            "range": "± 790890",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11151192,
            "range": "± 533348",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10993438,
            "range": "± 433677",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10704961,
            "range": "± 520279",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13012367,
            "range": "± 724960",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12828264,
            "range": "± 783052",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 11675537,
            "range": "± 843174",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10819004,
            "range": "± 619410",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1841,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1863,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1861,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1851,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1855,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1842,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1871,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1867,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1841,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1849,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 445,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 282,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 283,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 283,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 283,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 283,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 13580447,
            "range": "± 1338003",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2229375,
            "range": "± 18821",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2135611,
            "range": "± 7671",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1887581,
            "range": "± 7398",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1895081,
            "range": "± 16027",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 12127148,
            "range": "± 1145753",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2172117,
            "range": "± 16952",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2224646,
            "range": "± 24429",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1882330,
            "range": "± 18286",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1862335,
            "range": "± 100433",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47556952,
            "range": "± 1744151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 184952998,
            "range": "± 2178062",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 228848482,
            "range": "± 2771203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 452197250,
            "range": "± 2349357",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 268471765,
            "range": "± 1109366",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 101372522,
            "range": "± 955933",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 364789697,
            "range": "± 2207278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 34499540,
            "range": "± 1754024",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 10191808,
            "range": "± 809149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1780969,
            "range": "± 10346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 48392635,
            "range": "± 2993308",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 982645,
            "range": "± 5663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 17529663,
            "range": "± 1978381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 20790421,
            "range": "± 951830",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288739,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7653,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 390895,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 694653,
            "range": "± 2013",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 337199,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2883,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350415,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7060741725,
            "range": "± 12411274",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1798259,
            "range": "± 15633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2994901,
            "range": "± 7327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16931,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43045,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 535786,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dbc5b9dcc213afd2253219539667fb1820a60f5",
          "message": "Improved readback data handling (#1734)\n\n* user or re_renderer is no longer forced to consume all data in one go, instead we'll search if the data you request is available and return it then\r\n    * this leaves the possibility for stale data, which might cause heavy memory leaks, so we clean stale stuff up automatically! (this can happen easily in a healthy application! Think closing a view for which you request picking data)\r\n* identifiers are user-chosen and not required to be unique (space view id is a good & valid identifier!)\r\n* readback data can cary arbitrary user data\r\n* the readback belt itself is a strictly internal datastructure now. Higher level systems like `ScreenshotProcessor` (new! shifting further towards a class-per-draw-pass; this is still an ongoing evolution!) or `PickingLayerProcessor` wrap your userdata and provide everything you need to know about for their readback data\r\n   * this keeps the readback belt agnostic while presenting high level constructs where needed! \r\n* Do smaller readback chunks",
          "timestamp": "2023-03-31T11:32:18+02:00",
          "tree_id": "8978e17c8c4f4be1b045cd6c05a1c73b9731338b",
          "url": "https://github.com/rerun-io/rerun/commit/6dbc5b9dcc213afd2253219539667fb1820a60f5"
        },
        "date": 1680256514952,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 11028769,
            "range": "± 551494",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12796273,
            "range": "± 340092",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12343529,
            "range": "± 455692",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11657105,
            "range": "± 516711",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 11429470,
            "range": "± 600029",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10703912,
            "range": "± 554155",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13009003,
            "range": "± 646748",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12585551,
            "range": "± 579351",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 11701801,
            "range": "± 457307",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10998929,
            "range": "± 623164",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1839,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1861,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1851,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1838,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1837,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1859,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1869,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1886,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1886,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1858,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 283,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 450,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 450,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 449,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 445,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 445,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 451,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 449,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 445,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11616219,
            "range": "± 525499",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2182250,
            "range": "± 15632",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2123443,
            "range": "± 10887",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1926170,
            "range": "± 16799",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1913440,
            "range": "± 16633",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11679932,
            "range": "± 552706",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2244443,
            "range": "± 21159",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2116964,
            "range": "± 13231",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1914764,
            "range": "± 7483",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1839548,
            "range": "± 9454",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42136952,
            "range": "± 775063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165243914,
            "range": "± 1366901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 207198428,
            "range": "± 1049427",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 415245120,
            "range": "± 2245045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 251133394,
            "range": "± 1214242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 86943563,
            "range": "± 970973",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 337217408,
            "range": "± 1798207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 34364939,
            "range": "± 1991528",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8678464,
            "range": "± 675461",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1801512,
            "range": "± 11278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44958727,
            "range": "± 2053000",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 975034,
            "range": "± 3095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 18453968,
            "range": "± 1186524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 18791933,
            "range": "± 794176",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288571,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7629,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 385642,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698230,
            "range": "± 3894",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339464,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2891,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349051,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6134033149,
            "range": "± 19368173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1778265,
            "range": "± 17037",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3028900,
            "range": "± 16317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16843,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43557,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 533713,
            "range": "± 7351",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c54abe055d979ad29e1b91b9b406b15776a79704",
          "message": "GPU based mesh picking in viewer (#1737)\n\n* picking layer support for meshes\r\n* move out view builder from render bridge into ui code\r\n* remove now pointless create_scene_paint_callback method\r\n* move screenshot taking out of renderer bridge, create view builder earlier in the ui build up process\r\n* fix some issues in mesh picking and add mesh to picking example\r\n* use gpu for mesh picking in the viewer\r\n* debug option for debugging picking overlay\r\n* no longer discard \"classic\" picking information\r\n* placeholder picking layer implementations for remaining opaque primitives\r\n* fix temporal gaps in gpu picking report",
          "timestamp": "2023-03-31T12:02:48+02:00",
          "tree_id": "1ac6e5a77fef99958f60a704912ef0e2c6d4f000",
          "url": "https://github.com/rerun-io/rerun/commit/c54abe055d979ad29e1b91b9b406b15776a79704"
        },
        "date": 1680258363258,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10718235,
            "range": "± 403013",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 13635519,
            "range": "± 500386",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12337820,
            "range": "± 395662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10876230,
            "range": "± 288112",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10733458,
            "range": "± 387121",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 9872101,
            "range": "± 421647",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 11491660,
            "range": "± 686669",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11653623,
            "range": "± 532616",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 9904202,
            "range": "± 335085",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 9881109,
            "range": "± 455000",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1836,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1845,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1815,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1810,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1802,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1835,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1834,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1804,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1808,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1812,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 278,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 429,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 278,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 440,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 436,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 431,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 428,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 438,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 436,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 277,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 431,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 438,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 10890880,
            "range": "± 446497",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2134825,
            "range": "± 18809",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2101418,
            "range": "± 19498",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1891604,
            "range": "± 17723",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1832908,
            "range": "± 19090",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10591835,
            "range": "± 540628",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2135590,
            "range": "± 20298",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2184293,
            "range": "± 17144",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1851820,
            "range": "± 16005",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1835181,
            "range": "± 14358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43217364,
            "range": "± 972079",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 180881943,
            "range": "± 1799900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 217927607,
            "range": "± 1944470",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 441610066,
            "range": "± 2526662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 263949615,
            "range": "± 1710186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 93398365,
            "range": "± 1209081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 360239038,
            "range": "± 2421993",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 30604243,
            "range": "± 1460648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8446424,
            "range": "± 585466",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1753609,
            "range": "± 15161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44022444,
            "range": "± 2211209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 971979,
            "range": "± 6696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16561974,
            "range": "± 879038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 18012104,
            "range": "± 1014319",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 282408,
            "range": "± 3270",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7560,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 379770,
            "range": "± 3873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693533,
            "range": "± 8299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339992,
            "range": "± 2934",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2792,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345523,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6760638375,
            "range": "± 19342682",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1731806,
            "range": "± 17891",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2923103,
            "range": "± 29055",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16712,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43032,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 523905,
            "range": "± 6903",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e84aa5f718fbf9ff32158caf746f225f017b598",
          "message": "`arrow2_convert` primitive (de)serialization benchmarks (#1742)\n\n* arrow2_convert primitive benchmarks\r\n\r\n* addressing PR comments",
          "timestamp": "2023-03-31T17:43:57+02:00",
          "tree_id": "83bf8cce1eaa30a36f31f480456e2597a293fc25",
          "url": "https://github.com/rerun-io/rerun/commit/1e84aa5f718fbf9ff32158caf746f225f017b598"
        },
        "date": 1680278891282,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 413783,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19536,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19223,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96275,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 207263,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58066,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10145102,
            "range": "± 352522",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12048569,
            "range": "± 447633",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12051372,
            "range": "± 855402",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11358128,
            "range": "± 421011",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10901296,
            "range": "± 419678",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 11733745,
            "range": "± 829902",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 14016063,
            "range": "± 795729",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 14955978,
            "range": "± 1336712",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 12090433,
            "range": "± 874399",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 11837369,
            "range": "± 869336",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1850,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1874,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1856,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1863,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1845,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1861,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1862,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1856,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1870,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1868,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 437,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 13809707,
            "range": "± 865890",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2203027,
            "range": "± 47911",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2168216,
            "range": "± 46671",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1875647,
            "range": "± 11106",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1883866,
            "range": "± 10031",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10400072,
            "range": "± 431216",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2194440,
            "range": "± 11960",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2122026,
            "range": "± 5662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1849348,
            "range": "± 9485",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1820217,
            "range": "± 11183",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42867912,
            "range": "± 881100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 164790626,
            "range": "± 1127918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 210861818,
            "range": "± 998326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 416349558,
            "range": "± 2684064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 254511216,
            "range": "± 1527236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 85936376,
            "range": "± 973463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 339472936,
            "range": "± 2078519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 39083235,
            "range": "± 1369007",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 11961378,
            "range": "± 942207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1785505,
            "range": "± 8123",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 52791770,
            "range": "± 1654431",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 986530,
            "range": "± 8005",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 21011125,
            "range": "± 587571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 21932697,
            "range": "± 577379",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288944,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7657,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 396846,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704820,
            "range": "± 3761",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340736,
            "range": "± 2317",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2893,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347903,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6088436739,
            "range": "± 56078824",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1885234,
            "range": "± 56053",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3016247,
            "range": "± 37425",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16977,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43603,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 535280,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "BenjaminDev@users.noreply.github.com",
            "name": "benjamin de charmoy",
            "username": "BenjaminDev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731d941eb776cf36d24d314d98de9f9efd69e537",
          "message": "Fix logged obb being displayed with half of the requested size (#1749)",
          "timestamp": "2023-04-01T10:57:19+02:00",
          "tree_id": "7df8e7bdec7c20b4062a56a4abb7a1bdc991875d",
          "url": "https://github.com/rerun-io/rerun/commit/731d941eb776cf36d24d314d98de9f9efd69e537"
        },
        "date": 1680340894597,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 410308,
            "range": "± 6427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19189,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 18837,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96526,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 203994,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 57785,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10343064,
            "range": "± 246058",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12249490,
            "range": "± 415991",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 11958824,
            "range": "± 723321",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10442893,
            "range": "± 378615",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10158891,
            "range": "± 433143",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10323251,
            "range": "± 380701",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 12217243,
            "range": "± 520057",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11962435,
            "range": "± 558956",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 11138464,
            "range": "± 396722",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10181662,
            "range": "± 389992",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1793,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1830,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1832,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1820,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1821,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1831,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1841,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1850,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1843,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1828,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 273,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 428,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 275,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 437,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 275,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 430,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 274,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 423,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 274,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 424,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 274,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 435,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 278,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 432,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 273,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 427,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 275,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 425,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 10752330,
            "range": "± 411952",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2182961,
            "range": "± 21243",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2130683,
            "range": "± 22110",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1860838,
            "range": "± 21077",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1845662,
            "range": "± 15458",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10462736,
            "range": "± 577240",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2103385,
            "range": "± 19106",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2075487,
            "range": "± 20604",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1804672,
            "range": "± 20187",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1823620,
            "range": "± 18059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43260194,
            "range": "± 1005004",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 179520051,
            "range": "± 2470426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 219339638,
            "range": "± 1476377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 440252153,
            "range": "± 2760339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 263740553,
            "range": "± 2072629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 94875201,
            "range": "± 1292781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 358081485,
            "range": "± 2638856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 31338943,
            "range": "± 1429791",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8170055,
            "range": "± 690173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1756504,
            "range": "± 17284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44816011,
            "range": "± 1746379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 976277,
            "range": "± 5357",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16445757,
            "range": "± 983011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 18159103,
            "range": "± 1113770",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 280199,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7497,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 384888,
            "range": "± 3635",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 681864,
            "range": "± 8286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339360,
            "range": "± 2724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2855,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346776,
            "range": "± 1945",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6802765507,
            "range": "± 28220893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1716591,
            "range": "± 22023",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2973626,
            "range": "± 33957",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16562,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42046,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 523611,
            "range": "± 7056",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef2b5dc851d3449a1eadf1d2c84b4b2e158b9619",
          "message": "benchmarks for common vector ops across `smallvec`/`tinyvec`/std (#1747)\n\n* benchmarks for common vector ops\r\n\r\n* handle N=1",
          "timestamp": "2023-04-01T16:15:11+02:00",
          "tree_id": "0a16e1fac6d07dfb83ef727b9faa58131ffa23a8",
          "url": "https://github.com/rerun-io/rerun/commit/ef2b5dc851d3449a1eadf1d2c84b4b2e158b9619"
        },
        "date": 1680360103200,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415775,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19569,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19240,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 99437,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 155169,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 57908,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 11329811,
            "range": "± 428484",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 13693294,
            "range": "± 524358",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12771463,
            "range": "± 513341",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11417114,
            "range": "± 399697",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 11248422,
            "range": "± 442970",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10933829,
            "range": "± 465879",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13603036,
            "range": "± 510392",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12737791,
            "range": "± 614309",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 11038686,
            "range": "± 398934",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10895292,
            "range": "± 500243",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1820,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1835,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1809,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1796,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1801,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1831,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1821,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1815,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1838,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1806,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 278,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 278,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11807336,
            "range": "± 560492",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2173789,
            "range": "± 15425",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2162677,
            "range": "± 18540",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1931980,
            "range": "± 28027",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1849934,
            "range": "± 17411",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11261033,
            "range": "± 537235",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2161285,
            "range": "± 8396",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2176439,
            "range": "± 8160",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1867103,
            "range": "± 11327",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1851533,
            "range": "± 8203",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12486,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9659,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9642,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5558,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2737,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2747,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2731,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2729,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32770,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18281,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12303,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42722,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28853,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20491,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42610459,
            "range": "± 446806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 164984628,
            "range": "± 1176101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 207721489,
            "range": "± 616974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 414635430,
            "range": "± 1420892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 253209953,
            "range": "± 750410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 86431144,
            "range": "± 597833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 339966947,
            "range": "± 1496559",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35656570,
            "range": "± 1378597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9887865,
            "range": "± 1041928",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1824556,
            "range": "± 8506",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 48036858,
            "range": "± 1475531",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 977943,
            "range": "± 3480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 19092287,
            "range": "± 978872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 20090836,
            "range": "± 700021",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 287474,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7686,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 384987,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701297,
            "range": "± 3261",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341321,
            "range": "± 1794",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2942,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347381,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6111644425,
            "range": "± 16788224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1792954,
            "range": "± 10995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3053739,
            "range": "± 12222",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16429,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43026,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506430,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5b68f2e64f7f4894b8e4b3f6fb0283001665101",
          "message": "Tracked 3D cameras lead now to on-hover rays in other space views that show the same camera but don't track it. (#1751)\n\nIn the same way as a 2D scene causes a on-hover ray in all space views that contain the space camera at which the 2D view \"sits\".",
          "timestamp": "2023-04-03T10:01:46+02:00",
          "tree_id": "8f0a63f70aae316922328254c561d9023c00239a",
          "url": "https://github.com/rerun-io/rerun/commit/d5b68f2e64f7f4894b8e4b3f6fb0283001665101"
        },
        "date": 1680510508897,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415037,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19350,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19368,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 97294,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 160533,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58559,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10566765,
            "range": "± 316059",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12142196,
            "range": "± 348934",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 11633520,
            "range": "± 374682",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10442528,
            "range": "± 284770",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10227569,
            "range": "± 306931",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10019789,
            "range": "± 369782",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 11631094,
            "range": "± 466069",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11424750,
            "range": "± 370588",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 9937837,
            "range": "± 287115",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 9866332,
            "range": "± 518822",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1817,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1832,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1828,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1821,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1798,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1828,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1844,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1835,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1830,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1812,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 12068378,
            "range": "± 542906",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2184001,
            "range": "± 7501",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2168306,
            "range": "± 13133",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1933176,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1828391,
            "range": "± 16691",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11445904,
            "range": "± 511766",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2192463,
            "range": "± 25423",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2114848,
            "range": "± 20404",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1844397,
            "range": "± 9311",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1820030,
            "range": "± 8899",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12493,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9646,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9660,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5613,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2734,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2721,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2731,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2728,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32828,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18328,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12338,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42772,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28838,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19861,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 41770543,
            "range": "± 1139998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165160729,
            "range": "± 1358921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 206805296,
            "range": "± 905202",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 415400764,
            "range": "± 2304647",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 250293303,
            "range": "± 966752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 83666056,
            "range": "± 892689",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 332996742,
            "range": "± 1808515",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 31411624,
            "range": "± 1198870",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8463616,
            "range": "± 379740",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1811105,
            "range": "± 7352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 43747820,
            "range": "± 1328384",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 974147,
            "range": "± 3375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16243651,
            "range": "± 681135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 17719584,
            "range": "± 811858",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 283388,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7609,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 381696,
            "range": "± 1405",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698278,
            "range": "± 4783",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 337620,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2925,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349185,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6103329517,
            "range": "± 19970787",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1757622,
            "range": "± 13180",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2966514,
            "range": "± 19990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16364,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42789,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506207,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27288541523ffdce04e16c3007830902e0feb138",
          "message": "Improve dealing with raw buffers for texture read/write (#1744)\n\n* Replace TextureRowDataInfo with the more versatile Texture2DBufferInfo\r\n\r\n* comment & naming fixes",
          "timestamp": "2023-04-03T11:49:38+02:00",
          "tree_id": "4919f2794334f159be0d7772ab02a3e77a295f5a",
          "url": "https://github.com/rerun-io/rerun/commit/27288541523ffdce04e16c3007830902e0feb138"
        },
        "date": 1680517185677,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 414731,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19550,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19362,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96793,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 162039,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58261,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10591012,
            "range": "± 415006",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12591752,
            "range": "± 492193",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12137762,
            "range": "± 531891",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10686316,
            "range": "± 401781",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10562339,
            "range": "± 393734",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10405402,
            "range": "± 587856",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 12719141,
            "range": "± 659290",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12152703,
            "range": "± 747051",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10314032,
            "range": "± 559231",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10118792,
            "range": "± 387465",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1819,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1804,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1804,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1810,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1801,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1857,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1825,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1840,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1802,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1807,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 282,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 282,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11518597,
            "range": "± 460972",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2244076,
            "range": "± 9399",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2168131,
            "range": "± 10911",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1910733,
            "range": "± 20584",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1927469,
            "range": "± 7854",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10583992,
            "range": "± 694319",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2174207,
            "range": "± 5470",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2142803,
            "range": "± 5916",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1870006,
            "range": "± 7904",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1843141,
            "range": "± 17078",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12487,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9646,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9641,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5566,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2733,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2743,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2730,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2724,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32776,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18273,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12312,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42720,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28804,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19891,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44405764,
            "range": "± 817005",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 180352535,
            "range": "± 1313741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 217191826,
            "range": "± 894658",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 441239600,
            "range": "± 1647479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 267097867,
            "range": "± 1156351",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 95806663,
            "range": "± 1445049",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 359931106,
            "range": "± 1856965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 34034189,
            "range": "± 1924243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9943646,
            "range": "± 965471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1807957,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 46463829,
            "range": "± 2142837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 981193,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 16642589,
            "range": "± 1016405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 19838088,
            "range": "± 1234294",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 284377,
            "range": "± 2006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7606,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 379697,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697869,
            "range": "± 2541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 334821,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2901,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345162,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6826519940,
            "range": "± 22461105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1816930,
            "range": "± 8102",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3003327,
            "range": "± 7321",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16457,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43298,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506528,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44393097b9619c49d4bfa16664d75dd67a49d9c5",
          "message": "`arrow2` erased refcounted clones benchmarks (#1745)\n\n* arrow2 erased refcounted clone benchmarks\r\n\r\n* lint\r\n\r\n* addressing PR comments\r\n\r\n* dude",
          "timestamp": "2023-04-03T12:31:17+02:00",
          "tree_id": "a8922e5f9234eaa1adce847b0cf58d9a744d023a",
          "url": "https://github.com/rerun-io/rerun/commit/44393097b9619c49d4bfa16664d75dd67a49d9c5"
        },
        "date": 1680519643020,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 792883,
            "range": "± 3300",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 195551,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 744484,
            "range": "± 3015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 337065,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1060389,
            "range": "± 24228",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 126945,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4128504,
            "range": "± 72718",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 287732,
            "range": "± 9008",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4087103,
            "range": "± 114046",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3521132,
            "range": "± 80613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1309466,
            "range": "± 73698",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127911,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 414957,
            "range": "± 2032",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19325,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19278,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 95846,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 162386,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58734,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 11161687,
            "range": "± 808377",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 13982746,
            "range": "± 1355930",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12836073,
            "range": "± 738438",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11152267,
            "range": "± 647703",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 11538810,
            "range": "± 736849",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 11012616,
            "range": "± 722890",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13065177,
            "range": "± 733248",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 13066434,
            "range": "± 1063777",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10584163,
            "range": "± 541261",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10533402,
            "range": "± 604679",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1820,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1843,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1811,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1827,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1792,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1846,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1850,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1844,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1821,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1797,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 440,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 437,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 447,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 441,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 433,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 12092008,
            "range": "± 1378356",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2185176,
            "range": "± 12987",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2145937,
            "range": "± 16948",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1914930,
            "range": "± 14605",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1891364,
            "range": "± 9292",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11699048,
            "range": "± 1295636",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2121284,
            "range": "± 12561",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2147167,
            "range": "± 26080",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1818079,
            "range": "± 8675",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1868010,
            "range": "± 13486",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12467,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9605,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9651,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5534,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2717,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2730,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2682,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2732,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32750,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18281,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12305,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42542,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28640,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20314,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44869872,
            "range": "± 972879",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 184987567,
            "range": "± 1464519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 223991908,
            "range": "± 1330124",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 448811001,
            "range": "± 2384762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 271668701,
            "range": "± 1519588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 100478281,
            "range": "± 892467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 369691354,
            "range": "± 2129615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 36660650,
            "range": "± 2154571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 10977137,
            "range": "± 761934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1778654,
            "range": "± 10425",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 47846507,
            "range": "± 2979493",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 980621,
            "range": "± 5678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 18792164,
            "range": "± 1417274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 22647725,
            "range": "± 798461",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 283591,
            "range": "± 1724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7512,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 381746,
            "range": "± 2024",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 688171,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 336292,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2888,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346236,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6931655699,
            "range": "± 23946641",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1852088,
            "range": "± 21189",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3091514,
            "range": "± 22467",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16434,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42875,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506132,
            "range": "± 3722",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29a13ea8fad4020c8c2c653f23e83e9a31a7beb1",
          "message": "`arrow2` estimated_bytes_size benchmarks (#1743)\n\n* arrow2 estimated_bytes_size benchmarks\r\n\r\n* cleanup",
          "timestamp": "2023-04-03T15:54:15+02:00",
          "tree_id": "812712e2f8919d5644a425cb5213268e49fa3ff5",
          "url": "https://github.com/rerun-io/rerun/commit/29a13ea8fad4020c8c2c653f23e83e9a31a7beb1"
        },
        "date": 1680531840619,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 148300,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3288,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17720,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 501737,
            "range": "± 4053",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3272,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17571,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3611445,
            "range": "± 295981",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3934,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17612,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 770047,
            "range": "± 4046",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 189442,
            "range": "± 1755",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 741950,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 357577,
            "range": "± 3832",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1020624,
            "range": "± 14264",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127077,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4214637,
            "range": "± 105458",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 279796,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4120116,
            "range": "± 61539",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3550125,
            "range": "± 36481",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1283442,
            "range": "± 24136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 126538,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 53470183,
            "range": "± 925361",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 168703,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 52087011,
            "range": "± 883710",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 50096180,
            "range": "± 847690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 5413612,
            "range": "± 312427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 126747,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415436,
            "range": "± 4284",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19542,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19669,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96288,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 160674,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58643,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10638674,
            "range": "± 721417",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12800212,
            "range": "± 452803",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12123770,
            "range": "± 638739",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 10600992,
            "range": "± 454300",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10847035,
            "range": "± 710500",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10224985,
            "range": "± 403984",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 11999563,
            "range": "± 580359",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11807113,
            "range": "± 596072",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10482180,
            "range": "± 413209",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10184170,
            "range": "± 455895",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1828,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1834,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1846,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1818,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1833,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1821,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1843,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1824,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1847,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1838,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 437,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 447,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 278,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 449,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 12174288,
            "range": "± 597918",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2181647,
            "range": "± 27486",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2186675,
            "range": "± 14860",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1936760,
            "range": "± 12398",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1840328,
            "range": "± 16573",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11722311,
            "range": "± 742657",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2130938,
            "range": "± 71721",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2154847,
            "range": "± 17490",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1884472,
            "range": "± 28531",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1830844,
            "range": "± 28354",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12359,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9661,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9626,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5561,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2740,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2749,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2731,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2735,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32763,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18283,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12319,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42705,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28791,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19818,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46316431,
            "range": "± 644918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 183382126,
            "range": "± 1497890",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 224379598,
            "range": "± 1031199",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 452302399,
            "range": "± 1815719",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 270391565,
            "range": "± 1237132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 99694109,
            "range": "± 1125172",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 368423831,
            "range": "± 2140655",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 36718603,
            "range": "± 1354639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 11364244,
            "range": "± 674006",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1802197,
            "range": "± 4059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 51982074,
            "range": "± 4524698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 991987,
            "range": "± 4324",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 20640513,
            "range": "± 1463771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 21075346,
            "range": "± 1540303",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 284473,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7639,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 394503,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 695338,
            "range": "± 4884",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 337876,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2912,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347168,
            "range": "± 3149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6958829824,
            "range": "± 13837782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1812590,
            "range": "± 20101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2970081,
            "range": "± 36870",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16453,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42748,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506242,
            "range": "± 2723",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "distinct": true,
          "id": "d94ca3dd35e73e1984ccb969d0c7abd0d3e0faa9",
          "message": "Fix crash when trying to do picking on depth clouds",
          "timestamp": "2023-04-04T09:44:30+02:00",
          "tree_id": "bc2c969fb952a01de6b44004624732174470b7d5",
          "url": "https://github.com/rerun-io/rerun/commit/d94ca3dd35e73e1984ccb969d0c7abd0d3e0faa9"
        },
        "date": 1680596036150,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 149363,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3285,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17724,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 491970,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3288,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17729,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3796576,
            "range": "± 311267",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3978,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17740,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 783263,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 198930,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 750185,
            "range": "± 2279",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 345005,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1027097,
            "range": "± 16175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128568,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4374814,
            "range": "± 127018",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 287255,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4258609,
            "range": "± 78409",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3619118,
            "range": "± 58856",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1293350,
            "range": "± 14984",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128546,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 47406613,
            "range": "± 338387",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 168731,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 46492032,
            "range": "± 382216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 44560383,
            "range": "± 355142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4543857,
            "range": "± 142636",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127252,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 414447,
            "range": "± 1298",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19581,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19498,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96377,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 163376,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58188,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10815839,
            "range": "± 272848",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 12957845,
            "range": "± 422964",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12514310,
            "range": "± 527432",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11179528,
            "range": "± 414170",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10962498,
            "range": "± 422087",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10935737,
            "range": "± 506350",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 12849798,
            "range": "± 622294",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12390150,
            "range": "± 596166",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10661511,
            "range": "± 411639",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10266348,
            "range": "± 368447",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1812,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1816,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1821,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1822,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1795,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1856,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1821,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1834,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1821,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1818,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 447,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 456,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 453,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 448,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 448,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 457,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 456,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 453,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 449,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11778877,
            "range": "± 610053",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2136426,
            "range": "± 48620",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2170658,
            "range": "± 38729",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1903331,
            "range": "± 16228",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1877590,
            "range": "± 12669",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11004296,
            "range": "± 398845",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2189262,
            "range": "± 11634",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2144118,
            "range": "± 10726",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1834324,
            "range": "± 6430",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1813853,
            "range": "± 9775",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12497,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9650,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9635,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5565,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2732,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2738,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2724,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2722,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32785,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18283,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12315,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42732,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28857,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19772,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42762926,
            "range": "± 508447",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 164402629,
            "range": "± 1182345",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 206750164,
            "range": "± 684762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 410846829,
            "range": "± 1447485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 252734238,
            "range": "± 851442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 86121104,
            "range": "± 897095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 336645405,
            "range": "± 1593705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35683368,
            "range": "± 1150670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9805754,
            "range": "± 554650",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1797258,
            "range": "± 7371",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 48791444,
            "range": "± 1138909",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 980324,
            "range": "± 2531",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 18539368,
            "range": "± 701628",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 20079367,
            "range": "± 571829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 283926,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7557,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 383926,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 695311,
            "range": "± 2021",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 338564,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2891,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 348887,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6032616798,
            "range": "± 10393315",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1807643,
            "range": "± 13133",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3033773,
            "range": "± 12081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16455,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42750,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506201,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf27c8ef14308491df8d8b4db2c000a6e76d8af7",
          "message": "Readback depth from GPU picking (#1752)\n\n* gpu picking in the viewer picks up depth now\r\n* WebGL workarounds",
          "timestamp": "2023-04-04T10:32:26+02:00",
          "tree_id": "d04828ebffa556912164d721d9629c80a13ae4b8",
          "url": "https://github.com/rerun-io/rerun/commit/bf27c8ef14308491df8d8b4db2c000a6e76d8af7"
        },
        "date": 1680598821799,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 151283,
            "range": "± 1110",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3291,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17727,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 485165,
            "range": "± 3064",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3285,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17738,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3729278,
            "range": "± 455125",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3974,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17739,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 789253,
            "range": "± 1686",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 195448,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 740940,
            "range": "± 2893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 343781,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1011980,
            "range": "± 27228",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128818,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4231047,
            "range": "± 79589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 287869,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4234502,
            "range": "± 63681",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3571220,
            "range": "± 44405",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1287148,
            "range": "± 30665",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127479,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 47856426,
            "range": "± 409354",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 167118,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 46951163,
            "range": "± 422407",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 44645934,
            "range": "± 433245",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4483235,
            "range": "± 132187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127021,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 416608,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19735,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19666,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96876,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 159726,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58632,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10763489,
            "range": "± 281148",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 13018134,
            "range": "± 738578",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12651480,
            "range": "± 511062",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11134486,
            "range": "± 451515",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10714231,
            "range": "± 402476",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 10657953,
            "range": "± 394314",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13515670,
            "range": "± 708546",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 13259593,
            "range": "± 481684",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10970687,
            "range": "± 348299",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10855773,
            "range": "± 467414",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1823,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1834,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1806,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1798,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1802,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1837,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1827,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1829,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1821,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1816,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 452,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 439,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11457359,
            "range": "± 462659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2143869,
            "range": "± 15109",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2112255,
            "range": "± 10677",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1896031,
            "range": "± 9771",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1876213,
            "range": "± 8318",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11001071,
            "range": "± 374155",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2162103,
            "range": "± 10563",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2159238,
            "range": "± 7589",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1866201,
            "range": "± 6492",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1784572,
            "range": "± 8580",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12495,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9657,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9646,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5540,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2725,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2751,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2725,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2729,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32799,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18298,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12326,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42721,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28740,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20499,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42263835,
            "range": "± 565333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165330811,
            "range": "± 1195711",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 208858509,
            "range": "± 728157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 412774486,
            "range": "± 1332459",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 253238133,
            "range": "± 892875",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 85034359,
            "range": "± 560002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 336980142,
            "range": "± 2768318",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35883327,
            "range": "± 1403287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9744786,
            "range": "± 579876",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1809577,
            "range": "± 4439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 47117882,
            "range": "± 1687525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 984344,
            "range": "± 2142",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 18164779,
            "range": "± 842270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 19901030,
            "range": "± 881916",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 284872,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7726,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 389145,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701660,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339351,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 3003,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347807,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6072989444,
            "range": "± 10257810",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1821232,
            "range": "± 9323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3059392,
            "range": "± 13171",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16378,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43671,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506597,
            "range": "± 3294",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pablovela5620@gmail.com",
            "name": "Pablo Vela",
            "username": "pablovela5620"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a479c0ccc21691badf43c5fdf28f7c46fc30e833",
          "message": "Add new ARKitScenes example (#1538)\n\nCo-authored-by: Nikolaus West <nikolaus.west@me.com>\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-04-04T14:03:45+02:00",
          "tree_id": "99a4af713561100a2a339d9616d3c15262b9c058",
          "url": "https://github.com/rerun-io/rerun/commit/a479c0ccc21691badf43c5fdf28f7c46fc30e833"
        },
        "date": 1680611502191,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 147994,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3294,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17720,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 500113,
            "range": "± 3426",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3296,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17727,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3922912,
            "range": "± 610668",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3985,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17723,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 786279,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 194582,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 764522,
            "range": "± 3503",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 343191,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1079821,
            "range": "± 41571",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127370,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4879578,
            "range": "± 462848",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 281001,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4546946,
            "range": "± 338391",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3833097,
            "range": "± 230940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1398201,
            "range": "± 66950",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127203,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 47932231,
            "range": "± 370571",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 169192,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 47073222,
            "range": "± 395513",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 44723675,
            "range": "± 392388",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4961198,
            "range": "± 188245",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127434,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 414857,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19629,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19630,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96787,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 162328,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58396,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 12998775,
            "range": "± 895249",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 15772995,
            "range": "± 930279",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 14618045,
            "range": "± 877459",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 12936795,
            "range": "± 720707",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 12442665,
            "range": "± 856789",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 12532401,
            "range": "± 760304",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 14488787,
            "range": "± 909714",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 14163399,
            "range": "± 688201",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 12378691,
            "range": "± 915249",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 12510887,
            "range": "± 776983",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1827,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1835,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1832,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1825,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1813,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1830,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1847,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1847,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1830,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1819,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 436,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 445,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 278,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 12509287,
            "range": "± 762536",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2169839,
            "range": "± 28323",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2139433,
            "range": "± 26326",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1929682,
            "range": "± 121372",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1852267,
            "range": "± 11955",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11320813,
            "range": "± 729736",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2199809,
            "range": "± 718781",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2352035,
            "range": "± 215958",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1868752,
            "range": "± 19199",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1810217,
            "range": "± 22539",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12489,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9668,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9662,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5560,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2736,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2749,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2730,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2731,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32790,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18273,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12319,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42707,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28829,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20444,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43413180,
            "range": "± 388637",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165210149,
            "range": "± 1117232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 214044018,
            "range": "± 1948235",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 417503248,
            "range": "± 2750334",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 252992406,
            "range": "± 907858",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 87634729,
            "range": "± 771178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 337973259,
            "range": "± 1620416",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 38815186,
            "range": "± 1180020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 11861080,
            "range": "± 1098257",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1835909,
            "range": "± 9578",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 54348295,
            "range": "± 1230729",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 1004723,
            "range": "± 31051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 20462351,
            "range": "± 822112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 21646007,
            "range": "± 704227",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 285301,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7574,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 391812,
            "range": "± 3583",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701580,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340643,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2894,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353655,
            "range": "± 2888",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6188808563,
            "range": "± 24064588",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1848256,
            "range": "± 21034",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3003107,
            "range": "± 56033",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16511,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43281,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506738,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c1babea56a03f96d88d9600c38624e4e7555bb7",
          "message": "Python SDK: document that we also accept colors in 0-1 floats (#1740)\n\n* Python SDK: document that we also accept colors in 0-1 floats\r\n\r\n* Assume float colors to be in gamma-space, and document that\r\n\r\n* Update arkitscenes example\r\n\r\n* Fix bug\r\n\r\n* typo\r\n\r\n* py-format",
          "timestamp": "2023-04-04T14:59:18+02:00",
          "tree_id": "e685a008e8c31ef0ab7ab7cb15da956c332e010c",
          "url": "https://github.com/rerun-io/rerun/commit/9c1babea56a03f96d88d9600c38624e4e7555bb7"
        },
        "date": 1680614836873,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 148488,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3290,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17747,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 494728,
            "range": "± 4019",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3291,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17743,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 5026298,
            "range": "± 713039",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3984,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17748,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 783590,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 195453,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 742168,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 357582,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1010790,
            "range": "± 21285",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128202,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4729229,
            "range": "± 315210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 281101,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4215217,
            "range": "± 203622",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3761077,
            "range": "± 122901",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1324326,
            "range": "± 29426",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128502,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 56230825,
            "range": "± 539963",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 168925,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 55106142,
            "range": "± 531060",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 53313349,
            "range": "± 577289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 6335984,
            "range": "± 250450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128006,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415814,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19606,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19422,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96225,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 164720,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 59222,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 12466953,
            "range": "± 573959",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 15788789,
            "range": "± 854897",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 14715067,
            "range": "± 810273",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 13136277,
            "range": "± 657075",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 12860622,
            "range": "± 743644",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 12369410,
            "range": "± 581450",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 15027137,
            "range": "± 925995",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 14441994,
            "range": "± 1087407",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 12359493,
            "range": "± 630596",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 11634322,
            "range": "± 649700",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1805,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1819,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1828,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1812,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1794,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1819,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1828,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1810,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1829,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1822,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 441,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 12868604,
            "range": "± 747296",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2212176,
            "range": "± 20700",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2144919,
            "range": "± 9856",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1881156,
            "range": "± 8421",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1878696,
            "range": "± 13373",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 12396237,
            "range": "± 876544",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2178251,
            "range": "± 16065",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2139059,
            "range": "± 9245",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1838068,
            "range": "± 7655",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1835498,
            "range": "± 9990",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12464,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9665,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9639,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5549,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2738,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2758,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2733,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2731,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32773,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18308,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12323,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42760,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28878,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19837,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46586415,
            "range": "± 471393",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 185510639,
            "range": "± 1494732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 226133881,
            "range": "± 950085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 457508019,
            "range": "± 1956677",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 269611090,
            "range": "± 1065775",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 101907974,
            "range": "± 753045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 368676351,
            "range": "± 2144952",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 42353705,
            "range": "± 1405830",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 14775315,
            "range": "± 953997",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1828681,
            "range": "± 6275",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 54032288,
            "range": "± 2354312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 998904,
            "range": "± 11667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 20710894,
            "range": "± 1167587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 22022712,
            "range": "± 883302",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 284508,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7666,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 387780,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708042,
            "range": "± 7800",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 336923,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2882,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 348837,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7002738212,
            "range": "± 19166388",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1801900,
            "range": "± 15799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2995581,
            "range": "± 9178",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16482,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43116,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 507147,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1713e60517e3ac3678f6e03aad59e7799a64e677",
          "message": "Always create the log_time timeline (#1763)",
          "timestamp": "2023-04-04T16:02:22+02:00",
          "tree_id": "6352c527af52d63a59ad4f93aad03474166aa968",
          "url": "https://github.com/rerun-io/rerun/commit/1713e60517e3ac3678f6e03aad59e7799a64e677"
        },
        "date": 1680618747503,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 146739,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3289,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17735,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 485695,
            "range": "± 3487",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3291,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17722,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 4325396,
            "range": "± 472983",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3986,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17728,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 799086,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 195639,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 742243,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 345258,
            "range": "± 1774",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1432802,
            "range": "± 147672",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127135,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4674567,
            "range": "± 246438",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 278073,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4698680,
            "range": "± 335213",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 4185773,
            "range": "± 169580",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1404705,
            "range": "± 171255",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127829,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 49339245,
            "range": "± 291721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 173341,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 48133569,
            "range": "± 404751",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 46491274,
            "range": "± 537484",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 5066246,
            "range": "± 85901",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 126956,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415374,
            "range": "± 4568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19460,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19479,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 98494,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 161263,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58607,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 13351790,
            "range": "± 464566",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 15398070,
            "range": "± 756505",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 14207999,
            "range": "± 580479",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 14757831,
            "range": "± 1261883",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 12792116,
            "range": "± 731378",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 12484322,
            "range": "± 487203",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 14964285,
            "range": "± 670735",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 14910080,
            "range": "± 769303",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 12373254,
            "range": "± 538765",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 14589731,
            "range": "± 473161",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1831,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1818,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1813,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1823,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1800,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1836,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1852,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1838,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1826,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1815,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 278,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 278,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 443,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 437,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 15045488,
            "range": "± 716728",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2185023,
            "range": "± 146517",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2237585,
            "range": "± 70869",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1930882,
            "range": "± 19864",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1860645,
            "range": "± 10489",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11723287,
            "range": "± 755827",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2130921,
            "range": "± 15375",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2183148,
            "range": "± 63610",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1845812,
            "range": "± 14449",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1802793,
            "range": "± 9603",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12494,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9648,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9647,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5545,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2728,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2737,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2722,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2669,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32825,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18267,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12305,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42783,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28951,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19877,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43786397,
            "range": "± 614340",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 165142476,
            "range": "± 1100322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 208007785,
            "range": "± 1227384",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 416443519,
            "range": "± 4144644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 256243054,
            "range": "± 2010532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 86437840,
            "range": "± 750776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 340947320,
            "range": "± 2861077",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35865013,
            "range": "± 1159290",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 9807303,
            "range": "± 549899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1797241,
            "range": "± 3250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 48475411,
            "range": "± 1364836",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 988663,
            "range": "± 8610",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 19035605,
            "range": "± 949174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 21353719,
            "range": "± 834984",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 284873,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 7672,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 389818,
            "range": "± 5572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693208,
            "range": "± 5658",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340579,
            "range": "± 2354",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2938,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354156,
            "range": "± 3837",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6198787871,
            "range": "± 109272271",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1872440,
            "range": "± 23630",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3026018,
            "range": "± 17782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16424,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43032,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505899,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9310bd7a6f915be2feaf8a63098af1ca491ff320",
          "message": "Columnar timepoints in data tables and during transport (#1767)\n\n* columnar timepoints\r\n\r\n* self review",
          "timestamp": "2023-04-04T17:38:59+02:00",
          "tree_id": "15b90fd49dac506a78076379a902fb7e76ac2366",
          "url": "https://github.com/rerun-io/rerun/commit/9310bd7a6f915be2feaf8a63098af1ca491ff320"
        },
        "date": 1680624381949,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 146399,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3288,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17722,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 485170,
            "range": "± 3186",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3294,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17724,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 4564682,
            "range": "± 532516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3984,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17724,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 779865,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 194109,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 745144,
            "range": "± 4025",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 346032,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1047521,
            "range": "± 27455",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127172,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4477713,
            "range": "± 361999",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 286384,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4335741,
            "range": "± 191016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3654403,
            "range": "± 133389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1295272,
            "range": "± 28240",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127388,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 48198887,
            "range": "± 389003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 173625,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 47988070,
            "range": "± 518205",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 44718569,
            "range": "± 434818",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4610544,
            "range": "± 236176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127699,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 415179,
            "range": "± 9289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19220,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19219,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 98531,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 160421,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58292,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 12274385,
            "range": "± 515633",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 14833800,
            "range": "± 874699",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 14164695,
            "range": "± 890858",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 12140770,
            "range": "± 648749",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 11171798,
            "range": "± 594932",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 11055164,
            "range": "± 501466",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 13091573,
            "range": "± 593220",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 12893049,
            "range": "± 601100",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 11717922,
            "range": "± 605858",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 11586324,
            "range": "± 546005",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1828,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1820,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1809,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1788,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1790,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1853,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1836,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1811,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1823,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1794,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 13961222,
            "range": "± 716208",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2257397,
            "range": "± 55096",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2270465,
            "range": "± 91341",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1915579,
            "range": "± 24701",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1897215,
            "range": "± 48073",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 11841810,
            "range": "± 742775",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2227597,
            "range": "± 69857",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2304404,
            "range": "± 119348",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1934343,
            "range": "± 42744",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1832543,
            "range": "± 28719",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12428,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9653,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9660,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5562,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2727,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2745,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2736,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2742,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32767,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18303,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12308,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42672,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28775,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19787,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44372115,
            "range": "± 669061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134011405,
            "range": "± 1099244",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 180489250,
            "range": "± 2330181",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357357347,
            "range": "± 2299816",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212330777,
            "range": "± 776683",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71767040,
            "range": "± 686274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283068843,
            "range": "± 1325588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 34595113,
            "range": "± 1689003",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 6826677,
            "range": "± 574841",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1556589,
            "range": "± 8327",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 44855821,
            "range": "± 1419933",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 858042,
            "range": "± 2234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 11020570,
            "range": "± 432739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 12819178,
            "range": "± 637428",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 297772,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5738,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 374970,
            "range": "± 1181",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697789,
            "range": "± 2789",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352438,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2202,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 364184,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6065899456,
            "range": "± 14048132",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1839528,
            "range": "± 13522",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3074367,
            "range": "± 22951",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16400,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43219,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506037,
            "range": "± 1809",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "679e2458055096a28c1fbcdbce397de20329e25f",
          "message": "Allow torch tensors for log_rigid3 (#1769)",
          "timestamp": "2023-04-04T18:21:07+02:00",
          "tree_id": "202371a917e1d56489918f950ab354a888a04bf3",
          "url": "https://github.com/rerun-io/rerun/commit/679e2458055096a28c1fbcdbce397de20329e25f"
        },
        "date": 1680627006285,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 144980,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3201,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17278,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 480311,
            "range": "± 6309",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3269,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17057,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3182631,
            "range": "± 407907",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3851,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17137,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 767335,
            "range": "± 13160",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 192920,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 733752,
            "range": "± 9685",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 348329,
            "range": "± 2528",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1020285,
            "range": "± 140555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 125646,
            "range": "± 1738",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4214547,
            "range": "± 626533",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 283017,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4056283,
            "range": "± 82730",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3473288,
            "range": "± 58519",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1286497,
            "range": "± 186831",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127572,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 45817191,
            "range": "± 813980",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 165241,
            "range": "± 3501",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 45630719,
            "range": "± 859456",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 44724853,
            "range": "± 1053275",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4597037,
            "range": "± 249191",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 123945,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 400258,
            "range": "± 5966",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 18534,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19691,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96361,
            "range": "± 2125",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 157690,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58246,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 9510671,
            "range": "± 324457",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 11404719,
            "range": "± 352669",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 10899093,
            "range": "± 624780",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 9784028,
            "range": "± 865076",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 9350538,
            "range": "± 356279",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 9286325,
            "range": "± 639797",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 12366963,
            "range": "± 1202142",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 10905464,
            "range": "± 477890",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 9553391,
            "range": "± 368295",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 9139174,
            "range": "± 391171",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1802,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1816,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1821,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1854,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1845,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1811,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1804,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1796,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1809,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1793,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 276,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 274,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 431,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 276,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 431,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 271,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 423,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 272,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 417,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 273,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 434,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 270,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 430,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 438,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 433,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 9844920,
            "range": "± 986687",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2210318,
            "range": "± 47993",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2207888,
            "range": "± 61548",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1909944,
            "range": "± 150947",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1946839,
            "range": "± 145837",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10935010,
            "range": "± 1238006",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2134464,
            "range": "± 1109275",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2100472,
            "range": "± 1140981",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1808997,
            "range": "± 632529",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1783317,
            "range": "± 35715",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12076,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9336,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9466,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5475,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2739,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2746,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2722,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2673,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32489,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18256,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12314,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42640,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28530,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20160,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 41779491,
            "range": "± 6391444",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132007868,
            "range": "± 27797618",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176841355,
            "range": "± 33059725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352279676,
            "range": "± 53152618",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213509916,
            "range": "± 28707764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70571683,
            "range": "± 16213593",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 273615946,
            "range": "± 41406841",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 31940268,
            "range": "± 8350507",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 6045203,
            "range": "± 3704275",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1551118,
            "range": "± 490045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 52994196,
            "range": "± 4196749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 911913,
            "range": "± 19749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 10979691,
            "range": "± 3813680",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 11399590,
            "range": "± 2440199",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 291389,
            "range": "± 14042",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5675,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362829,
            "range": "± 6188",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 677278,
            "range": "± 67671",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 335090,
            "range": "± 76016",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2183,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 341184,
            "range": "± 40597",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6407020500,
            "range": "± 281484887",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1743920,
            "range": "± 134911",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 5206031,
            "range": "± 1121363",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15880,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41775,
            "range": "± 1761",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 501330,
            "range": "± 12293",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "409dcd89ae898e795964e151bcde4d5a86c263b9",
          "message": "Option to show scene bounding box (#1770)\n\n* Include depth clouds in bounding box calculation\r\n\r\n* Don't wrap text when showing bbox in ui\r\n\r\n* Handle projective transforms\r\n\r\n* Nicer selection view: don't wrap second column too early\r\n\r\n* Add checkbox to show the scene bounding box",
          "timestamp": "2023-04-04T18:58:14+02:00",
          "tree_id": "161296cc00368580e7426b691cf55c780d25ff58",
          "url": "https://github.com/rerun-io/rerun/commit/409dcd89ae898e795964e151bcde4d5a86c263b9"
        },
        "date": 1680629162944,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 144611,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3279,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17727,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 486559,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3272,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17723,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 3740263,
            "range": "± 351077",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3972,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17725,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 774326,
            "range": "± 2565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 194025,
            "range": "± 946",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 743272,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 342474,
            "range": "± 8015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1033815,
            "range": "± 18611",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 129026,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4178986,
            "range": "± 102394",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 278102,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4117849,
            "range": "± 47691",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3524450,
            "range": "± 54247",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1309611,
            "range": "± 43132",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127071,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 53662374,
            "range": "± 748809",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 167897,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 50942758,
            "range": "± 815072",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 48991180,
            "range": "± 774758",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 5000080,
            "range": "± 161800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 128249,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 413465,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19770,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19496,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 98306,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 159528,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 46314,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10907764,
            "range": "± 578744",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 13243988,
            "range": "± 752551",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 12415512,
            "range": "± 749794",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 11359903,
            "range": "± 539892",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10334816,
            "range": "± 600842",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 9959839,
            "range": "± 723412",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 11847103,
            "range": "± 721136",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11320850,
            "range": "± 530144",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 9820900,
            "range": "± 447436",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 9577932,
            "range": "± 474252",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1828,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1836,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1827,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1848,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1815,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1826,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1831,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1825,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1822,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1803,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 444,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 441,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 441,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 11601059,
            "range": "± 755926",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2195118,
            "range": "± 10644",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2149409,
            "range": "± 10463",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 1957310,
            "range": "± 9486",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1942792,
            "range": "± 8442",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10079824,
            "range": "± 516478",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2146195,
            "range": "± 10868",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2126992,
            "range": "± 8869",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1832680,
            "range": "± 12533",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1896355,
            "range": "± 7323",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12497,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9647,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9594,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5545,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2734,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2715,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2726,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2729,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32768,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18283,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12312,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42627,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28709,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 19767,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43605456,
            "range": "± 1164749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 148523816,
            "range": "± 1268915",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 182820883,
            "range": "± 976989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 373913691,
            "range": "± 1920910",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 222652848,
            "range": "± 1214307",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 78397309,
            "range": "± 1396723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 302734874,
            "range": "± 1594490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 35291866,
            "range": "± 1598406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 6636509,
            "range": "± 370819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1548938,
            "range": "± 4702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 43078984,
            "range": "± 1879119",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 867411,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 10705835,
            "range": "± 231298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 11731931,
            "range": "± 379412",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 297581,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5743,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 376972,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709235,
            "range": "± 4213",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350094,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2195,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 367378,
            "range": "± 1843",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6870259699,
            "range": "± 67605864",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1793672,
            "range": "± 14447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3025932,
            "range": "± 11517",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16430,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42663,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505652,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b590bbc2da6ad8063731f9e1b0b00d64f047569",
          "message": "Fix a whole lot of crashes, all at once (#1780)",
          "timestamp": "2023-04-05T17:00:01+02:00",
          "tree_id": "6ac6101d0b62c16313ec6e304fbe358b2c21b2f5",
          "url": "https://github.com/rerun-io/rerun/commit/5b590bbc2da6ad8063731f9e1b0b00d64f047569"
        },
        "date": 1680708548959,
        "tool": "cargo",
        "benches": [
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/array",
            "value": 150043,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec",
            "value": 3307,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/primitive/rows=10000/instances=100/vec/erased",
            "value": 17732,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/array",
            "value": 512893,
            "range": "± 4678",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec",
            "value": 3263,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct/rows=10000/instances=100/vec/erased",
            "value": 17712,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/array",
            "value": 6680394,
            "range": "± 600723",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec",
            "value": 3979,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/size_bytes/struct_large/rows=10000/instances=100/vec/erased",
            "value": 17726,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/arc_erased",
            "value": 796342,
            "range": "± 1740",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 201082,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array",
            "value": 778565,
            "range": "± 2262",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/array/downcast_first",
            "value": 358346,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/full_copy",
            "value": 1138316,
            "range": "± 59755",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/primitive/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127283,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/arc_erased",
            "value": 4368854,
            "range": "± 280737",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 278181,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array",
            "value": 4201895,
            "range": "± 101502",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/array/downcast_first",
            "value": 3636760,
            "range": "± 103748",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/full_copy",
            "value": 1362119,
            "range": "± 39408",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127034,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/arc_erased",
            "value": 48319119,
            "range": "± 523157",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/cell/wrapped_in_arc",
            "value": 172047,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array",
            "value": 46667570,
            "range": "± 794783",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/array/downcast_first",
            "value": 46640788,
            "range": "± 1938447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/full_copy",
            "value": 4615572,
            "range": "± 424632",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2/erased_clone/struct_large/rows=10000/instances=100/vec/wrapped_in_arc",
            "value": 127327,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2_convert",
            "value": 416536,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_values",
            "value": 19493,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/serialize/primitive/instances=100000/arrow2/from_vec",
            "value": 19675,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2_convert",
            "value": 96353,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_checks",
            "value": 165570,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "arrow2_convert/deserialize/primitive/instances=100000/arrow2/validity_bypass",
            "value": 58866,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 10990257,
            "range": "± 1070476",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=0",
            "value": 16594764,
            "range": "± 917457",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2",
            "value": 16116365,
            "range": "± 1269030",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=32",
            "value": 12023144,
            "range": "± 1881206",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/bucketsz=2048",
            "value": 10228073,
            "range": "± 722101",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/default",
            "value": 13521469,
            "range": "± 1208763",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=0",
            "value": 16758492,
            "range": "± 1082213",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2",
            "value": 11717587,
            "range": "± 465784",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=32",
            "value": 10336326,
            "range": "± 419146",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/insert/bucketsz=2048",
            "value": 10847922,
            "range": "± 1431742",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 1811,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=0",
            "value": 1835,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2",
            "value": 1860,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=32",
            "value": 1855,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/bucketsz=2048",
            "value": 1843,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/default",
            "value": 1836,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=0",
            "value": 1839,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2",
            "value": 1832,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=32",
            "value": 1814,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at/bucketsz=2048",
            "value": 1801,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=0",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=0",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=32",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=32",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/default",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/default",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=0",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=0",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2",
            "value": 280,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=32",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=32",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/primary/bucketsz=2048",
            "value": 281,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/latest_at_missing/secondaries/bucketsz=2048",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 15663274,
            "range": "± 827787",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=0",
            "value": 2432913,
            "range": "± 475938",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2",
            "value": 2562730,
            "range": "± 505647",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=32",
            "value": 2096058,
            "range": "± 244852",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/bucketsz=2048",
            "value": 1900002,
            "range": "± 21745",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/default",
            "value": 10886728,
            "range": "± 1429474",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=0",
            "value": 2138189,
            "range": "± 47139",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2",
            "value": 2100353,
            "range": "± 21050",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=32",
            "value": 1844029,
            "range": "± 10784",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=true/range/bucketsz=2048",
            "value": 1804063,
            "range": "± 137004",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/smallvec/n=4",
            "value": 12387,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/tinyvec/n=4",
            "value": 9621,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/sort/instances=10000/vec",
            "value": 9667,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/smallvec/n=4/manual",
            "value": 5559,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4",
            "value": 2734,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/tinyvec/n=4/manual",
            "value": 2682,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec",
            "value": 2711,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/split_off/instances=10000/vec/manual",
            "value": 2721,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/smallvec/n=4",
            "value": 32751,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/tinyvec/n=4",
            "value": 18207,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap/instances=10000/vec",
            "value": 12221,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/smallvec/n=4",
            "value": 42443,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/tinyvec/n=4",
            "value": 28409,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "vector_ops/swap_opt/instances=10000/vec",
            "value": 20449,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43671581,
            "range": "± 927866",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135982388,
            "range": "± 1816127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 178919766,
            "range": "± 5005485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 369750999,
            "range": "± 6173238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 217149510,
            "range": "± 2515296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76138701,
            "range": "± 1634733",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 294965128,
            "range": "± 8190616",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 39964749,
            "range": "± 1738867",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 8939607,
            "range": "± 1846417",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1526675,
            "range": "± 36663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 50335189,
            "range": "± 2623579",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 867745,
            "range": "± 5643",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 13006391,
            "range": "± 924224",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 14655208,
            "range": "± 728800",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308824,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5805,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 383625,
            "range": "± 4574",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 735814,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349184,
            "range": "± 5836",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2219,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352115,
            "range": "± 3171",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6736330003,
            "range": "± 30219040",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1855142,
            "range": "± 59868",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3055816,
            "range": "± 32122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16452,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43641,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 507022,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}