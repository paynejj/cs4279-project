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
export enum DNodes { DVoid , DTunnel, DExit, DGold, DEnemy, DPit, DGoblin}
export interface DungeonNode {
    treasure?: Treasure,
    enemy?: Enemy,
    gold?: number,
    isVoid?: boolean,
    isExit?: boolean,
    color: string,
}

export class DTunnel implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color

    constructor() {
        this.color = "purple"
    }

}

export class DExit implements DungeonNode {
    readonly color
    readonly isExit: boolean
    constructor() {
        this.isExit = true
        this.color = "green"
    }

}

export class DVoid implements DungeonNode {
    readonly color
    readonly isVoid

    constructor() {
        this.color = "black"
        this.isVoid = true
    }
}

export class DEnemy implements DungeonNode {
    readonly treasure: Treasure;
    readonly enemy: Enemy;
    readonly color: string;

    constructor() {
        this.treasure = CHEST;
        this.enemy = BANDIT;
        this.color = "red"
    }

} 

export class DGold implements DungeonNode {
    readonly treasure: Treasure;
    readonly color: string;
    readonly gold: number;

    constructor() {
        this.treasure = CHEST;
        this.gold = 100;
        this.color = "yellow"
    }

} 

