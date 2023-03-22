import {Equipment} from "./Equipment"
import {Potion} from "./Potion"
export type Item = {
    name: string;
    value: number;
    amount: number;
    item_type: Equipment | Potion;
  }