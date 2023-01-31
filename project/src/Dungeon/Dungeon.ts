import DOmniTunnel from "./DungeonNode";
import DungeonNode from "./DungeonNode";

const SIZE = 5 as const;
const ENTRANCE = [0,0] as const;


export class Dungeon {
    readonly dungeon: DungeonNode[][]
    constructor() {
        this.dungeon = Array(SIZE).map(i => Array<DOmniTunnel>(SIZE))
    }
}