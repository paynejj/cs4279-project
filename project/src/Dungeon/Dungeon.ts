import { isVoidExpression } from "typescript";
import { DNodes, DTunnel, DungeonNode, DVoid } from "./DungeonNode";

//Default dungeon dimension
const SIZE = 5 as const;

export class Dungeon {
    private _player: [number, number]
    private _map: DungeonNode[][]
    readonly rows: number
    readonly cols: number

    constructor(rows = SIZE, cols = SIZE) {
        this._player = [0, 0]
        this._map = []
        for (let i = 0; i < rows; i++) {
            let row = new Array()
            for (let j = 0; j < cols; j++) {
                row.push(new DVoid())
            }
            this._map.push(row)
        }

        this.rows = rows
        this.cols = cols
    }
    public get map() {
        return this._map
    }
    public get player() {
        return this._player
    }
    public generate() {
        const custom = [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 0, 1, 1, 1],
            [1, 1, 1, 0, 1]]
        const plus = [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]]
        this.toDungeon(custom)
        return this._map
    }
    public move(row: number, col: number) {
        if (this._map[row][col] && !this.isVoid(row, col))
            this._player = [row, col]
        return this._player
    }

    private toDungeon(template: number[][]) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const n: number = template[i][j]
                if (n === DNodes.DVoid) {
                    this._map[i][j] = new DVoid();
                }
                else if (n === DNodes.DTunnel) {
                    this._map[i][j] = new DTunnel();
                }
                else this._map[i][j] = new DVoid()
            }
        }
    }
    private isVoid(row: number, cols: number) {
        const tile = this._map[row][cols]
        if (!tile) return true
        return (tile.isVoid)
    }
}