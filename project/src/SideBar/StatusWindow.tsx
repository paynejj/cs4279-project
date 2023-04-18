import Window from "floating-window-ui";
import { useContext, useState, useEffect } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";

function StatusWindow() {

    const { playerData, setPlayerData } = useContext(PlayerDataContext)
    const levelCheck = () => {
        let goldInc = 0
        for (const [name, reward] of Object.entries(playerData.completedLevels)) {
            goldInc += reward
        }
        setTimeout(() => {
            // setPlayerData({...playerData, gold: playerData.gold + goldInc})
            playerData.gold += goldInc;
        }, 1000);
        console.log(playerData.completedLevels)
    }
    levelCheck()
    return (
        <Window
            id="react-window"
            height={350}
            width={250}
            style={{backgroundColor: "black"}}
            resizable={true}
            titleBar={{
                icon: "⚛",
                title: "Status",
                buttons: { minimize: true },
            }}>
            <ul style={{color: "purple", backgroundColor: "black", height: "100%"}}>
                <li><h1>{playerData.name}</h1></li>
                <li>Gold: {playerData.gold}</li>
                {Object.entries(playerData.stats).map(([key, value]) => <li key={key}>{key}: {value}</li>) }
            </ul>
        </Window>
    )
}


export default StatusWindow