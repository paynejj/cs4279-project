import { Dungeon } from "../Scripts/Dungeon";
import DungeonMap from "../Components/DungeonMap";

import "./DungeonUI.css"
import { useParams } from "react-router-dom";


function DungeonUI() {
    const { levelname } = useParams()
    const dungeon = new Dungeon(levelname)
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
            <DungeonMap dungeon={dungeon} />
        </div>
    );
}

export default DungeonUI;