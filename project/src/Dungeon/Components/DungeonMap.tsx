import DungeonNodeDisplay from "./DungeonNodeDisplay"
import { Dungeon } from "../Scripts/Dungeon"
import { PlayerDataContext } from "../../Player/PlayerDataContext"
import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react"
import React from "react"
import CDButton from "../../Components/CDButton"
import { Link, useNavigate } from "react-router-dom"
import { useQuests } from "../../Object/QuestData";

interface DungeonMapProps {
    dungeon: Dungeon
}
function DungeonMap({ dungeon }: DungeonMapProps) {
    let complete = useRef(dungeon.isComplete())
    const { playerData, setPlayerData } = useContext(PlayerDataContext);
    const { acceptedQuests, progressQuest } = useQuests(); // for quest progress
    const navigate = useNavigate()
    let beginnerQuest = acceptedQuests.find((quest) => quest.name === "Beginner");
    let mrDungeonQuest = acceptedQuests.find((quest) => quest.name === "MrDungeon");
    useEffect(() => {
        complete.current = dungeon.isComplete()
        dungeon.loseHealth(playerData, setPlayerData, acceptedQuests, progressQuest);

        if (playerData.stats.HP <= 0) {
            navigate('/try-again-screen');
        }

        if (!complete.current) return
        if (beginnerQuest) {
            progressQuest(beginnerQuest);
        }
        if (mrDungeonQuest) {
            progressQuest(mrDungeonQuest);
        }
        // This must be at the bottom of any quest checks
        // Go to the victory-screen, passing levelname and gold as path params
        navigate(`/victory-screen/${dungeon.level.name}/${dungeon.level.reward.gold}`)
    })
    //
    /**enables re-render when player playerition changes */
    const [player, setPlayer] = useState(dungeon.player)
    /**
* Handles keyboard controls for Dungeon Map
* @param e the event generated by the key press
* @param dungeon the Dungeon object 
*/
    const handleKeyDown = (e: KeyboardEvent, dungeon: Dungeon) => {

        switch (e.key) {
            //top-left is [0,0], bottom-right is [dungeon.rows, dungeon.cols]
            case "ArrowUp":
                setPlayer(dungeon.move(player[0] - 1, player[1]))
                break
            case "ArrowDown":
                setPlayer(dungeon.move(player[0] + 1, player[1]))
                break
            case "ArrowLeft":
                setPlayer(dungeon.move(player[0], player[1] - 1))
                break
            case "ArrowRight":
                setPlayer(dungeon.move(player[0], player[1] + 1))
                break
            default: {/**do nothing */ }
        }
    }
    /**
* Checks if the given index corresponds to the player coordinate in the dungeon
* @param idx index of the DungeonNode from the flattened map
* @returns true if idx matches player player
*/
    const hasPlayer = (idx: number) => {
        //converting 1D idx to 2D idx
        const row = Math.floor(idx / dungeon.rows)
        const col = idx % dungeon.cols

        //check if coordinates match
        return (row === player[0] && col === player[1])
    }
    //Convert the Dungeon.map to html. 
    return (
        <React.Fragment>
            {/** tabindex required for key detection */}
            <div tabIndex={0}
                className="dungeon-map"
                onKeyDown={e => handleKeyDown(e, dungeon)}
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${dungeon.cols}, auto)`,
                    gridTemplateRows: `repeat(${dungeon.rows}, auto`,
                    aspectRatio: `${dungeon.cols / dungeon.rows}`
                }}>
                {dungeon.map
                    //flatten 2d array to 1d
                    .flat()
                    //create DungeonNode components for every internal dungeon node
                    .map((node, idx) =>
                        <DungeonNodeDisplay node={node} key={idx} hasPlayer={hasPlayer(idx)} />)}
            </div>
        </React.Fragment>
    )
}
export default DungeonMap
