import { useState } from "react";
import { Dungeon } from "./Dungeon";
import "./DungeonUI.css"

function loadDungeon() {
    const dungeon = new Dungeon()
    dungeon.generate()
    saveDungeon(dungeon)
    return dungeon
}

function saveDungeon(dungeon) {
    localStorage.setItem('dungeon', JSON.stringify(dungeon))
}

function DungeonMap({dungeon}) {
    const [player, setPlayer] = useState(dungeon.player)
    const handleKeyUp = (e, dungeon: Dungeon) => {
        console.log("HandleKeyUp Called")
        //Key Codes
        const LEFT_ARROW = 37
        const UP_ARROW = 38
        const RIGHT_ARROW = 39
        const DOWN_ARROW = 40
    
        let pos = dungeon.player
    
        switch (e.keyCode) {
            case UP_ARROW:
                console.log("UP")
                pos = dungeon.move(pos[0] - 1, pos[1])
                break
            case DOWN_ARROW:
                pos = dungeon.move(pos[0] + 1, pos[1])
                console.log("DOWN")
                break
            case LEFT_ARROW:
                pos = dungeon.move(pos[0], pos[1] - 1)
                console.log("LEFT")
                break
            case RIGHT_ARROW:
                pos = dungeon.move(pos[0], pos[1] + 1)
                console.log("RIGHT")
                break
            default: {/**do nothing */ }
        }
        console.log(`handleKeyUp ${pos}`)
        setPlayer(pos)
    }
    return (
        <div tabIndex={0} className="dungeon-map" onKeyUp={(e) => handleKeyUp(e, dungeon)} >
            {dungeon.map.flatMap((row, i) => row.map((node, j) =>
                <div className='dungeon-node' key={(i * dungeon.rows) + j}
                    style={{
                        backgroundColor: (player[0] === i && player[1] === j) ?
                            "red" : 
                            node.color
                    }}>
                </div>))}
        </div>
    )
}
function DungeonUI() {
    const dungeon = loadDungeon()
    return (
        <div className="dungeon-body">
            <h1>Dungeon</h1>
            <DungeonMap dungeon={dungeon}/>
            <div className="bottom-bar">
                <button className="choice-button"> Choice 1</button>
                <button className="choice-button"> Choice 2</button>
                <button className="choice-button"> Choice 3</button>
            </div>
        </div>
    );
}

export default DungeonUI;