import { Item } from "../Object/Item"
import { Potion } from "../Object/Potion"

export type Level = {
    name: string,
    start: [number, number]
    exit: [number, number]
    difficulty: number
    reward: {
        gold: number
        items?: Item
        potions?: Potion
    },
    rows: number,
    cols: number,
    map: number[][]
}