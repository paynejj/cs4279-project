import Window from "floating-window-ui";
import { useContext, useEffect, useState } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";

function StatusWindow() {

    const { playerData, setPlayerData } = useContext(PlayerDataContext)
    const [time, setTime] = useState(0);

    useEffect(() => {
        let goldInc = 0
        for (const [name, reward] of Object.entries(playerData.completedLevels)) {
            goldInc += reward
        }
        // But yeah then it has the re-render problem when doing the visual
        // dungeon maze.
        // For that problem I would put the winning screen in a separate component with a
        // unique path.
        //I move the setplayerdata out of the timeout to avoid it saving the old,
        //not updated playerdata
        const timeout = setTimeout(() => {
            setTime(time => time + 1);
        }, 1000);
        // check if playerData is still the default (I set the default name to "" now)
        // only setplayerdata if a save is loaded or a player is created
        if (playerData.name !== "") {
            setPlayerData({ ...playerData, gold: playerData.gold + goldInc })
            console.log(playerData.completedLevels)
        }
        // I double checked online that clearTimeout or clearinterval can prevent
        // memory leaks if the component unmounts before the timeout is done
        // not exactly sure how it works under the hood.
        return () => { clearTimeout(timeout) };
    }, [time])

    return (
        <Window
            id="react-window"
            height={340}
            width={230}
            left={1030}
            style={{ backgroundColor: "black", overflow: "hidden" }}
            resizable={true}
            titleBar={{
                icon: " ",
                title: "Status",
                buttons: { minimize: true },
            }}>
            <ul style={{ color: "purple", backgroundColor: "black", height: "100%", maxWidth: "50%" }}>
                <li><h1>{playerData.name}</h1></li>
                <li>Gold: {playerData.gold}</li>
                {Object.entries(playerData.stats).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
            </ul>
        </Window>
    )
}


export default StatusWindow
