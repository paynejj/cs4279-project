import { Stats } from "./Stats";
type Helmet = [string, Stats];
type Chestplate = [string, Stats];
type Boots = [string, Stats];
type Chausses = [string, Stats];
type Ring1 = [string, Stats];
type Ring2 = [string, Stats];
type Amulet = [string, Stats];
type Weapon = [string, Stats];

export type Equipment = [Helmet, Chestplate, Boots, Chausses, Ring1, Ring2, Amulet, Weapon]
