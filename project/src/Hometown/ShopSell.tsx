import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Item } from "../Object/Item"
import { PlayerDataContext } from "../Player/PlayerDataContext"
import InfoTooltip from './InfoTooltip';
import styled from "styled-components";
import './Shop.css';

const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 10px;
margin: 20px 0px;
cursor: pointer;
`;

const ShopSellScreen: React.FC = () => {
    let inventoryRows: [string, Item][] = [];
    const [inventory, setInvertory] = React.useState(inventoryRows);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const { playerData, setPlayerData } = useContext(PlayerDataContext);


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
    const routeChange = () => {
        let path = `/shop`;
        navigate(path);
    }

    const handleItemSelect = (item: Item, sellQuantity: number) => {
        const itemIndex = selectedItems.findIndex(selectedItem => selectedItem.name === item.name);
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
        const totalValue = selectedItems.reduce((acc, item) => acc + item.value * item.amount, 0);
        onSell(selectedItems, totalValue);
        setSelectedItems([]);
    }

    return (
        <div>
            <Button onClick={routeChange}>To Buy</Button>
            <h1>Sell</h1>
            <p>Gold: {playerData.gold}</p>
            {inventory.length !== 0 ?
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Info</th>
                        <th>ToSell</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(idx => (
                        <tr key={idx[1].name}>
                            <td>{idx[1].name}</td>
                            <td>{idx[1].value}</td>
                            <td>{idx[1].amount}</td>
                            <InfoTooltip
                                name={idx[1].name}
                                description={idx[1].item_type}
                            />
                            <td>
                                <input type="number" min={0} max={idx[1].amount} value={selectedItems.find(selectedItem => selectedItem.name === idx[1].name)?.amount || 0} onChange={(event) => handleItemSelect(idx[1], Number(event.target.value))} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table> : <p>Inventory is empty</p>}
            <div>
                <button onClick={handleSell} disabled={!selectedItems.length}>Sell</button>
            </div>
        </div>
    );
}

export default ShopSellScreen;
