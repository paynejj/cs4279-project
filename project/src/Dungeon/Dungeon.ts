import DTunnel from "./DungeonNode";
import DungeonNode from "./DungeonNode";

const SIZE = 5 as const;


export class Dungeon {
    readonly dungeon: DungeonNode[][]
    constructor() {
        this.dungeon = []
        for (let i = 0; i < SIZE; i++) {
            this.dungeon.push([])
            for (let j = 0; j < SIZE; j++)
                this.dungeon[i].push(new DTunnel())
        }
    }
}