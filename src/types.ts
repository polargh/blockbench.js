export interface Root {
    meta: Meta;
    name: string;
    geometry_name: string;
    visible_box: number[];
    variable_placeholders: string;
    resolution: Resolution;
    elements: Element[];
    outliner: Outliner[];
    textures: Texture[];
    animations: Animation[];
}

export interface Meta {
    format_version: string;
    creation_time: number;
    model_format: string;
    box_uv: boolean;
}

export interface Resolution {
    width: number;
    height: number;
}

export interface Element {
    name: string;
    rescale: boolean;
    locked: boolean;
    from: number[];
    to: number[];
    autouv: number;
    color: number;
    origin: number[];
    faces: Faces;
    uuid: string;
}

export interface Faces {
    north: North;
    east: East;
    south: South;
    west: West;
    up: Up;
    down: Down;
}

export interface North {
    uv: number[];
    texture: number;
}

export interface East {
    uv: number[];
    texture: number;
}

export interface South {
    uv: number[];
    texture: number;
}

export interface West {
    uv: number[];
    texture: number;
}

export interface Up {
    uv: number[];
    texture: number;
}

export interface Down {
    uv: number[];
    texture: number;
}

export interface Outliner {
    name: string;
    origin: number[];
    color: number;
    uuid: string;
    "export": boolean;
    isOpen: boolean;
    locked: boolean;
    visibility: boolean;
    autouv: number;
    children: Children[];
}

export interface Children {
    name: string;
    origin: number[];
    color: number;
    uuid: string;
    "export": boolean;
    isOpen: boolean;
    locked: boolean;
    visibility: boolean;
    autouv: number;
    children: any[];
}

export interface Texture {
    path: string;
    name: string;
    folder: string;
    namespace: string;
    id: string;
    particle: boolean;
    render_mode: string;
    visible: boolean;
    mode: string;
    saved: boolean;
    uuid: string;
    relative_path: string;
    source: string;
}

export interface Animation {
    uuid: string;
    name: string;
    loop: string;
    override: boolean;
    length: number;
    snapping: number;
    selected: boolean;
    anim_time_update: string;
    blend_weight: string;
    start_delay: string;
    loop_delay: string;
    animators: Animator[];
}

export interface Animator {
    name: string;
    type: string;
    keyframes: Keyframe[];
}

export interface Keyframe {
    channel: string;
    data_points: DataPoint[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint {
    x: number;
    y: number;
    z: number;
}