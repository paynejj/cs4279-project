import { Grid, TableRow, TableCell, TableBody, Typography } from '@mui/material';

// Note: will probably make the equipment part graphical instead of just texts
function createStat(ability = '', stat = 0) {
    return {ability, stat}
}

function createEquipment(part = '', name = '') {
    return {part, name}
}

let equipRows = [
    createEquipment(
        'Helmet',
        'my head',
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
        'Left Hand',
        'My hand',
    ),
    createEquipment(
        'Right Hand',
        'My hand',
    ),
    createEquipment(
        'Accesory',
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
        'GOLD ',
        10,
    ),

]
const str = `     ,   ,
    /////|
   | S | |
   | P | |
   | E | |
   | L | |
  | L |/
 '---'
`;

function characterUi() {

    return(
    <>
        <Grid container justifyContent="flex-start" alignItems="flex-start">

            <Grid item>
                <Typography>Mage</Typography>
            </Grid>
            <Grid container alignItems="flex-start" rowSpacing={1} direction="column" columnSpacing={2}>
            {statRows.map((row, ability) => (
            
                <Grid item rowSpacing={1}>

                    
                <Grid item display="inline">{row.ability}: </Grid>
                
                <Grid item display="inline"> {row.stat}</Grid>
                

                </Grid>
            
            ))}
            </Grid>
                
            
            <TableBody>
                <TableCell align="center">
                    YourName
                </TableCell>
                {rows.map((row, ability) => (
                    <TableRow>
                        <TableCell style={{borderBottom:"none"}}>
                            {row.ability}
                        </TableCell>          
                        <TableCell style={{borderBottom:"none"}} align="right" >
                            {row.stat}
                        </TableCell>
                    </TableRow>
                    ))}
                <TableRow>
                    <pre>
                        {str}
                    </pre>
                </TableRow>
            </TableBody>

            <TableBody>
                <TableCell align="right"> 
                    Equipments
                </TableCell>
                {equipRows.map((row, index) => (
                    <TableRow>
                        <TableCell style={{borderBottom:"none"}}>
                            {row.part}
                        </TableCell>
                        <TableCell style={{borderBottom:"none"}} align="right" >
                            {row.name}
                        </TableCell>
                    </TableRow>
                     ))}            
            </TableBody>
        </Grid>

        <Grid container justifyContent="flex-start">
            <Typography>INVENTORY</Typography>
            <Grid container item>
                ilugiu
            </Grid>
            <Grid container item>
                asdfasdf
            </Grid>
            <Grid container item>
                adsgqrwhqrhqwrhqw
            </Grid>
        </Grid>


    </>

    );

}

export default characterUi;