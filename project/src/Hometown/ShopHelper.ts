import { ShopData } from "../Object/Shop";
import { EquipmentType } from "../Object/Equipment"

export const shopData: ShopData = [
    {
        name: 'HP Potion',
        value: 10,
        amount: 5,
        item_type: ["HP", 5],
    },
    {
        name: 'Bag of Chips',
        value: 3,
        amount: 3,
        item_type: ["HP", 2],
    },
    {
        name: 'MP Potion',
        value: 5,
        amount: 2,
        item_type: ["MP", 5],
    },
    {
        name: 'Sword',
        value: 45,
        amount: 1,
        item_type: ["Sword", {
            equipmentType: EquipmentType.Weapon,
            Strength: 3,
        }]
    },
    {
        name: 'Dagger',
        value: 30,
        amount: 2,
        item_type: ["Dagger", {
            equipmentType: EquipmentType.Weapon,
            Agility: 1,
            Dexterity: 1,
        }]
    },
    {
        name: 'Chopsticks',
        value: 10,
        amount: 2,
        item_type: ["Chopsticks", {
            equipmentType: EquipmentType.Weapon,
            Agility: 1,
            Dexterity: 1,
            Intellegence: 5,
            Luck: -3,
            MaxMP: 15,
        }]
    },
    {
        name: 'Mithril Coat',
        value: 130,
        amount: 1,
        item_type: ["Mithril Coat", {
            equipmentType: EquipmentType.Chestplate,
            Strength: 3,
            MaxHP: 10,
        }]
    },
    {
        name: 'AmberNecklace',
        value: 50,
        amount: 2,
        item_type: ["AmberNecklace", {
            equipmentType: EquipmentType.Amulet,
            Luck: 5,
        }]
    },
    {
        name: 'Greaves',
        value: 180,
        amount: 1,
        item_type: ["Greaves", {
            equipmentType: EquipmentType.Boots,
            MaxHP: 18,
            Agility: 9,
        }]
    },
    {
        name: 'Chain Boots',
        value: 80,
        amount: 2,
        item_type: ["Chain Boots", {
            equipmentType: EquipmentType.Boots,
            MaxHP: 2,
            Agility: 4,
        }]
    },
    {
        name: 'Scale Chausses',
        value: 100,
        amount: 1,
        item_type: ["Scale Chausses", {
            equipmentType: EquipmentType.Chausses,
            MaxHP: 7,
            Dexterity: 1,
            Vitality: 2,
            Agility: -1,
        }]
    },
    {
        name: 'Ring (R)',
        value: 70,
        amount: 1,
        item_type: ["Ring (R)", {
            equipmentType: EquipmentType.Ring1,
            MaxMP: 5,
            Luck: 3,
            Vitality: -1,
        }]
    },
    {
        name: 'Ring (L)',
        value: 30,
        amount: 1,
        item_type: ["Ring (L)", {
            equipmentType: EquipmentType.Ring2,
            MaxMP: 2,
            Luck: 1,
            Vitality: 1,
        }]
    },
];
