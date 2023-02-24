import React from 'react';
import { Grid, Tooltip, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ShieldIcon from '@mui/icons-material/Shield';
import Info from './Info';
import SpellBook from './SpellBook';
import QuestList from './QuestList';
import './Character.css';

function createStat(ability = '', stat = 0) {
    return { ability, stat }
}

function createItem(name = '', stat = 0) {
    return { name, stat }
}

function createEquipment(part = '', name = '') {
    return { part, name }
}

let equipInventoryRows = [
    createEquipment(
        'Helmet',
        'Bike Helmet for 12',
    ),
    createEquipment(
        'Chestplate',
        'Vandy Tshirt',
    ),
    createEquipment(
        'Boots',
        'Airforce 2',
    ),
    createEquipment(
        'Weapon',
        'Apple Pencil 1',
    ),
]

let inventoryRows = [
    createItem(
        'French Fries',
        1
    ),
    createItem(
        'Whopper',
        5
    ),
    createItem(
        'Chips Ahoy Crunchy',
        1
    ),
    createItem(
        'Fillet-O-Fish',
        3
    ),
    createItem(
        'McNuggets',
        3
    ),
    createItem(
        'British Muffin',
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

let sortDescription = `Sort the inventory by ascending alphabetical order`;


function CharacterUi() {
    const [equipments, setEquipments] = React.useState(equipRows);
    const [inventory, setInvertories] = React.useState(inventoryRows);
    const [equipInventory, setEquipInvertories] = React.useState(equipInventoryRows);
    const [anchorElItem, setAnchorElItem] = React.useState<null | HTMLElement>(null);
    const [anchorElEquip, setAnchorElEquip] = React.useState<null | HTMLElement>(null);
    const [anchorElEquipItem, setAnchorElEquipItem] = React.useState<null | HTMLElement>(null);
    const [itemMenuIdx, setItemMenuIdx] = React.useState(0);
    const [equipInventoryMenuIdx, setEquipInventoryMenuIdx] = React.useState(0);
    const [equipMenuIdx, setEquipMenuIdx] = React.useState(0);
    const [inventoryCount, setInventoryCount] = React.useState(equipInventory.length + inventory.length);
    const openItem = Boolean(anchorElItem);
    const openEquipItem = Boolean(anchorElEquipItem);
    const openEquip = Boolean(anchorElEquip);

    const handleClickItem = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setItemMenuIdx(idx);
        setAnchorElItem(event.currentTarget);
    };
    const handleCloseItem = () => {
        setAnchorElItem(null);
    };

    const handleUseItem = () => {
        let newInventory = inventory;
        newInventory[itemMenuIdx].stat -= 1;
        if (newInventory[itemMenuIdx].stat === 0) {
            setInventoryCount(inventoryCount - 1);
        }
        setInvertories(newInventory);
        setAnchorElItem(null);
    };

    const handleClickEquipItem = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setEquipInventoryMenuIdx(idx);
        setAnchorElEquipItem(event.currentTarget);
    };
    const handleCloseEquipItem = () => {
        setAnchorElEquipItem(null);
    };

    const handleEquipItem = () => {
        let newEquipments = equipments;
        let newEquipInventory = equipInventory;

        let num = -1;

        if (equipInventory[equipInventoryMenuIdx].part === "Helmet") {
            num = 0;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Chestplate") {
            num = 1;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Boots") {
            num = 2;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Chausses") {
            num = 3;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Weapon") {
            num = 4;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Ring1") {
            num = 5;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Ring2") {
            num = 6;
        }
        if (equipInventory[equipInventoryMenuIdx].part === "Amulet") {
            num = 7;
        }

        let temp = equipments[num].name;
        equipments[num].name = equipInventory[equipInventoryMenuIdx].name;
        equipInventory[equipInventoryMenuIdx].name = temp;

        if (equipInventory[equipInventoryMenuIdx].name === "NOTHING") {
            newEquipInventory.splice(equipInventoryMenuIdx, 1);
            setInventoryCount(inventoryCount - 1);
        }

        setEquipments(newEquipments);
        setEquipInvertories(newEquipInventory);
        setAnchorElEquipItem(null);
    };

    const handleDestroyEquipment = () => {
        let newEquipInventory = equipInventory;
        newEquipInventory.splice(equipInventoryMenuIdx, 1);
        console.log(newEquipInventory);
        setEquipInvertories(newEquipInventory);
        setInventoryCount(inventoryCount - 1);
        setAnchorElEquipItem(null);
    };

    const handleUnequip = () => {
        let newEquipments = equipments;
        let newEquipInventory = equipInventory;
        newEquipInventory.unshift(createEquipment(
            equipments[equipMenuIdx].part,
            equipments[equipMenuIdx].name,
        ));
        newEquipments[equipMenuIdx].name = "NOTHING";
        setEquipments(newEquipments);
        setEquipInvertories(newEquipInventory);
        setInventoryCount(inventoryCount + 1);
        setAnchorElEquip(null);
    };

    const alphabeticalSort = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    };

    const handleSort = () => {
        let newInventory = inventory;
        let newEquipInventory = equipInventory;
        newInventory.sort(alphabeticalSort);
        newEquipInventory.sort(alphabeticalSort);
        setEquipInvertories(newEquipInventory);
        setInvertories(newInventory);
        if (itemMenuIdx === -1) {
            setItemMenuIdx(0);
        } else {
            setItemMenuIdx(-1);
        }
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
                                    }}>
                                    {row.name}
                                </Button>
                            </Grid>
                            {equipments[equipMenuIdx].name === "NOTHING" ?
                                <div></div> :
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
                                    }}>
                                    <MenuItem onClick={handleUnequip}>
                                        <Button sx={{ color: "white" }}>Unequip</Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Info />
                                    </MenuItem>
                                </Menu>
                            }
                        </Grid>
                    ))}
                </Box>

                <Box minWidth="200px" width="25vw" m={1}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h6">&nbsp;INVENTORY</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography >{inventoryCount}/20</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <Tooltip title={sortDescription} disableInteractive>
                                <Button color="inherit" size='small' onClick={handleSort}><SortIcon /></Button>
                            </Tooltip>
                        </Grid>
                    </ Grid>

                    <Grid container height="270px" sx={{ overflow: "hidden", overflowY: "auto" }}>
                        <Grid item>
                            {equipInventoryRows.map((row, idx) => (
                                <Grid container key={row.name}>
                                    <Grid item sm={12}>
                                        <Button
                                            aria-controls={openEquipItem ? 'item-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openEquipItem ? 'true' : undefined}
                                            onClick={(e) => handleClickEquipItem(e, idx)}
                                            sx={{
                                                color: "pink",
                                                ':hover': {
                                                    bgcolor: 'purple',
                                                    color: 'black',
                                                },
                                            }}>
                                            <ShieldIcon />{row.name}
                                        </Button>
                                    </Grid>
                                    <Menu
                                        id="equipItem-menu"
                                        anchorEl={anchorElEquipItem}
                                        open={openEquipItem}
                                        onClose={handleCloseEquipItem}
                                        MenuListProps={{
                                            'aria-labelledby': 'euipItem-button',
                                        }}
                                        PaperProps={{
                                            sx: {
                                                background: "#45103E", color: "white",
                                                border: "1px", borderColor: "purple"
                                            }
                                        }}>
                                        <MenuItem onClick={handleEquipItem}>
                                            <Button sx={{ color: "white" }}>Equip</Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Info />
                                        </MenuItem>
                                        <MenuItem onClick={handleDestroyEquipment}>
                                            <Button sx={{ color: "white" }}>Destroy</Button>
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                            ))}
                        </Grid>
                        {inventoryRows.map((row, idx) => (
                            row.stat > 0 ?
                                <Grid container key={row.name}>
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
                                            }}>
                                            {row.name}
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
                                        }}>
                                        <MenuItem onClick={handleUseItem}>
                                            <Button sx={{ color: "white" }}>Use</Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Info />
                                        </MenuItem>
                                        <MenuItem onClick={handleUseItem}>
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