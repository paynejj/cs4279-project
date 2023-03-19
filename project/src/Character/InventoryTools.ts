import {Item} from '../Object/Item'
import {Equipment} from '../Object/Equipment'
import {Potion} from '../Object/Potion'


// //Description for the sort button's tooltip
// export let sortDescription = `Sort the inventory by ascending alphabetical order`

// // Sort logic by ascending alphabetical order
// export const itemAlphabeticalSort = (a: Item, b: Item) => {
//     const nameA = a[0].toUpperCase();
//     const nameB = b[0].toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// };

// export const equipAlphabeticalSort = (a: Equipment, b: Equipment) => {
//     const nameA = a[1][0].toUpperCase();
//     const nameB = b[1][0].toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// };