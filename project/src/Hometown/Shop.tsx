import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

  list = ['HP Potion Stock: 3\n MP Potion Stock: 5 \n Dagger Stock: 6 \n Sword Stock: 3 \n Chestplate Stock: 2 \n Bag of Chips Stock: 2 ' ]
  list2 = ['HP Potion', 'Stock: 3', 'MP Potion', 'Stock: 5', 'Dagger', 'Stock: 6', 'Sword', 'Stock: 3', 'Chestplate', 'Stock: 2', 'Bag of Chips', 'Stock: 2 ' ]
  const myObjArray = [{id: 1, name: "HP Potion", stock: '5', newline: '\n' }, {id: 2, name: "MP Potion", stock: '2',  newline: '\n'}, {id: 3, name: "Sword", stock: '2', newline: '\n'} , {id: 4, name: "Bag of Chips", stock: '3', newline: '\n'}, {id: 5, name: "Mithril Chestplate", stock: '1', newline: '\n'}, {id: 6, name: "Iron Dagger", stock: '10', newline: '\n'}, {id: 7, name: "Amber Necklace", stock: '3', newline: '\n'}];
  function displayArrayInRow(objArray) {
    return (
      <div>
        {objArray.map((obj) => (
          <span key={obj.id} style={containerStyle}>Shop Item: {obj.name} -- Stock: {obj.stock} <Button2>Buy</Button2> {obj.newline}</span>
        ))}
      </div>
    );
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
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
            <div className = "node">
                {displayArrayInRow(myObjArray)}
                </div>
        </div>
      </div>
      
  );
}

export default Shop;