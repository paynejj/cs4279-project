
type Item = [itemName: string, itemNumber: number];
type Equipment = [partName: string, equipName: string];

//Dummy Equipments in the inventory
export let equipInventoryRows: Equipment[] = [
    ['Helmet', 'Bike Helmet for 12'],
    ['Chestplate', 'Vandy Tshirt'],
    ['Boots', 'Airforce 2'],
    ['Weapon', 'Apple Pencil 1'],
]

//Dummy Items in the inventory
export let inventoryRows: Item[] = [
    ['French Fries', 1],
    ['Whopper', 5],
    ['Chips Ahoy Crunchy', 1],
    ['Fillet-O-Fish', 87],
    ['McNuggets', 3],
    ['British Muffin', 2]
]

//Dummy equipments currently wearing
export let equipRows: Equipment[] = [
    ['Helmet', 'Vandy Boy Cap'],
    ['Chestplate', 'Rags'],
    ['Boots', 'Yeezy 450 Dark Sulfur'],
    ['Chausses', 'Calvin Klein Boxers'],
    ['Weapon', 'Working Gloves'],
    ['Ring1', 'My Wedding Ring'],
    ['Ring2', 'Ring from My Affair'],
    ['Amulet', 'Thx Grandma'],
]

//Description for the sort button's tooltip
export let sortDescription = `Sort the inventory by ascending alphabetical order`

// Sort logic by ascending alphabetical order
export const itemAlphabeticalSort = (a: Item, b: Item) => {
    const nameA = a[0].toUpperCase();
    const nameB = b[0].toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
};

export const equipAlphabeticalSort = (a: Equipment, b: Equipment) => {
    const nameA = a[1].toUpperCase();
    const nameB = b[1].toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
};