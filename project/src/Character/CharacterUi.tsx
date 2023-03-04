import React from 'react';
import { Grid, Tooltip, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ShieldIcon from '@mui/icons-material/Shield';
import Info from './Info';
import StatsRow from './Stats';
import './Character.css';
import {
    equipInventoryRows, inventoryRows,
    equipRows, sortDescription, itemAlphabeticalSort, equipAlphabeticalSort
} from './InventoryTools'

export default function CharacterUi() {
    const [equipments, setEquipments] = React.useState(equipRows);
    const [inventory, setInvertories] = React.useState(inventoryRows);
    const [equipInventory, setEquipInvertories] = React.useState(equipInventoryRows);
    const [anchorElItem, setAnchorElItem] = React.useState<null | HTMLElement>(null);
    const [anchorElEquip, setAnchorElEquip] = React.useState<null | HTMLElement>(null);
    const [anchorElEquipItem, setAnchorElEquipItem] = React.useState<null | HTMLElement>(null);
    const [itemMenuIdx, setItemMenuIdx] = React.useState(0);
    const [equipInventoryMenuIdx, setEquipInventoryMenuIdx] = React.useState(0);
    const [equipMenuIdx, setEquipMenuIdx] = React.useState(0);
    const [inventoryCount, setInventoryCount] =
        React.useState(equipInventory.length + inventory.length);

    const openItem = Boolean(anchorElItem);
    const openEquipItem = Boolean(anchorElEquipItem);
    const openEquip = Boolean(anchorElEquip);

    // open a dropdown menu when clicking an item in the inventory
    const handleClickItem = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setItemMenuIdx(idx);
        setAnchorElItem(event.currentTarget);
    };

    // close the dropdown menu of an item when click outside ofthe menu 
    // or clicked one of the menuitems
    const handleCloseItem = () => {
        setAnchorElItem(null);
    };

    // handle "USE" clicked in an item's menu
    const handleUseItem = () => {
        let newInventory = inventory;
        newInventory[itemMenuIdx][1] -= 1;
        if (newInventory[itemMenuIdx][1] === 0) {
            setInventoryCount(inventoryCount - 1);
        }
        setInvertories(newInventory);
        setAnchorElItem(null);
    };

    // open the dropdown menu for an equipment in the inventory
    const handleClickEquipItem = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setEquipInventoryMenuIdx(idx);
        setAnchorElEquipItem(event.currentTarget);
    };

    // close the dropdown menu for an equipment in the inventory
    const handleCloseEquipItem = () => {
        setAnchorElEquipItem(null);
    };

    // handle "EQUIP" clicked in an equipment in the inventory
    const handleEquipItem = () => {
        let newEquipments = equipments;
        let newEquipInventory = equipInventory;
        let idx = -1;

        if (equipInventory[equipInventoryMenuIdx][0] === "Helmet") { idx = 0; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Chestplate") { idx = 1; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Boots") { idx = 2; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Chausses") { idx = 3; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Weapon") { idx = 4; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Ring1") { idx = 5; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Ring2") { idx = 6; }
        else if (equipInventory[equipInventoryMenuIdx][0] === "Amulet") { idx = 7; }
        else { return; }

        let temp = equipments[idx][1];
        equipments[idx][1] = equipInventory[equipInventoryMenuIdx][1];
        equipInventory[equipInventoryMenuIdx][1] = temp;

        if (equipInventory[equipInventoryMenuIdx][1] === "NOTHING") {
            newEquipInventory.splice(equipInventoryMenuIdx, 1);
            setInventoryCount(inventoryCount - 1);
        }

        setEquipments(newEquipments);
        setEquipInvertories(newEquipInventory);
        setAnchorElEquipItem(null);
    };

    // handle "DESTROY" of an equipment in the inventory
    const handleDestroyEquipment = () => {
        let newEquipInventory = equipInventory;
        newEquipInventory.splice(equipInventoryMenuIdx, 1);
        console.log(newEquipInventory);
        setEquipInvertories(newEquipInventory);
        setInventoryCount(inventoryCount - 1);
        setAnchorElEquipItem(null);
    };

    // handle "UNEQUIP" of a currently wearing equipment
    const handleUnequip = () => {
        let newEquipments = equipments;
        let newEquipInventory = equipInventory;
        newEquipInventory.unshift([
            equipments[equipMenuIdx][0],
            equipments[equipMenuIdx][1],
        ]);
        newEquipments[equipMenuIdx][1] = "NOTHING";
        setEquipments(newEquipments);
        setEquipInvertories(newEquipInventory);
        setInventoryCount(inventoryCount + 1);
        setAnchorElEquip(null);
    };


    // handle sort icon clicked in the inventory
    const handleSort = () => {
        let newInventory = inventory;
        let newEquipInventory = equipInventory;
        newInventory.sort(itemAlphabeticalSort);
        newEquipInventory.sort(equipAlphabeticalSort);
        setEquipInvertories(newEquipInventory);
        setInvertories(newInventory);
        if (itemMenuIdx === -1) {
            setItemMenuIdx(0);
        } else {
            setItemMenuIdx(-1);
        }
    };

    // handle clicking on a currently wearing equipment. It opens a dropdown menu
    const handleClickEquip = (event: React.MouseEvent<HTMLButtonElement>, idx) => {
        setEquipMenuIdx(idx);
        setAnchorElEquip(event.currentTarget);
    };
    // Close the dropdown menu for a currently wearing equipment
    const handleCloseEquip = () => {
        setAnchorElEquip(null);
    };

    return (
        <div>
            <Box m={2}>
                <Typography variant="h4" fontWeight='bold'>VandySquirrel59</Typography>
                <Typography variant="h5" fontStyle='italic'>Sorcerer</Typography>
            </Box>

            <Grid container alignItems="stretch">
                <StatsRow />

                <Box sx={{
                    border: 1,
                    minWidth: "180px",
                    width: "18vw",
                    borderColor: 'secondary.main',
                    m: 1
                }}>
                    <Typography variant="h6">Equipments</Typography>
                    {equipRows.map((row, idx) => (
                        <Grid container key={row[0]}>
                            <Grid item xs={4}> {row[0]}: </Grid>
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
                                    {row[1]}
                                </Button>
                            </Grid>
                            {equipments[equipMenuIdx][1] === "NOTHING" ?
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
                        <Grid item xs={1}>
                            <Tooltip title={sortDescription} disableInteractive>
                                <Button color="inherit" size='small' onClick={handleSort}>
                                    <SortIcon />
                                </Button>
                            </Tooltip>
                        </Grid>
                    </ Grid>

                    <Grid container height="270px" sx={{ overflow: "hidden", overflowY: "auto" }}>
                        <Grid item>
                            {equipInventoryRows.map((row, idx) => (
                                <Grid container key={row[1]}>
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
                                            <ShieldIcon />{row[1]}
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
                                            <Button
                                                sx={{ color: "white" }}
                                            >Equip</Button>
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
                            row[1] > 0 ?
                                <Grid container key={row[0]}>
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
                                            {row[0]}
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
                                    <Grid item sm={1} textAlign="right"> {row[1]}</Grid>
                                </Grid>
                                : <div></div>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}