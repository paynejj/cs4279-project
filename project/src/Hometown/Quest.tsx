import { useNavigate } from "react-router-dom";
import { QuestType } from '../Object/Quest';
import { useQuests } from '../Object/QuestData';
import { Typography } from '@mui/material';
import CDButton from "../Components/CDButton";

function Quest() {
  const { acceptQuest, questBoardList, acceptedQuests } = useQuests();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  // randomly get two of all quests from questBoardList and put them in a new array
  function getTwoQuests() {
    let newQuests: QuestType[] = [];
    // number of quests to be displayed on the quest board
    let i = 0;
    let timeOut = 0;
    while (i < 2 && timeOut < 50) {
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
  let selectedQuested = getTwoQuests();


  function displayArrayInRow(questList: QuestType[]) {

    return (
      <div style={{ display: "table", minWidth: "300px", width: "60vw", maxWidth: "800px" }}>
        {questList.map((quest: QuestType) => (quest ?
          <h3 key={quest.name} style={containerStyle}>&nbsp;{quest.name}&nbsp;
            ----- &nbsp;{quest.description}
            <CDButton
              onClick={() => acceptQuest(quest)}
            >Start</CDButton></h3>
          : <h2>No Quests Available</h2>))}
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
      <CDButton onClick={routeChange}>Back</CDButton>
      <div className="shop-list">
        <h1 style={{ fontSize: "3rem", color: "pink" }}>QuestBoard</h1>
        <div className="node">
          {displayArrayInRow(selectedQuested)}
        </div>
      </div>
    </div>

  );
}

export default Quest;