import {Equipment} from "./Equipment"
import {Potion} from "./Potion"
export type Item = {
    name: string;
    stock: number;
    item_type: [Equipment, Potion];
  }