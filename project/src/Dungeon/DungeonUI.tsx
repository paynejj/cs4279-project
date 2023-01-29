import React from "react";
import "./DungeonUI.css"

function DungeonUI() {
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
            <div className="map">
                <div className="dungeon-node"> 1 </div>
                <div className="dungeon-node"> 2 </div>
                <div className="dungeon-node"> 3 </div>
                <div className="dungeon-node"> 4 </div>
                <div className="dungeon-node"> 5 </div>
                <div className="dungeon-node"> 6 </div>
            </div>
            <div className="bottom-bar">
                <button className="choice-button"> Choice 1</button>
                <button className="choice-button"> Choice 2</button>
                <button className="choice-button"> Choice 3</button>
            </div>
        </div>
    );
}

export default DungeonUI;