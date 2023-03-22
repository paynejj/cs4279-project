import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../Object/Shop";
import { Item } from "../Object/Item"
import { PlayerDataContext } from "../Player/PlayerDataContext"
import { shopData } from "./ShopHelper"



import './Shop.css';
function Shop() {
  let list: Array<string>;
  let list2: Array<string>;
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




  list = ['HP Potion Stock: 3\n MP Potion Stock: 5 \n Dagger Stock: 6 \n Sword Stock: 3 \n Chestplate Stock: 2 \n Bag of Chips Stock: 2 ']
  list2 = ['HP Potion', 'Stock: 3', 'MP Potion', 'Stock: 5', 'Dagger', 'Stock: 6', 'Sword', 'Stock: 3', 'Chestplate', 'Stock: 2', 'Bag of Chips', 'Stock: 2 ']

  const myObjArray = [{ id: 0, name: "HP Potion", stock: '5', newline: '\n' },
  { id: 1, name: "MP Potion", stock: '2', newline: '\n' },
  { id: 2, name: "Sword", stock: '2', newline: '\n' },
  { id: 3, name: "Bag of Chips", stock: '3', newline: '\n' },
  { id: 4, name: "Mithril Chestplate", stock: '1', newline: '\n' },
  { id: 5, name: "Iron Dagger", stock: '10', newline: '\n' },
  { id: 6, name: "Amber Necklace", stock: '3', newline: '\n' }];

  const [shopStockArray, setShopStockArray] = React.useState<ShopData>(shopData);


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

  function displayArrayInRow(objArray: ShopData) {

    return (
      <div>
        {objArray.map((obj) => (
          <span key={obj.name} style={containerStyle}>Shop Item: {obj.name} -- Stock: {obj.amount}
            {obj.amount > 0 ?
              <Button2
                onClick={() => buyItem(obj, 1)}
              >Buy</Button2> : <span></span>}
          </span>
        ))}
      </div>
    );
  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hometown`;
    navigate(path);
  }

  return (
    <div
      className="Hometown"
      style={{ flexDirection: "column", height: "100%" }}
    >
      <Button onClick={routeChange}>Back</Button>

      <div className="shop-list">
        <h1>Shop</h1>
        <div className="node">
          {displayArrayInRow(shopStockArray)}
        </div>
      </div>
    </div>

  );
}

export default Shop;