import { Grid, Menu, MenuItem, Typography, Box } from '@mui/material';

// Note: will probably make the equipment part graphical instead of just texts
function createStat(ability = '', stat = 0) {
    return {ability, stat}
}

function createEquipment(part = '', name = '') {
    return {part, name}
}

let inventoryRows = [
    createStat(
        'French Fries',
        20
    ),
    createStat(
        'Whopper',
        5
    ),
    createStat(
        'Big Mac',
        87
    ),
    createStat(
        'Stick',
        3
    ),
    createStat(
        'Rock',
        2
    ),
    createStat(
        'Needles',
        4
    ),
]

let equipRows = [
    createEquipment(
        'Helmet',
        'My head',
    ),
    createEquipment(
        'Armor',
        'Rags',
    ),
    createEquipment(
        'Boots',
        'Barefoot',
    ),
    createEquipment(
        'Weapon1',
        'My hand',
    ),
    createEquipment(
        'Weapon2',
        'My hand',
    ),
    createEquipment(
        'Accessory',
        'Nothing',
    ),

]

let statRows = [
    createStat(
        'Exp',
        0,
    ),
    createStat(
        'Strength',
        3,
    ),
    createStat(
        'Dexterity',
        5,
    ),
    createStat(
        'Luck',
        7,
    ),
    createStat(
        'Intelligence',
        10,
    ),
    createStat(
        'Vitality',
        7,
    ),
    createStat(
        'Agility',
        6,
    ),

]

let rows = [
    createStat(
        'Level',
        1,
    ),
    createStat(
        'HP',
        10,
    ),
    createStat(
        'MP',
        20,
    ),
    createStat(
        'GOLD',
        10,
    ),

]
const str = `      ,   ,
     /////|
    | S | |
    | P | |
    | E | |
    | L | |
    | L |/
    '---'
`;

function clickSpell() {
    alert("This will be the spell book");
  }

function CharacterUi() {

    return(
    <>
        <Box m={2}>
            <Typography variant="h4" fontWeight='bold'>VandySquirrel79</Typography>
            <Typography variant="h5" fontStyle= 'italic'>Mage</Typography>
        </Box>

        <Grid container alignItems="stretch">
            <Box sx={{ border: 1, minWidth:"110px", width: "12vw", borderColor: 'secondary.main', m: 1}}>
            <Typography variant="h6">Stats</Typography>
                {rows.map((row, ability) => (
                    <Grid container columns={2}>
                        <Grid item xs={1}> {row.ability}: </Grid>
                        <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                    </Grid>
                ))}
                {statRows.map((row, ability) => (
                    <Grid container columns={2}>
                        <Grid item xs={1}> {row.ability}: </Grid>
                        <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                    </Grid>
                ))}
            </Box>

            <Box sx={{ border: 1, minWidth:"150px", width: "15vw", borderColor: 'secondary.main', m: 1}}>
            <Typography variant="h6">Equipments</Typography>
                {equipRows.map((row, ability) => (
                    <Grid container columns={2}>
                        <Grid item xs={1}> {row.part}: </Grid>
                        <Grid item xs={1} textAlign="right"> {row.name}</Grid>
                    </Grid>
                ))}
                <pre onClick={clickSpell}>
                    {str}
                </pre>
            </Box>


            <Box minWidth="110px" width="25vw" m={1}>
                <Typography variant="h6">INVENTORY</Typography>
                <Grid container >
                {inventoryRows.map((row, ability) => (
                    <Grid container rowSpacing={10}>
                        <Grid item sm={7}> {row.ability}: </Grid>
                        <Grid item sm={1} textAlign="right"> {row.stat}</Grid>
                        
                    </Grid>
                ))}
                </Grid>
            </Box>

        </Grid>

    </>

    );

}

export default CharacterUi;