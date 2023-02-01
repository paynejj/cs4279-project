import { useState } from "react";
import { Dungeon } from "./Dungeon";
import "./DungeonUI.css"

function DungeonMap() {
    const [dungeon, setDungeon] = useState(new Dungeon())
    const [dungeonMap, setDungeonMap] = useState(dungeon.generate())
    console.log(dungeonMap)
    return (
        <div className="dungeon-map">
            {dungeonMap.flatMap((row,i) => row.map((node, j) =>
                <div className='dungeon-node' key={(i*dungeon.rows) + j}
                    style={{ backgroundColor: node.color }}>
                </div>))}
        </div>
    )
}
function DungeonUI() {
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
            <DungeonMap />
            <div className="bottom-bar">
                <button className="choice-button"> Choice 1</button>
                <button className="choice-button"> Choice 2</button>
                <button className="choice-button"> Choice 3</button>
            </div>
        </div>
    );
}

export default DungeonUI;