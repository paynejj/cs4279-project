import { Player } from "../Object/Player";
import { Equipment, EquipmentType } from "../Object/Equipment";
import { Item } from "../Object/Item"

let defaultInventory = new Map<string, Item>([
    ["Vandy Cap",
        {
            name: 'Vandy Cap',
            value: 10,
            amount: 1,
            item_type: ['Vandy Cap', { equipmentType: EquipmentType.Helmet, Intellegence: 1, }],
        }],
    ["French Fries",
        {
            name: 'French Fries',
            value: 2,
            amount: 1,
            item_type: ["HP", 2],
        }],
]);

let defaultEquipments = new Map<EquipmentType, Equipment>([
    [EquipmentType.Helmet, ['NOTHING', { equipmentType: EquipmentType.Helmet, }]],
    [EquipmentType.Chestplate, ['NOTHING', { equipmentType: EquipmentType.Chestplate, }]],
    [EquipmentType.Boots, ['NOTHING', { equipmentType: EquipmentType.Boots, }]],
    [EquipmentType.Chausses, ['NOTHING', { equipmentType: EquipmentType.Chausses }]],
    [EquipmentType.Ring1, ['NOTHING', { equipmentType: EquipmentType.Ring1 }]],
    [EquipmentType.Ring2, ['NOTHING', { equipmentType: EquipmentType.Ring2 }]],
    [EquipmentType.Amulet, ['NOTHING', { equipmentType: EquipmentType.Amulet }]],
    [EquipmentType.Weapon, ['NOTHING', { equipmentType: EquipmentType.Weapon }]],
]);

export const defaultPlayerData: Player = {
    name: "Player123",
    class: "Warrior",
    gold: 1000,
    stats: {
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
    },
    completedLevels: {},
    inventory: defaultInventory,
    equipments: defaultEquipments,

};