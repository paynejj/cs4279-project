import { Player } from "../Object/Player";
import { Item } from "../Object/Item";

// Load player data from local storage
export function loadPlayerData(): Player | undefined {
    const playerData = (localStorage.getItem('playerData'));
    if (playerData) {
        let parsedPlayerData = JSON.parse(playerData);
        if(parsedPlayerData.inventory){
            parsedPlayerData.inventory = new Map(Object.entries(parsedPlayerData.inventory));
        } else {
            parsedPlayerData.inventory = new Map<Item, number>();
        }
        
        return parsedPlayerData;
    }
}

// Save player data to local storage
// export function savePlayerData(playerData) {

//     if (playerData) {
//         const inventoryObj = Object.fromEntries(playerData.inventory);
//         // const equipmentObj = Object.fromEntries(playerData.equipments);
//         playerData.inventory = inventoryObj;
//         // playerData.equipments = equipmentObj;
//         localStorage.setItem('playerData', JSON.stringify(playerData));
//         console.log('Saved player data to local storage');
//     }

// }


// Attach savePlayerData to window's beforeunload event to ensure data is saved before closing window
// window.addEventListener('beforeunload', savePlayerData);


// export function buyItem(item: Item, amount: number) {
//     let playerData = loadPlayerData();
//     if (playerData) {
//         if (playerData.gold >= item.value * amount) {
//             playerData.gold -= item.value * amount;
//             if (playerData) {
//                 if (playerData.inventory !== undefined) {
//                     let currentAmount = playerData.inventory.get(item) ?? 0;
//                     playerData.inventory.set(item, currentAmount + amount);
//                 }
//             }
//         }
//     }
// }