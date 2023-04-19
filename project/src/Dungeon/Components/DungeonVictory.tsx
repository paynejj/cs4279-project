import { Link } from "react-router-dom"
import CDButton from "../../Components/CDButton"
import { PlayerDataContext } from "../../Player/PlayerDataContext"
import { useContext } from "react"

function DungeonVictory() {
    const { playerData } = useContext(PlayerDataContext);

    return (<div className="victory">
        <h1> YOU WIN! CONGRATULATIONS</h1>
        <p> Current Gold: {playerData.gold} </p>
        <Link to="/dungeon-select" children={<CDButton> Level Select</CDButton>} />
        <Link to="/python-dungeon" children={<CDButton> Script it! </CDButton>} />
        <Link to="/hometown" children={<CDButton> Home </CDButton>} />
    </div>)
}

export default DungeonVictory