import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestType } from '../Object/Quest';
import { useQuests } from '../Object/QuestData';

function Quest() {

  const { acceptQuest, questBoardList, acceptedQuests } = useQuests();
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

  function displayArrayInRow(questList: QuestType[]) {

    return (
      <div>
        {questList.map((quest: QuestType) => (
          <span key={quest.name} style={containerStyle}>Quest Name: {quest.name}&nbsp;
            || &nbsp;Description: {quest.description}
            <Button2
              onClick={() => acceptQuest(quest)}
            >Start</Button2></span>
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
        <h1>QuestBoard</h1>
        <div className="node">
          {displayArrayInRow(questBoardList)}
        </div>
      </div>
    </div>

  );
}

export default Quest;