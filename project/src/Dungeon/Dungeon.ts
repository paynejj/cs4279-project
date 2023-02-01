import { DNodes, DTunnel, DungeonNode, DVoid } from "./DungeonNode";

//Default dungeon dimension
const SIZE = 5 as const;

export class Dungeon {
    private _map: DungeonNode[][]
    readonly rows: number
    readonly cols: number

    constructor(rows = SIZE, cols = SIZE) {
        this._map = []
        for( let i = 0; i < rows; i++) {
            let row = new Array()
            for(let j = 0; j < cols; j++) {
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
    public generate() {
        const square = [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]]
        const plus = [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]
        const templates = [square, plus]
        this.toDungeon(templates[Math.round(Math.random())])
        return this._map
    }

    private toDungeon(template: number[][]) {
        console.log(template)
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const n: number = template[i][j]
                console.log(`${i}, ${j}, ${n}`)
                if (n === DNodes.DVoid) {
                    console.log(n)
                    this._map[i][j] = new DVoid();
                }
                else if (n === DNodes.DTunnel) {
                    this._map[i][j] = new DTunnel();
                    console.log(n)
                }
                else this._map[i][j] = new DVoid()
            }
        }
    }
}