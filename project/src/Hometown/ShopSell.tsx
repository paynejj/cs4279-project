import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Item } from "../Object/Item"
import { PlayerDataContext } from "../Player/PlayerDataContext"
import { useQuests } from "../Object/QuestData";
import InfoTooltip from './InfoTooltip';
import CDButton from '../Components/CDButton';
import { Grid } from '@mui/material';
import { sellArt } from './AsciiArts';
import './Shop.css';

const ShopSellScreen: React.FC = () => {
    let inventoryRows: [string, Item][] = [];
    const [inventory, setInvertory] = React.useState(inventoryRows);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const { playerData, setPlayerData } = useContext(PlayerDataContext);
    const { acceptedQuests, progressQuest } = useQuests();
    let bezosQuest = acceptedQuests.find((q) => q.name === "Bezos");

    React.useEffect(() => {
        let tempInventoryRows: [string, Item][] = [];
        if (playerData) {
            playerData.inventory.forEach(
                (item, itemName) => {
                    tempInventoryRows.push([itemName, item])
                }
            );
            setInvertory(tempInventoryRows);
        }
    }, [playerData]);


    const onSell = (items: Item[], totalValue: number) => {
        const newPlayerData = { ...playerData };
        if (newPlayerData) {
            newPlayerData.gold += Math.ceil(totalValue * 0.8);
            const newInventory = new Map(newPlayerData.inventory);
            items.forEach(item => {
                const itemInInventory = newInventory.get(item.name);
                if (itemInInventory) {
                    itemInInventory.amount -= item.amount;
                    if (itemInInventory.amount === 0) {
                        newInventory.delete(item.name);
                    }
                }
            });
            newPlayerData.inventory = newInventory;
            setPlayerData(newPlayerData);
        }
    }

    let navigate = useNavigate();
    const routeChangeTown = () => {
        let path = `/hometown`;
        navigate(path);
    }
    const routeChangeBuy = () => {
        let path = `/shop`;
        navigate(path);
    }

    const handleItemSelect = (item: Item, sellQuantity: number) => {
        const itemIndex = selectedItems.findIndex(selectedItem => selectedItem.name === item.name);
        const inventoryIdx = inventory.findIndex(selectedInv => selectedInv[0] === item.name);
        if (inventory[inventoryIdx][1].amount < sellQuantity) { console.log("HAHA Got U"); return; }
        if (itemIndex === -1) {
            setSelectedItems([...selectedItems, { ...item, amount: sellQuantity }]);
        } else {
            const updatedSelectedItems = [...selectedItems];
            updatedSelectedItems[itemIndex].amount = sellQuantity;
            setSelectedItems(updatedSelectedItems);
        }
        console.log(selectedItems);
    }

    const handleSell = () => {
        if(bezosQuest){
            progressQuest(bezosQuest);
        }
        const totalValue = selectedItems.reduce((acc, item) => acc + item.value * item.amount, 0);
        onSell(selectedItems, totalValue);
        setSelectedItems([]);
    }

    return (
        <div>
            <CDButton onClick={routeChangeTown}>Back</CDButton>
            <CDButton onClick={routeChangeBuy}>To Buy</CDButton>
            <h1 style={{ fontSize: "3.4rem", color: "pink" }}>Sell</h1>
            <h3 style={{ color: "gold" }}>Gold: {playerData.gold}</h3>
            <Grid container>
                <Grid item xs={7}>
                    {inventory.length !== 0 ?
                        <div style={{ overflowX: "auto", maxHeight: "27vw" }}>
                            <table style={{ fontSize: "clamp(25px, 2.3vw, 30px)" }}>
                                <thead>
                                    <tr>
                                        <th>&emsp;Item&emsp;</th>
                                        <th>&emsp;Total&emsp;</th>
                                        <th>&emsp;Price&emsp;</th>
                                        <th>ToSell</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventory.map(idx => (
                                        <tr key={idx[1].name}>
                                            <td>
                                                <InfoTooltip
                                                    name={idx[1].name}
                                                    description={idx[1].item_type} />
                                            </td>
                                            <td>{idx[1].amount}</td>
                                            <td>{idx[1].value}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={idx[1].amount}
                                                    value={selectedItems.find(selectedItem =>
                                                        selectedItem.name === idx[1].name)?.amount || 0}
                                                    onChange={(event) =>
                                                        handleItemSelect(idx[1], Number(event.target.value))} />
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table></div> : <h3>Inventory is empty</h3>}
                    <div>
                        {inventory.length !== 0 ? <CDButton onClick={handleSell}>Sell</CDButton> : null}
                    </div>
                </Grid>
                <Grid item>
                    <b><pre style={{ color: "pink", fontSize: "107%" }}>{sellArt}</pre></b>
                </Grid>
            </Grid>
        </div>
    );
}

export default ShopSellScreen;
