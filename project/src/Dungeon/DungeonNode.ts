
type Treasure = string | number

type Enemy = {
    health: number,
    damage: number
}

export enum DNodes { DVoid = 0, DTunnel = 1 }
export interface DungeonNode {
    treasure: Treasure,
    enemy: Enemy,
    color: string
}

export class DTunnel implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "pink"
    }

}

export class DVoid implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "black"
    }
}

