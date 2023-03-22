
export type Spell = {
    Name: string,
    Description: string,
    Level: number,
    Intelligence: number,
    MP: number,
    Damage: number
}



export const spellRow: Spell[] = [
    {
        Name: "Fireball", Description: "Fireball burns your enemies!",
        Level: 10, Intelligence: 8, MP: 7, Damage: 14
    },
    {
        Name: "Teleport", Description: "Teleport back to the Hometown",
        Level: 12, Intelligence: 13, MP: 15, Damage: 0
    },
]