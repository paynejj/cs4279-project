import React from "react";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../Object/Shop";
import { Item } from "../Object/Item"
import { PlayerDataContext } from "../Player/PlayerDataContext"
import { shopData } from "./ShopHelper"
import InfoTooltip from './InfoTooltip';
import CDButton from "../Components/CDButton";
import './Shop.css';

function Shop() {
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
      <table style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>&emsp;Stock&emsp;</th>
            <th>&emsp;Price&emsp;</th>
          </tr>
        </thead>
        <tbody>
          {objArray.map((obj) => (
            <tr key={obj.name}>
              <td><InfoTooltip name={obj.name} description={obj.item_type} /></td>
              <td>&emsp;{obj.amount}&emsp;</td>
              <td>&emsp;${obj.value}&emsp;</td>
              <td>
                {obj.amount > 0 ? (
                  <CDButton onClick={() => buyItem(obj, 1)}>Buy</CDButton>
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
  const routeChangeTown = () => {
    let path = `/hometown`;
    navigate(path);
  }
  const routeChangeSell = () => {
    let path = `/sell`;
    navigate(path);
  }

  return (
    <div
      className="Hometown"
      style={{ flexDirection: "column", height: "100%" }}>
      <CDButton onClick={routeChangeTown}>Back</CDButton>
      <CDButton onClick={routeChangeSell}>To Sell</CDButton>
      <div className="shop-list">
        <h1 style={{ fontSize: "3rem", color: "pink" }}>Shop</h1>
        <h3 style={{ color: "gold" }}>Gold: {playerData.gold}</h3>
        <div className="node">
          {displayArrayInTable(shopStockArray)}
        </div>
      </div>
    </div>

  );
}

export default Shop;