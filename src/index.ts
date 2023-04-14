import type { Root } from './types'

export function getFileName(file: Root) {
    return file.name
}

export async function getAnimations(file: Root) {
    let animations: Array<any> = []
    await file.animations.map((animation) => {
        animations.push(animation.name, animation.animators.map((animator) => {
            return animator.name, animator.keyframes
        }))
    })
    return file.animations;
}

export function getItems(file: Root) {
    return file.elements
}

export async function getItemPositions(file: Root) {
    let elements: Array<any> = []
    await file.elements.map((element) => {
        elements.push(element.name, element.origin)
    })
    return elements
}

export async function getJSON(file: Root) {
    return {
        name: getFileName(file),
        elements: getItems(file),
        itemPositions: getItemPositions(file),
        animations: getAnimations(file)
    }
}