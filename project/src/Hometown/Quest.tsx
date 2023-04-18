import { useNavigate } from "react-router-dom";
import { QuestType } from '../Object/Quest';
import { useQuests } from '../Object/QuestData';
import { Grid } from '@mui/material';
import CDButton from "../Components/CDButton";
import { useContext, useEffect, useState } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { mageQuestArt, warriorQuestArt, rangerQuestArt } from "./AsciiArts";

function Quest() {
  const { acceptQuest, questBoardList, acceptedQuests } = useQuests();
  const [displayingQuests, setDisplayingQuests] = useState<QuestType[]>([]);
  const { playerData } = useContext(PlayerDataContext)
  const [art, setArt] = useState("");
  const [playerClass, setPlayerClass] = useState(playerData.class);


  useEffect(() => {
    if (playerClass === "Mage") {
      setArt(mageQuestArt);
    } else if (playerClass === "Warrior") {
      setArt(warriorQuestArt);
    } else if (playerClass === "Ranger") {
      setArt(rangerQuestArt);
    }
  }, [playerClass]);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  // randomly get numOfQuests of all quests from questBoardList and put them in a new array
  function getQuests() {

    let newQuests: QuestType[] = [];
    // number of quests to be displayed on the quest board
    let numOfQuests = 5;
    let i = 0;
    let timeOut = 0;
    while (i < numOfQuests && timeOut < 50) {
      let randomIndex = Math.floor(Math.random() * questBoardList.length);
      let randomQuest = questBoardList[randomIndex];
      if (!newQuests.includes(randomQuest) && !acceptedQuests.includes(randomQuest)) {
        newQuests.push(randomQuest);
        ++i;
      }
      ++timeOut;
    }
    return newQuests;
  }

  function startQuest(quest: QuestType) {
    acceptQuest(quest);
    let newDisplayingQuests = [...displayingQuests];
    newDisplayingQuests.splice(newDisplayingQuests.indexOf(quest), 1);
    setDisplayingQuests(newDisplayingQuests);
  }

  useEffect(() => {
    let newQuests = getQuests();
    setDisplayingQuests(newQuests);
  }, []);


  function displayArrayInRow(questList: QuestType[]) {

    return (
      <Grid container>
        <Grid item xs={9.5}>
          <div style={{ display: "table", minWidth: "300px", width: "60vw", maxWidth: "800px" }}>
            {questList.length !== 0 ?
              questList.map((quest: QuestType) => (quest ?
                <h3 key={quest.name} style={containerStyle}>&nbsp;{quest.name}&nbsp;
                  ----- &nbsp;{quest.description}
                  <CDButton
                    onClick={() => startQuest(quest)}
                  >Start</CDButton></h3> : <h2>No Quests Available</h2>)) : <h2>No Quests Available</h2>}
          </div>
        </Grid >
        <Grid item><b><pre style={{ color: "pink" }}>{art}</pre></b></Grid>
      </Grid >
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
      <CDButton onClick={routeChange}>Back</CDButton>
      <div className="shop-list">
        <h1 style={{ fontSize: "3rem", color: "pink" }}>QuestBoard</h1>
        <span className="node">
          {displayArrayInRow(displayingQuests)}
        </span>
      </div>
    </div>
  );
}

export default Quest;