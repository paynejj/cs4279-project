import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Quest() {
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
const myObjArray = [{id: 1, name: "Tutorial Quest", stock: 'Very Easy\n', newline: '\n' }, {id: 2, name: "Slime Hunting", stock: 'Easy',  newline: '\n'}, {id: 3, name: "Equiping a Weapon", stock: 'Easy', newline: '\n'}, {id: 4, name: "Fight 5 Monsters in a row", stock: 'Medium', newline: '\n'}, {id: 5, name: "Stay in Rest area for 5 hours", stock: 'Easy', newline: '\n'}];
  function displayArrayInRow(objArray) {
    return (
      <div>
        {objArray.map((obj) => (
          <span key={obj.id} style={containerStyle}>Shop Item: {obj.name} || Difficulty: {obj.stock} <Button2>Start</Button2> {obj.newline}</span>
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

export default Quest;