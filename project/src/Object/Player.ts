import {Item} from "./Item"
import {Stats} from "./Stats"
import {Equipment, EquipmentType} from "./Equipment"
export type Player = {
    name: string;
    class: string;
    inventory: Map<string, Item>;
    stats: Stats;
    gold: number;
    equipments: Map<EquipmentType, Equipment>;
    completedLevels: Record<string, number>;
  }