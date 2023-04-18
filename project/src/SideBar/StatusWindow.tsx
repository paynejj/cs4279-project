import Window from "floating-window-ui";
import { useContext } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { purple } from "@mui/material/colors";

function StatusWindow() {

    const { playerData, setPlayerData } = useContext(PlayerDataContext)
    return (
        <Window
            id="react-window"
            height={300}
            width={300}
            style={{backgroundColor: "black"}}
            resizable={true}
            titleBar={{
                icon: "⚛",
                title: "Status",
                buttons: { minimize: true },
            }}>
            <ul style={{color: purple[500], backgroundColor: "black", height: "100%"}}>
                <li><h1>{playerData.name}</h1></li>
                <li>Gold: {playerData.gold}</li>
                {Object.entries(playerData.stats).map((e) => <li key={e[0]}>{e[0]}: {e[1]}</li>) }
            </ul>
        </Window>
    )
}


export default StatusWindow