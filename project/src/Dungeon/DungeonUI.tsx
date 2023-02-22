import React, { useEffect } from "react"
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

function handleKeyDown(e) {
    console.log(e.key)
    const UP_ARROW = 38
    const DOWN_ARROW = 40
    const LEFT_ARROW = 37
    const RIGHT_ARROW = 39

    switch (e.keyCode) {
        case UP_ARROW:
            console.log("UP")

            break
        case DOWN_ARROW:
            console.log("DOWN")
            break
        case LEFT_ARROW:
            console.log("LEFT")
            break
        case RIGHT_ARROW:
            console.log("RIGHT")
            break
        default:

    }
}
function DungeonMap() {
    const dungeon = loadDungeon()
    const [dungeonMap, setDungeonMap] = useState(dungeon.map)
    const [player, setPlayer] = useState(dungeon.player)
    useEffect(() => document.addEventListener("keyup", handleKeyDown, true))
    const handleKeyDown = (e) => {
        const UP_ARROW = 38
        const DOWN_ARROW = 40
        const LEFT_ARROW = 37
        const RIGHT_ARROW = 39

        let pos = dungeon.player

        switch (e.keyCode) {
            case UP_ARROW:
                console.log("UP")
                pos = dungeon.move(pos[0] + 1, pos[1])
                break
            case DOWN_ARROW:
                pos = dungeon.move(pos[0] - 1, pos[1])
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
        console.log(pos)
        setPlayer(pos)
    }
    return (
        <div className="dungeon-map">
            {dungeonMap.flatMap((row, i) => row.map((node, j) =>
                <div className='dungeon-node' key={(i * dungeon.rows) + j}
                    style={{
                        backgroundColor: (player[0] === i && player[1] === j) ?
                            "red" : node.color
                    }}>
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