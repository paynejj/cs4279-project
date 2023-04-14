import { Level } from "../../LevelCreator/Level";
import { PlayerDataContext } from "../../Player/PlayerDataContext";
import { DungeonNode, DNodes, DVoid, DTunnel, DEnemy, DExit, DGold } from "./DungeonNode";

//PlaceHolder level
const LEVELNAME = ""
const EMPTY_LEVEL: Level = {
    name: "empty",
    difficulty: 0,
    map: [],
    start: [0, 0],
    exit: [4, 4],
    reward: {
        gold: 0
    },
    rows: 5,
    cols: 5
}
/**
 * Controls the Dungeon game
 */
export class Dungeon {
    private _player: [number, number]
    private _map: DungeonNode[][]
    readonly level: Level
    readonly exit: [number, number]
    readonly rows: number
    readonly cols: number
    /**
     * 
     * @param level a parseable array of numbers representing a level
     */
    constructor(levelname = LEVELNAME) {
        this.level = this.loadLevel(levelname)
        this._player = this.level.start
        this.exit = this.level.exit
        this.rows = this.level.rows
        this.cols = this.level.cols
        this._map = this.loadMap()
    }
    /**Current map of Dungeon Nodes */
    public get map() {
        return this._map
    }
    /**Current Player Coordinates*/
    public get player() {
        return this._player
    }
    /**
     * Moves the player to given coordinates if legal
     * @param row 
     * @param col 
     * @returns updated player coordinates if legal, otherwise original coordinates
     */
    public move(row: number, col: number) {
        if (this.canMove(row, col))
            this._player = [row, col]
        return this._player
    }

    public setMap(map: DungeonNode[][]) {
        if (this.rows === map.length && this.cols === map[0].length)
            this._map = map

    }
    /**
     * Instantiate DungeonNodes from level array
     */
    private loadMap(): DungeonNode[][] {
        if (!this.level) return []
        return this.level.map
            //Map number[] to DNode[]
            .map(row =>
                //Map numbers to DNodes based on the DNodes enum
                row.map(val => this.valToNode(val)))
    }

    private loadLevel(levelName: string) {
        let level = EMPTY_LEVEL
        try {
            level = window.api.readLevel(levelName)
        }
        catch (error) {
            console.log(error)
            console.log("Level is Empty")
        }
        console.log(level)
        return level
    }
    /**
     * Checks if movement to row, col is legal
     * @param row 
     * @param col 
     * @returns 
     */
    private canMove(row: number, col: number) {
        if (row < 0 || col < 0) return false
        if (row >= this.rows || col >= this.cols) return false
        return (!this._map[row][col].isVoid && !this.isComplete())
    }

    public isComplete() {
        return this._player[0] === this.exit[0] &&
        this._player[1] === this.exit[1]

    }

    private valToNode(val: number): DungeonNode {

        switch (val) {
            case DNodes.DVoid:
                return new DVoid();
            case DNodes.DTunnel:
                return new DTunnel();
            case DNodes.DExit:
                return new DExit();
            case DNodes.DGold:
                return new DGold()
            case DNodes.DEnemy:
                return new DEnemy();

            default: return new DVoid()
        }

    }
}