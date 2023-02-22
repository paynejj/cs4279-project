import React from 'react';
import { Grid, Tooltip, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import Info from './Info';
import SpellBook from './SpellBook';
import QuestList from './QuestList';
import './Character.css';

function createStat(ability = '', stat = 0) {
    return { ability, stat }
}

function createEquipment(part = '', name = '') {
    return { part, name }
}

let inventoryRows = [
    createStat(
        'French Fries',
        1
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
        'German Fries',
        20
    ),
    createStat(
        'Chips Ahoy Crunchy',
        5
    ),
    createStat(
        'Fillet-O-Fish',
        87
    ),
    createStat(
        'McNuggets',
        3
    ),
    createStat(
        'British Muffin',
        2
    ),
    createStat(
        'CHEETOS Crunchy FLAMIN` HOT',
        4
    ),
    createStat(
        'British Fries',
        20
    ),
    createStat(
        'Dutch Fries',
        5
    ),
    createStat(
        'Italian Fries',
        87
    ),
    createStat(
        'Spanish Fries',
        3
    ),
    createStat(
        'Italian Meatball',
        2
    ),
    createStat(
        'Hawaiian Pizza',
        4
    ),
    createStat(
        'Shaq-a-Roni',
        20
    ),
    createStat(
        'MAC Lipstick',
        5
    ),
    createStat(
        'Chanel Lipstick',
        87
    ),
    createStat(
        'YSL Lipstick',
        3
    ),
    createStat(
        'Dior Lipstick',
        2
    ),
]

let equipRows = [
    createEquipment(
        'Helmet',
        'Vandy Boy Cap',
    ),
    createEquipment(
        'Chestplate',
        'Rags',
    ),
    createEquipment(
        'Boots',
        'Yeezy 450 Dark Sulfur',
    ),
    createEquipment(
        'Chausses',
        'Calvin Klein Boxers',
    ),
    createEquipment(
        'Weapon',
        'Working Gloves',
    ),
    createEquipment(
        'Ring1',
        'My Wedding Ring',
    ),
    createEquipment(
        'Ring2',
        'Ring from My Affair',
    ),
    createEquipment(
        'Amulet',
        'Thx Grandma',
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
let statDescription = `This is the stat description.
This will tell you about what each of the ability does
and what each of them affects`;


function CharacterUi() {
    const [equipments, setEquipments] = React.useState(equipRows);
    const [inventories, setInvertories] = React.useState(inventoryRows);
    const [anchorElItem, setAnchorElItem] = React.useState<null | HTMLElement>(null);
    const [anchorElEquip, setAnchorElEquip] = React.useState<null | HTMLElement>(null);
    const [itemMenuIdx, setItemMenuIdx] = React.useState(0);
    const [equipMenuIdx, setEquipMenuIdx] = React.useState(0);
    const openItem = Boolean(anchorElItem);
    const openEquip = Boolean(anchorElEquip);

    const handleClickItem = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setItemMenuIdx(idx);
        setAnchorElItem(event.currentTarget);
    };
    const handleCloseItem = () => {
        setAnchorElItem(null);
    };

    const handleUseItem = () => {
        let newInventories = inventories;
        newInventories[itemMenuIdx].stat -= 1;
        setInvertories(newInventories);
        setAnchorElItem(null);
    };

    const handleUnequip = () => {
        let newEquipments = equipments;
        newEquipments[equipMenuIdx].name = "NOTHING";
        setEquipments(newEquipments);
        setAnchorElEquip(null);
    };

    const handleEquip = () => {
        
    };

    const handleClickEquip = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setEquipMenuIdx(idx);
        setAnchorElEquip(event.currentTarget);
    };
    const handleCloseEquip = () => {
        setAnchorElEquip(null);
    };

    return (
        <>
            <Box m={2}>
                <Typography variant="h4" fontWeight='bold'>VandySquirrel59</Typography>
                <Typography variant="h5" fontStyle='italic'>Sorcerer</Typography>
            </Box>

            <Grid container alignItems="stretch">
                <Box sx={{ border: 1, minWidth: "110px", width: "12vw", borderColor: 'secondary.main', m: 1 }}>
                    <Typography variant="h6">Stats</Typography>
                    {generalStatRows.map((row, idx) => (
                        <Tooltip key={row.ability} title={statDescription} disableInteractive>
                            <Grid container columns={2}>
                                <Grid item xs={1}> {row.ability}: </Grid>
                                <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                            </Grid>
                        </Tooltip>
                    ))}
                    {abilityStatRows.map((row, ability) => (
                        <Tooltip key={row.ability} title={statDescription} disableInteractive>
                            <Grid container columns={2}>
                                <Grid item xs={1}> {row.ability}: </Grid>
                                <Grid item xs={1} textAlign="right"> {row.stat}</Grid>
                            </Grid>
                        </Tooltip>
                    ))}
                    <Grid container>
                        <Grid item>
                            <SpellBook />
                        </Grid>
                        <Grid item>
                            <QuestList />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ border: 1, minWidth: "180px", width: "18vw", borderColor: 'secondary.main', m: 1 }}>
                    <Typography variant="h6">Equipments</Typography>
                    {equipRows.map((row, idx) => (

                        <Grid container key={row.part}>
                            <Grid item xs={4}> {row.part}: </Grid>
                            <Grid item xs={8} textAlign="center">
                                <Button
                                    id="equip-button"
                                    aria-controls={openEquip ? 'equip-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openEquip ? 'true' : undefined}
                                    onClick={(e) => handleClickEquip(e, idx)}
                                    style={{ justifyContent: "flex-start" }}
                                    sx={{
                                        color: "pink", marginLeft: 'auto',
                                        ':hover': {
                                            bgcolor: 'purple',
                                            color: 'black',
                                        },
                                    }}
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
                                {equipments[equipMenuIdx].name === "NOTHING" ?
                                    <MenuItem
                                        onClick={handleEquip}
                                    >
                                        <Button sx={{ color: "white" }}>Equip</Button>
                                    </MenuItem> :
                                    <MenuItem
                                        onClick={handleUnequip}
                                    >
                                        <Button sx={{ color: "white" }}>Unequip</Button>
                                    </MenuItem>
                                }
                                <MenuItem>
                                    <Info />
                                </MenuItem>
                            </Menu>
                        </Grid>
                    ))}
                </Box>

                <Box minWidth="200px" width="25vw" m={1}>
                    <Typography variant="h6">&nbsp;INVENTORY</Typography>
                    <Grid container height="270px" sx={{ overflow: "hidden", overflowY: "auto" }}>
                        {inventoryRows.map((row, idx) => (
                            row.stat > 0 ?
                                <Grid container key={row.ability}>
                                    <Grid item sm={11}>
                                        <Button
                                            aria-controls={openItem ? 'item-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openItem ? 'true' : undefined}
                                            onClick={(e) => handleClickItem(e, idx)}
                                            sx={{
                                                color: "pink",
                                                ':hover': {
                                                    bgcolor: 'purple',
                                                    color: 'black',
                                                },
                                            }}
                                        >
                                            {row.ability}
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
                                            onClick={handleUseItem}
                                        >
                                            <Button
                                                sx={{ color: "white" }}
                                            >Use</Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Info />
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleUseItem}
                                        >
                                            <Button sx={{ color: "white" }}>Destroy</Button>
                                        </MenuItem>
                                    </Menu>

                                    <Grid item sm={1} textAlign="right"> {row.stat}</Grid>
                                </Grid>
                                : <div></div>
                        ))}

                    </Grid>
                </Box>

            </Grid>

        </>

    );

}

export default CharacterUi;