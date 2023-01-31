
type Treasure = string | number

type Enemy = {
    health: number,
    damage: number
}

type Direction = {
    north: boolean,
    south: boolean,
    east: boolean,
    west: boolean,

}

 interface DungeonNode {
    treasure: Treasure,
    enemy: Enemy,
    directions: Direction,
    draw(): string
}

export default class DOmniTunnel implements DungeonNode {
    readonly treasure
    readonly enemy 
    readonly directions

    constructor() {
        this.treasure = undefined
        this.enemy = undefined
        this.directions = {north: true, south: true, east: true, west: true}
    }
    
    public draw() {
       return "BEANS"

    }
}

