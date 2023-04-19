import { Player } from "../Object/Player";
import { Equipment, EquipmentType } from "../Object/Equipment";
import { Item } from "../Object/Item"

export const defaultEquipments = new Map<EquipmentType, Equipment>([
    [EquipmentType.Helmet, ['NOTHING', { equipmentType: EquipmentType.Helmet, }]],
    [EquipmentType.Chestplate, ['NOTHING', { equipmentType: EquipmentType.Chestplate, }]],
    [EquipmentType.Boots, ['NOTHING', { equipmentType: EquipmentType.Boots, }]],
    [EquipmentType.Chausses, ['NOTHING', { equipmentType: EquipmentType.Chausses }]],
    [EquipmentType.Ring1, ['NOTHING', { equipmentType: EquipmentType.Ring1 }]],
    [EquipmentType.Ring2, ['NOTHING', { equipmentType: EquipmentType.Ring2 }]],
    [EquipmentType.Amulet, ['NOTHING', { equipmentType: EquipmentType.Amulet }]],
    [EquipmentType.Weapon, ['NOTHING', { equipmentType: EquipmentType.Weapon }]],
]);

export const defaultStats = {
    Level: 1,
    HP: 10,
    MaxHP: 10,
    MP: 10,
    MaxMP: 10,
    Strength: 3,
    Dexterity: 3,
    Luck: 3,
    Intellegence: 3,
    Vitality: 3,
    Agility: 3,
};

export const defaultPlayerData: Player = {
    name: "",
    class: "",
    gold: 1000,
    stats: JSON.parse(JSON.stringify(defaultStats)),
    completedLevels: {},
    inventory: new Map<string, Item>(),
    equipments: defaultEquipments,
    inDungeon: false,
};