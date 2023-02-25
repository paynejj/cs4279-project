import { Dungeon } from "../Scripts/Dungeon";
import DungeonMap from "../Components/DungeonMap";

import "./DungeonUI.css"


function DungeonUI() {
    const dungeon = new Dungeon()
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
            <DungeonMap dungeon={dungeon} />
            <div className="bottom-bar">
                <button className="choice-button"> Choice 1</button>
                <button className="choice-button"> Choice 2</button>
                <button className="choice-button"> Choice 3</button>
            </div>
        </div>
    );
}

export default DungeonUI;