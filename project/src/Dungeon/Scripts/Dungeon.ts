import { DNodes, DTunnel, DungeonNode, DVoid } from "./DungeonNode";

//PlaceHolder level
const LEVEL = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1]]
/**
 * Controls the Dungeon game
 */
export class Dungeon {
    private _player: [number, number]
    private _map: DungeonNode[][]
    readonly level: number[][]
    readonly rows: number
    readonly cols: number
    /**
     * 
     * @param level a parseable array of numbers representing a level
     */
    constructor(level = LEVEL) {
        this._player = [0, 0]
        this.level = level
        this.rows = level.length
        this.cols = level[0].length
        this._map = this.loadLevel()
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
        if (this.rows == map.length && this.cols == map[0].length)
            this._map = map
    
    }
    /**
     * Instantiate DungeonNodes from level array
     */
    private loadLevel(): DungeonNode[][] {
        return this.level
            //Map number[] to DNode[]
            .map(row =>
                //Map numbers to DNodes based on the DNodes enum
                row.map(val => {
                    switch (val) {
                        case DNodes.DVoid:
                            return new DVoid();
                        case DNodes.DTunnel:
                            return new DTunnel();
                        default: return new DVoid()
                    }
                }))
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
        return (!this._map[row][col].isVoid)
    }
}