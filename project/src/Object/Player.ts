import {Item} from "./Item"
import {Stats} from "./Stats"
import {Equipment} from "./Equipment"
import {HP_potion, MP_potion} from "./Potion"
export type Player = {
    name: string;
    inventory: Map<string, Item>;
    stats: Stats;
    gold: number;
    equipment: Equipment;
    HP_potion: [HP_potion, number]//Potion, amount
    MP_potion: [MP_potion, number]//Potion, amount 
  }