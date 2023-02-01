import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import './Shop.css';
function Shop() {
  let list: Array<string>;
  list = ['HP Potion Stock: 3\n MP Potion Stock: 5 \n Dagger Stock: 6 \n Sword Stock: 3 \n Chestplate Stock: 2 \n Bag of Chips Stock: 2 ' ]
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 10px;
    margin: 20px 0px;
    cursor: pointer;
  `;
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
                <h3>{list} </h3>
                </div>
        </div>
      </div>
      
  );
}

export default Shop;