
/**Object Passed to Player Scripts when spawned */
export const CDScript = {
    //Game engine make new dungeon object
    getDungeon(level: string) {
    },

    //Get Stats from game engine
    getPlayerStats() {
    },

    //get current money
    getMoney() {
    },

    //attack
    attack(target: string, spell: string) {
    }
} as const; 
