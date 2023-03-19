import { ShopData } from "../Object/Shop";
import { Item } from "../Object/Item";
import { EquipmentType } from "../Object/Equipment"

const id0: Item = {
    name: 'HP Potion',
    value: 2,
    amount: 5,
    item_type: ["HP", 5],
};

const id1: Item = {
    name: 'MP Potion',
    value: 2,
    amount: 2,
    item_type: ["MP", 5],
};

const id2: Item = {
    name: 'Sword',
    value: 10,
    amount: 2,
    item_type: ["Sword", {
        equipmentType: EquipmentType.Weapon,
        Strength: 3,
    }]
};

const id3: Item = {
    name: 'Bag of Chips',
    value: 2,
    amount: 3,
    item_type: ["HP", 2],
};

const id4: Item = {
    name: 'Mithril Chestplate',
    value: 50,
    amount: 1,
    item_type: ["Mithril Chestplate", {
        equipmentType: EquipmentType.Chestplate,
        Strength: 3,
        MaxHP: 10,
    }]
};

const id5: Item = {
    name: 'Iron Dagger',
    value: 6,
    amount: 10,
    item_type: ["Iron Dagger", {
        equipmentType: EquipmentType.Weapon,
        Agility: 1,
        Dexerity: 1,
    }]
};

const id6: Item = {
    name: 'Amber Necklace',
    value: 30,
    amount: 10,
    item_type: ["Amber Necklace", {
        equipmentType: EquipmentType.Amulet,
        Luck: 5,
    }]
};

export const shopData: ShopData = [id0, id1, id2, id3, id4, id5, id6];