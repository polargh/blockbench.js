export type Root = {
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
};

export type Meta = {
    format_version: string;
    creation_time: number;
    model_format: string;
    box_uv: boolean;
};

export type Resolution = {
    width: number;
    height: number;
};

export type Element = {
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
};

export type Faces = {
    north: North;
    east: East;
    south: South;
    west: West;
    up: Up;
    down: Down;
};

export type North = {
    uv: number[];
    texture: number;
};

export type East = {
    uv: number[];
    texture: number;
};

export type South = {
    uv: number[];
    texture: number;
};

export type West = {
    uv: number[];
    texture: number;
};

export type Up = {
    uv: number[];
    texture: number;
};

export type Down = {
    uv: number[];
    texture: number;
};

export type Outliner = {
    name: string;
    origin: number[];
    color: number;
    uuid: string;
    'export': boolean;
    isOpen: boolean;
    locked: boolean;
    visibility: boolean;
    autouv: number;
    children: Children[];
};

export type Children = {
    name: string;
    origin: number[];
    color: number;
    uuid: string;
    'export': boolean;
    isOpen: boolean;
    locked: boolean;
    visibility: boolean;
    autouv: number;
    children: any[];
};

export type Texture = {
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
};

export type Animation = {
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
};

export type Animator = {
    name: string;
    type: string;
    keyframes: Keyframe[];
};

export type Keyframe = {
    channel: string;
    data_points: DataPoint[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
};

export type DataPoint = {
    x: number;
    y: number;
    z: number;
};
