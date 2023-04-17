import Window from "floating-window-ui";
import { useContext } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";

function StatusWindow() {

    const {playerData, setPlayerData} = useContext(PlayerDataContext)
    return (
        <Window
            id="react-window"
            height={200}
            width={150}
            resizable={true}
            titleBar={{
                icon: "⚛",
                title: "Status",
                buttons: { minimize: true },
            }}>
                <p> {JSON.stringify(playerData)}</p>
        </Window>
    )
}


export default StatusWindow