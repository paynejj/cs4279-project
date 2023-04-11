import { BANDIT } from "../Interactables/Enemies"
import { CHEST } from "../Interactables/Treasures"

export type Treasure = {
    gold: 100
    item?: string
}

export type Enemy = {
    type: string
    health: number,
    damage: number
}
export enum DNodes { DVoid , DTunnel, DChest, DEnemy, DPit, DGoblin, }
export interface DungeonNode {
    treasure: Treasure,
    enemy: Enemy,
    color: string,
    isVoid?: boolean,
}

export class DTunnel implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "purple"
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

export class DEnemy implements DungeonNode {
    readonly treasure: Treasure;
    readonly enemy: Enemy;
    readonly color: string;
    readonly isVoid?: boolean;

    constructor() {
        this.treasure = CHEST;
        this.enemy = BANDIT;
        this.color = "red"
    }

} 

