import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../Object/Shop";
import { Item } from "../Object/Item"
import { PlayerDataContext } from "../Player/PlayerDataContext"
import { shopData } from "./ShopHelper"
import InfoTooltip from './InfoTooltip';
import './Shop.css';

function Shop() {

  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 10px;
  margin: 20px 0px;
  cursor: pointer;
`;
  const Button2 = styled.button`
background-color: black;
color: white;
font-size: 10px;
padding: 10px 60px;
border-radius: 10px;
margin: 5px 0px;
cursor: pointer;
textAlign: 'right'
`;
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  function getRandomShopItem() {
    let selectedShopItems: ShopData = [];
    // number of item to be displayed in the shop
    let i = 2
    let selectedIndices: Number[] = [];
    while (selectedIndices.length < i) {
      let randomIndex = Math.floor(Math.random() * shopData.length);

      if (!selectedIndices.includes(randomIndex)) {

        selectedIndices.push(randomIndex);
        let randomQuest = shopData[randomIndex];
        // make a hard copy
        selectedShopItems.push(JSON.parse(JSON.stringify(randomQuest)));
      }
    }
    return selectedShopItems;
  }



  let selectedShopItems = getRandomShopItem();

  const [shopStockArray, setShopStockArray] = React.useState<ShopData>(selectedShopItems);
  const { playerData, setPlayerData } = React.useContext(PlayerDataContext);

  function buyItem(item: Item, amount: number) {
    const newPlayerData = { ...playerData };
    if (newPlayerData) {
      if (newPlayerData.gold >= item.value * amount) {
        newPlayerData.gold -= item.value * amount;
        let newShopStockArray = [...shopStockArray];
        let soldItem = newShopStockArray.find((i) => i.name === item.name);
        if (soldItem && soldItem.amount >= amount) {
          soldItem.amount -= amount;
          setShopStockArray(newShopStockArray);
        }

        if (newPlayerData.inventory !== undefined) {
          let newItem = newPlayerData.inventory.get(item.name);

          if (newItem) {
            newItem.amount += amount;
          } else {
            newItem = { ...item };
            newItem.amount = amount;
          }
          newPlayerData.inventory.set(item.name, newItem);
          setPlayerData(newPlayerData);

        }
      }
    }
  }

  function displayArrayInTable(objArray: ShopData) {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {objArray.map((obj) => (
            <tr key={obj.name}>
              <td><InfoTooltip name={obj.name} description={obj.item_type} /></td>
              <td>{obj.name}</td>
              <td>{obj.amount}</td>
              <td>${obj.value}</td>
              <td>
                {obj.amount > 0 ? (
                  <Button2 onClick={() => buyItem(obj, 1)}>Buy</Button2>
                ) : (
                  <span></span>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hometown`;
    navigate(path);
  }
  const routeChange2 = () => {
    let path = `/sell`;
    navigate(path);
  }

  return (
    <div
      className="Hometown"
      style={{ flexDirection: "column", height: "100%" }}
    >
      <Button onClick={routeChange}>Back</Button>
      <Button onClick={routeChange2}>To Sell</Button>
      <div className="shop-list">
        <h1>Shop</h1>
        <div className="node">
          {displayArrayInTable(shopStockArray)}
        </div>
      </div>
    </div>

  );
}

export default Shop;