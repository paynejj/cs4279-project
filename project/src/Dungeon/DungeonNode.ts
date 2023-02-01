
type Treasure = string | number

type Enemy = {
    health: number,
    damage: number
}


interface DungeonNode {
    treasure: Treasure,
    enemy: Enemy,
    color: string
}

export default class DTunnel implements DungeonNode {
    readonly treasure
    readonly enemy
    readonly color 

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.color = "white"
    }

}

