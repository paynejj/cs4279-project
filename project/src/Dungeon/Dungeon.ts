const enum Direction {north=1, south, east, west}

interface DungeonNode {
    treasure?: boolean,
    enemy?: boolean,
    directions: Direction, 

}
export { }