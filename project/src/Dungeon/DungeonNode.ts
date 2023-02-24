
type Treasure = string | number

type Enemy = {
    health: number,
    damage: number
}

export enum DNodes { DVoid = 0, DTunnel = 1 }
export interface DungeonNode {
    treasure: Treasure,
    enemy: Enemy,
    color: string,
    isVoid: boolean,
}

export class DTunnel implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color
    readonly isVoid

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "purple"
        this.isVoid = false
    }

}

export class DVoid implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color
    readonly isVoid

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "black"
        this.isVoid = true
    }
}

