import React from 'react';
import { Grid, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import ScienceIcon from '@mui/icons-material/Science';
import Info from './Info';
import StatsRow from './Stats';
import { PlayerDataContext } from '../Player/PlayerDataContext';
import './Character.css';
import { Equipment, EquipmentType } from '../Object/Equipment';
import { Item } from '../Object/Item';
import { useQuests } from '../Object/QuestData';

export default function CharacterUi() {
    const { playerData, setPlayerData } = React.useContext(PlayerDataContext);

    const { acceptedQuests } = useQuests();

    let equipRows: [EquipmentType, Equipment][] = [];
    let inventoryRows: [string, Item][] = [];
    let equipInventoryRows: [string, Item][] = [];
    const [equipments, setEquipments] = React.useState(equipRows);
    const [equipInventory, setEquipInvertory] = React.useState(equipInventoryRows);
    const [inventory, setInvertory] = React.useState(inventoryRows);
    const [anchorElPotion, setAnchorElPotion] = React.useState<null | HTMLElement>(null);
    const [anchorElEquip, setAnchorElEquip] = React.useState<null | HTMLElement>(null);
    const [anchorElEquipItem, setAnchorElEquipItem] = React.useState<null | HTMLElement>(null);
    const [PotionMenuIdx, setPotionMenuIdx] = React.useState(0);
    const [equipInventoryMenuIdx, setEquipInventoryMenuIdx] = React.useState(0);
    const [equipMenuIdx, setEquipMenuIdx] = React.useState(0);
    const [inventoryCount, setInventoryCount] = React.useState(0);

    const openPotion = Boolean(anchorElPotion);
    const openEquipItem = Boolean(anchorElEquipItem);
    const openEquip = Boolean(anchorElEquip);

    React.useEffect(() => {
        let weaponQuest = acceptedQuests.find((quest) => quest.name === "WEAPON");
        let tempInventoryRows: [string, Item][] = [];
        let tempEquipInventoryRows: [string, Item][] = [];
        let tempEquipRows: [EquipmentType, Equipment][] = [];
        if (playerData) {
            playerData.equipments.forEach(
                (equipment, equipmentType) => { tempEquipRows.push([equipmentType, equipment]) }
            );

            // for the WEAPON quest, if the player is equipping a weapon, 
            // set the itemCollected to 1
            if (weaponQuest &&
                typeof weaponQuest.itemCollected === "number" &&
                weaponQuest.itemCollected < 1) {
                let currentWeapon = playerData.equipments.get(EquipmentType.Weapon)
                if (currentWeapon && currentWeapon[0] !== "NOTHING") {
                    weaponQuest.itemCollected = 1;
                }
            }

            playerData.inventory.forEach(
                (item, itemName) => {
                    if (typeof item.item_type[1] === 'number') {
                        tempInventoryRows.push([itemName, item])
                    } else {
                        tempEquipInventoryRows.push([itemName, item])
                    }

                }
            );
            setEquipments(tempEquipRows);
            setInvertory(tempInventoryRows);
            setEquipInvertory(tempEquipInventoryRows);
            setInventoryCount(tempInventoryRows.length + tempEquipInventoryRows.length);
        }
    }, [playerData, inventoryCount]);

    // open a dropdown menu when clicking an item in the inventory
    const handleClickPotion = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
        setPotionMenuIdx(idx);
        setAnchorElPotion(event.currentTarget);
    };

    // close the dropdown menu of an item when click outside ofthe menu 
    // or clicked one of the menuitems
    const handleClosePotion = () => {
        setAnchorElPotion(null);
    };

    // handle "USE" clicked in an potion's menu
    const handleUsePotion = () => {
        let newPlayerData = { ...playerData };
        let potionToUse = newPlayerData.inventory.get(inventory[PotionMenuIdx][0]);
        if (potionToUse && typeof potionToUse.item_type[1] === "number" && potionToUse.amount > 0) {
            potionToUse.amount -= 1;
            if (potionToUse.amount <= 0) {
                newPlayerData.inventory.delete(potionToUse.name);
            } else {
                newPlayerData.inventory.set(potionToUse.name, potionToUse);
            }
            if (potionToUse.item_type[0] === "HP" && newPlayerData.stats.HP < newPlayerData.stats.MaxHP) {
                newPlayerData.stats.HP += potionToUse.item_type[1];
            } else if (newPlayerData.stats.MP < newPlayerData.stats.MaxMP) {
                newPlayerData.stats.MP += potionToUse.item_type[1];
            }
        }
        setPlayerData(newPlayerData);
        setAnchorElPotion(null);
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
        let newPlayerData = { ...playerData };
        let equipmentToEquip = newPlayerData.inventory.get(
            equipInventory[equipInventoryMenuIdx][0]);
        if (equipmentToEquip && typeof equipmentToEquip.item_type[1] !== "number") {
            if (newPlayerData.equipments.has(equipmentToEquip.item_type[1].equipmentType)) {
                let oldEquipment =
                    newPlayerData.equipments.get(equipmentToEquip.item_type[1].equipmentType);
                if (oldEquipment && oldEquipment[0] !== "NOTHING") {
                    let oldEquipmentItem = newPlayerData.inventory.get(oldEquipment[0])
                    if (oldEquipmentItem) {
                        oldEquipmentItem.amount += 1;
                    } else {
                        let oldEquipmentItem = {
                            name: oldEquipment[0],
                            value: 1,
                            amount: 1,
                            item_type: oldEquipment,
                        }
                        newPlayerData.inventory.set(oldEquipment[0], oldEquipmentItem);
                    }
                    for (const key in oldEquipment[1]) {
                        if (typeof oldEquipment[1][key] === "number") {
                            newPlayerData.stats[key] -= oldEquipment[1][key];
                        }
                    }
                }

            }
            newPlayerData.equipments.set(equipmentToEquip.item_type[1].equipmentType,
                [equipmentToEquip.name, equipmentToEquip.item_type[1]]);

            for (const key in equipmentToEquip.item_type[1]) {
                if (typeof equipmentToEquip.item_type[1][key] === "number") {
                    newPlayerData.stats[key] += equipmentToEquip.item_type[1][key];
                }
            }
            equipmentToEquip.amount -= 1;
            if (equipmentToEquip.amount <= 0) {
                newPlayerData.inventory.delete(equipmentToEquip.name);
            } else {
                newPlayerData.inventory.set(equipmentToEquip.name, equipmentToEquip);
            }
        }
        setEquipInventoryMenuIdx(-1);
        setPlayerData(newPlayerData);
        setAnchorElEquipItem(null);
    };

    // handle "DESTROY" of an equipment in the inventory
    const handleDestroyEquipment = () => {
        let newPlayerData = { ...playerData };
        let equipmentToDestroy = newPlayerData.inventory.get(
            equipInventory[equipInventoryMenuIdx][0]);
        if (equipmentToDestroy && typeof equipmentToDestroy.item_type[1] !== "number") {
            equipmentToDestroy.amount -= 1;
            if (equipmentToDestroy.amount <= 0) {
                newPlayerData.inventory.delete(equipmentToDestroy.name);
            } else {
                newPlayerData.inventory.set(equipmentToDestroy.name, equipmentToDestroy);
            }
        }
        setPlayerData(newPlayerData);
        setAnchorElEquipItem(null);
    };

    // handle "UNEQUIP" of a currently wearing equipment
    const handleUnequip = () => {
        let newPlayerData = { ...playerData };
        let toUnequip = newPlayerData.equipments.get(
            equipments[equipMenuIdx][0]);
        if (toUnequip) {
            if (newPlayerData.inventory.has(toUnequip[0])) {
                let oldEquipmentItem = newPlayerData.inventory.get(toUnequip[0])
                if (oldEquipmentItem) {
                    oldEquipmentItem.amount += 1;
                } else {
                    let oldEquipmentItem = {
                        name: toUnequip[0],
                        value: 1,
                        amount: 1,
                        item_type: toUnequip,
                    }
                    newPlayerData.inventory.set(toUnequip[0], oldEquipmentItem);
                }
            } else {
                let oldEquipmentItem = {
                    name: toUnequip[0],
                    value: 1,
                    amount: 1,
                    item_type: toUnequip,
                }
                newPlayerData.inventory.set(toUnequip[0], oldEquipmentItem);
            }
            for (const key in toUnequip[1]) {
                if (typeof toUnequip[1][key] === "number") {
                    newPlayerData.stats[key] -= toUnequip[1][key];
                }
            }
            newPlayerData.equipments.set(toUnequip[1].equipmentType,
                ['NOTHING', { equipmentType: toUnequip[1].equipmentType }]);
        }

        setPlayerData(newPlayerData);
        setAnchorElEquip(null);
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
                <Typography variant="h4" fontWeight='bold'>{playerData?.name}</Typography>
                <Typography variant="h5" fontStyle='italic'>{playerData?.class}</Typography>
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
                    {equipments.map((row, idx) => (
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
                                        cursor: "pointer",
                                    }}>
                                    {row[1][0]}
                                </Button>
                                {equipments[equipMenuIdx][1][0] === "NOTHING" ?
                                    <div></div> :
                                    <div>
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
                                                <Info
                                                    name={equipments[equipMenuIdx][1][0]}
                                                    description={equipments[equipMenuIdx][1]} />
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    ))}
                </Box>
                <Box minWidth="200px" width="25vw" maxWidth="270px" m={1}>
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            <Typography variant="h6">&nbsp;&nbsp;INVENTORY</Typography>
                        </Grid>
                        <Grid item xs={2} textAlign="right">
                            <Typography fontSize={15}>{inventoryCount}/20</Typography>
                        </Grid>
                    </ Grid>
                    <Grid container maxHeight="270px" sx={{ overflow: "hidden", overflowY: "auto" }}>
                        {equipInventory.map((row, idx) => (
                            <Grid container key={row[1].name}>
                                <Grid item sm={11}>
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
                                        <ShieldIcon />{row[1].name}
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
                                        {equipInventory[equipInventoryMenuIdx] !== undefined ?
                                            <Info
                                                name=
                                                {equipInventory[equipInventoryMenuIdx][1].name}
                                                description=
                                                {equipInventory[equipInventoryMenuIdx][1].item_type} /> :
                                            <div></div>}
                                    </MenuItem>
                                    <MenuItem onClick={handleDestroyEquipment}>
                                        <Button sx={{ color: "white" }}>Destroy</Button>
                                    </MenuItem>
                                </Menu>
                                <Grid item sm={1} textAlign="right"> {row[1].amount}</Grid>
                            </Grid>
                        ))}

                        {inventory.map((row, idx) => (
                            row[1].amount > 0 ?
                                <Grid container key={row[1].name}>
                                    <Grid item sm={11}>
                                        <Button
                                            aria-controls={openPotion ? 'item-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openPotion ? 'true' : undefined}
                                            onClick={(e) => handleClickPotion(e, idx)}
                                            sx={{
                                                color: "pink",
                                                ':hover': {
                                                    bgcolor: 'purple',
                                                    color: 'black',
                                                },
                                            }}>
                                            <ScienceIcon />{row[1].name}
                                        </Button>
                                    </Grid>
                                    <Menu
                                        id="item-menu"
                                        anchorEl={anchorElPotion}
                                        open={openPotion}
                                        onClose={handleClosePotion}
                                        MenuListProps={{
                                            'aria-labelledby': 'item-button',
                                        }}
                                        PaperProps={{
                                            sx: {
                                                background: "#45103E", color: "white",
                                                border: "1px", borderColor: "purple"
                                            }
                                        }}>
                                        <MenuItem onClick={handleUsePotion}>
                                            <Button sx={{ color: "white" }}>Use</Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Info
                                                name={inventory[PotionMenuIdx][1].name}
                                                description={inventory[PotionMenuIdx][1].item_type} />
                                        </MenuItem>
                                    </Menu>
                                    <Grid item sm={1} textAlign="right"> {row[1].amount}</Grid>
                                </Grid>
                                : <div></div>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}