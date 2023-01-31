import React from "react";
import { Dungeon } from "./Dungeon";
import "./DungeonUI.css"

function DungeonMap() {
    const d = new Dungeon()
    return (
    <div className="map">
        {d.dungeon.flatMap(row => row.map(node => <div> {node.draw()} </div>))}        
    </div>
    )
}
function DungeonUI() {
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
                <DungeonMap/>
            <div className="bottom-bar">
                <button className="choice-button"> Choice 1</button>
                <button className="choice-button"> Choice 2</button>
                <button className="choice-button"> Choice 3</button>
            </div>
        </div>
    );
}

export default DungeonUI;