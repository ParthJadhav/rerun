//! Renders a point cloud from a depth texture and a set of intrinsics.
//!
//! See `src/renderer/depth_cloud.rs` for more documentation.

#import <./colormap.wgsl>
#import <./global_bindings.wgsl>
#import <./types.wgsl>
#import <./utils/camera.wgsl>
#import <./utils/flags.wgsl>
#import <./utils/size.wgsl>
#import <./utils/sphere_quad.wgsl>
#import <./utils/srgb.wgsl>

// ---

/// Keep in sync with `DepthCloudInfoUBO` in `depth_cloud.rs`.
///
/// Same for all draw-phases.
struct DepthCloudInfo {
    /// The extrinsincs of the camera used for the projection.
    world_from_obj: Mat4,

    /// The intrinsics of the camera used for the projection.
    ///
    /// Only supports pinhole cameras at the moment.
    depth_camera_intrinsics: Mat3,

    /// Outline mask id for the outline mask pass.
    outline_mask_id: UVec2,

    /// Multiplier to get world-space depth from whatever is in the texture.
    world_depth_from_texture_value: f32,

    /// Point radius is calculated as world-space depth times this value.
    point_radius_from_world_depth: f32,

    /// The maximum depth value in world-space, for use with the colormap.
    max_depth_in_world: f32,

    /// Configures color mapping mode, see `colormap.wgsl`.
    colormap: u32,

    /// Changes between the opaque and outline draw-phases.
    radius_boost_in_ui_points: f32,
};

@group(1) @binding(0)
var<uniform> depth_cloud_info: DepthCloudInfo;

@group(1) @binding(1)
var depth_texture: texture_2d<f32>;

struct VertexOut {
    @builtin(position) pos_in_clip: Vec4,
    @location(0) pos_in_world: Vec3,
    @location(1) point_pos_in_world: Vec3,
    @location(2) point_color: Vec4,
    @location(3) point_radius: f32,
};

// ---

struct PointData {
    pos_in_world: Vec3,
    unresolved_radius: f32,
    color: Vec4
}

// Backprojects the depth texture using the intrinsics passed in the uniform buffer.
fn compute_point_data(quad_idx: i32) -> PointData {
    let wh = textureDimensions(depth_texture);
    let texcoords = IVec2(quad_idx % wh.x, quad_idx / wh.x);

    // TODO(cmc): expose knobs to linearize/normalize/flip/cam-to-plane depth.
    let world_space_depth = depth_cloud_info.world_depth_from_texture_value * textureLoad(depth_texture, texcoords, 0).x;

    var data: PointData;
    if 0.0 < world_space_depth && world_space_depth < f32max {
        // TODO(cmc): albedo textures
        let color = Vec4(colormap_linear(depth_cloud_info.colormap, world_space_depth / depth_cloud_info.max_depth_in_world), 1.0);

        // TODO(cmc): This assumes a pinhole camera; need to support other kinds at some point.
        let intrinsics = depth_cloud_info.depth_camera_intrinsics;
        let focal_length = Vec2(intrinsics[0][0], intrinsics[1][1]);
        let offset = Vec2(intrinsics[2][0], intrinsics[2][1]);

        let pos_in_obj = Vec3(
            (Vec2(texcoords) - offset) * world_space_depth / focal_length,
            world_space_depth,
        );

        let pos_in_world = depth_cloud_info.world_from_obj * Vec4(pos_in_obj, 1.0);

        data.pos_in_world = pos_in_world.xyz;
        data.unresolved_radius = depth_cloud_info.point_radius_from_world_depth * world_space_depth;
        data.color = color;
    } else {
        // Degenerate case
        data.pos_in_world = Vec3(0.0);
        data.unresolved_radius = 0.0;
        data.color = Vec4(0.0);
    }
    return data;
}

@vertex
fn vs_main(@builtin(vertex_index) vertex_idx: u32) -> VertexOut {
    let quad_idx = sphere_quad_index(vertex_idx);

    // Compute point data (valid for the entire quad).
    let point_data = compute_point_data(quad_idx);

    var out: VertexOut;
    out.point_pos_in_world = point_data.pos_in_world;
    out.point_color = point_data.color;

    if 0.0 < point_data.unresolved_radius {
        // Span quad
        let quad = sphere_quad_span(vertex_idx, point_data.pos_in_world, point_data.unresolved_radius, depth_cloud_info.radius_boost_in_ui_points);
        out.pos_in_clip = frame.projection_from_world * Vec4(quad.pos_in_world, 1.0);
        out.pos_in_world = quad.pos_in_world;
        out.point_radius = quad.point_resolved_radius;
    } else {
        // Degenerate case - early-out!
        out.pos_in_clip = Vec4(0.0);
        out.pos_in_world = Vec3(0.0);
        out.point_radius = 0.0;
    }

    return out;
}

@fragment
fn fs_main(in: VertexOut) -> @location(0) Vec4 {
    let coverage = sphere_quad_coverage(in.pos_in_world, in.point_radius, in.point_pos_in_world);
    if coverage < 0.001 {
        discard;
    }
    return vec4(in.point_color.rgb, coverage);
}

@fragment
fn fs_main_picking_layer(in: VertexOut) -> @location(0) UVec4 {
    let coverage = sphere_quad_coverage(in.pos_in_world, in.point_radius, in.point_pos_in_world);
    if coverage <= 0.5 {
        discard;
    }
    return UVec4(0u, 0u, 0u, 0u); // TODO(andreas): Implement picking layer id pass-through.
}

@fragment
fn fs_main_outline_mask(in: VertexOut) -> @location(0) UVec2 {
    // Output is an integer target, can't use coverage therefore.
    // But we still want to discard fragments where coverage is low.
    // Since the outline extends a bit, a very low cut off tends to look better.
    let coverage = sphere_quad_coverage(in.pos_in_world, in.point_radius, in.point_pos_in_world);
    if coverage < 1.0 {
        discard;
    }
    return depth_cloud_info.outline_mask_id;
}
