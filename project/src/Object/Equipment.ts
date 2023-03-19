type EquipmentStats = {
    equipmentType: EquipmentType;
    MaxHP?: number;
    MaxMP?: number;
    Strength?: number;
    Dexerity?: number;
    Luck?: number;
    Intellegence?: number;
    Vitality?: number;
    Agility?: number;
};

export enum EquipmentType {
    Helmet = "Helmet",
    Chestplate = "Chestplate",
    Boots = "Boots", 
    Chausses = "Chausses",
    Ring1 = "Ring1",
    Ring2 = "Ring2",
    Amulet = "Amulet",
    Weapon = "Weapon",
}

// the string here is the name of the equipment
export type Equipment = [string, EquipmentStats];
