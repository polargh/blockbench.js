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
    animators: Animators;
}

export interface Animators {
    "aaf9196a-6178-b466-d36d-afa00a649635"?: Aaf9196A6178B466D36DAfa00A649635;
    "0c176d15-e0fa-929e-6506-c9641f8e89cf"?: N0C176D15E0Fa929E6506C9641F8E89Cf;
    "65f05afb-f165-246e-905e-0a7bf89e77f9"?: N65F05AfbF165246E905E0A7Bf89E77F9;
    "66863ed2-6fde-065a-b77a-cc07e7d002e6"?: N66863Ed26Fde065AB77ACc07E7D002E6;
    "3fbdea09-57b2-f917-e63f-1cfc801dae8a"?: N3Fbdea0957B2F917E63F1Cfc801Dae8A;
    "0d738f4d-b3cd-d653-76fd-97ec60b35161"?: N0D738F4DB3CdD65376Fd97Ec60B35161;
    "9800b0a5-4928-6ac5-d0af-6591a8850721"?: N9800B0A549286Ac5D0Af6591A8850721;
}

export interface Aaf9196A6178B466D36DAfa00A649635 {
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

export interface N0C176D15E0Fa929E6506C9641F8E89Cf {
    name: string;
    type: string;
    keyframes: Keyframe2[];
}

export interface Keyframe2 {
    channel: string;
    data_points: DataPoint2[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint2 {
    x: number;
    y: number;
    z: number;
}

export interface N65F05AfbF165246E905E0A7Bf89E77F9 {
    name: string;
    type: string;
    keyframes: Keyframe3[];
}

export interface Keyframe3 {
    channel: string;
    data_points: DataPoint3[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint3 {
    x: number;
    y: number;
    z: number;
}

export interface N66863Ed26Fde065AB77ACc07E7D002E6 {
    name: string;
    type: string;
    keyframes: Keyframe4[];
}

export interface Keyframe4 {
    channel: string;
    data_points: DataPoint4[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint4 {
    x: number;
    y: number;
    z: number;
}

export interface N3Fbdea0957B2F917E63F1Cfc801Dae8A {
    name: string;
    type: string;
    keyframes: Keyframe5[];
}

export interface Keyframe5 {
    channel: string;
    data_points: DataPoint5[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint5 {
    x: any;
    y: any;
    z: any;
}

export interface N0D738F4DB3CdD65376Fd97Ec60B35161 {
    name: string;
    type: string;
    keyframes: Keyframe6[];
}

export interface Keyframe6 {
    channel: string;
    data_points: DataPoint6[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint6 {
    x: any;
    y: any;
    z: any;
}

export interface N9800B0A549286Ac5D0Af6591A8850721 {
    name: string;
    type: string;
    keyframes: Keyframe7[];
}

export interface Keyframe7 {
    channel: string;
    data_points: DataPoint7[];
    uuid: string;
    time: number;
    color: number;
    interpolation: string;
}

export interface DataPoint7 {
    x: any;
    y: any;
    z: any;
}