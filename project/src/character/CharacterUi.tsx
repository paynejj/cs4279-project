import React from 'react';
import { Grid, Tooltip, Typography, Box, Menu, MenuItem, Button, Modal } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Info from './Info'
import './Character.css';

// Note: will probably make the equipment part graphical instead of just texts
function createStat(ability = '', stat = 0) {
    return { ability, stat }
}

function createEquipment(part = '', name = '') {
    return { part, name }
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
    ), createStat(
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

let abilityStatRows = [
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

let generalStatRows = [
    createStat(
        'Level',
        1,
    ),
    createStat(
        'Exp',
        0,
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
const spellASCII = `      ,   ,
     /////|
    | S | |
    | P | |
    | E | |
    | L | |
    | L |/
    '---'
`;

const questASCII = `    ,   ,
   /////|
  | Q | |
  | U | |
  | E | |
  | S | |
  | T |/
  '---'
`;

let statDescription = `This is the stat description.
This will tell you about what each of the ability does
and what each of them affects`

function clickSpell() {
    alert("The spell book");
}

function clickQuest() {
    alert("The quest list");
}

function CharacterUi() {
    const [anchorElItem, setAnchorElItem] = React.useState<null | HTMLElement>(null);
    const openItem = Boolean(anchorElItem);
    const handleClickItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElItem(event.currentTarget);
    };
    const handleCloseItem = () => {
        setAnchorElItem(null);
    };

    const [anchorElEquip, setAnchorElEquip] = React.useState<null | HTMLElement>(null);
    const openEquip = Boolean(anchorElEquip);
    const handleClickEquip = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElEquip(event.currentTarget);
    };
    const handleCloseEquip = () => {
        setAnchorElEquip(null);
    };


    return (
        <>
            <Box m={2}>
                <Typography variant="h4" fontWeight='bold'>VandySquirrel79</Typography>
                <Typography variant="h5" fontStyle='italic'>Mage</Typography>
            </Box>

            <Grid container alignItems="stretch">
                <Box sx={{ border: 1, minWidth: "110px", width: "12vw", borderColor: 'secondary.main', m: 1 }}>
                    <Typography variant="h6">Stats</Typography>
                    {generalStatRows.map((row, ability) => (
                        <Tooltip title={statDescription} disableInteractive>
                            <Grid container columns={2}>
                                <Grid item xs={1}> {row.ability}: </Grid>
                                <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                            </Grid>
                        </Tooltip>
                    ))}
                    {abilityStatRows.map((row, ability) => (
                        <Tooltip title={statDescription} disableInteractive>
                            <Grid container columns={2}>
                                <Grid item xs={1}> {row.ability}: </Grid>
                                <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                            </Grid>
                        </Tooltip>
                    ))}
                </Box>

                <Box sx={{ border: 1, minWidth: "180px", width: "18vw", borderColor: 'secondary.main', m: 1 }}>
                    <Typography variant="h6">Equipments</Typography>
                    {equipRows.map((row, ability) => (
                        <Grid container columns={2}>
                            <Grid item xs={1}> {row.part}: </Grid>
                            <Grid item xs={1} textAlign="right">
                                <Button
                                    id="equip-button"
                                    aria-controls={openEquip ? 'equip-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openEquip ? 'true' : undefined}
                                    onClick={handleClickEquip}
                                    sx={{ color: "pink" }}
                                >
                                    {row.name}
                                </Button>
                            </Grid>
                            <Menu
                                id="equip-menu"
                                anchorEl={anchorElEquip}
                                open={openEquip}
                                onClose={handleCloseEquip}
                                MenuListProps={{
                                    'aria-labelledby': 'equip-button',
                                }}
                                PaperProps={{
                                    sx: {
                                        background: "#45103E", color: "white",
                                        border: "1px", borderColor: "purple"
                                    }
                                }}
                            >
                                <MenuItem
                                    onClick={handleCloseEquip}>
                                    <Button sx={{ color: "white" }}>Use</Button>
                                </MenuItem>
                                <MenuItem>
                                    <Info />
                                </MenuItem>
                            </Menu>



                        </Grid>
                    ))}
                    <Grid container columns={2}>
                        <Grid item xs={1}>
                            <pre onClick={clickSpell}>
                                {spellASCII}
                            </pre>
                        </Grid>
                        <Grid item xs={1} textAlign="left">
                            <pre onClick={clickQuest}>
                                {questASCII}
                            </pre>
                        </Grid>
                    </Grid>
                </Box>

                <Box minWidth="200px" width="20vw" m={1}>
                    <Typography variant="h6">INVENTORY</Typography>
                    <Grid container height="270px" sx={{ overflow: "hidden", overflowY: "auto" }}>
                        {inventoryRows.map((row, ability) => (
                            <Grid container>
                                <Grid item sm={11}>
                                    <Button
                                        id="item-button"
                                        aria-controls={openItem ? 'item-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openItem ? 'true' : undefined}
                                        onClick={handleClickItem}
                                        sx={{ color: "pink" }}
                                    >
                                        {row.ability}:
                                    </Button>
                                </Grid>
                                <Menu
                                    id="item-menu"
                                    anchorEl={anchorElItem}
                                    open={openItem}
                                    onClose={handleCloseItem}
                                    MenuListProps={{
                                        'aria-labelledby': 'item-button',
                                    }}
                                    PaperProps={{
                                        sx: {
                                            background: "#45103E", color: "white",
                                            border: "1px", borderColor: "purple"
                                        }
                                    }}
                                >
                                    <MenuItem
                                        onClick={handleCloseItem}>
                                        <Button sx={{ color: "white" }}>Use</Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Info />
                                    </MenuItem>
                                    <MenuItem
                                        onClick={handleCloseItem}>
                                        <Button sx={{ color: "white" }}>Destroy</Button>
                                    </MenuItem>
                                </Menu>

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