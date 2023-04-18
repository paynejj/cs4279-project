import React from 'react';
import "./SideBarUI.css"
import { Link } from 'react-router-dom';
import { SaveButton } from "./SaveButton";
import { SaveAsButton } from './SaveAsButton';
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { useQuests } from "../Object/QuestData";

function SideBar() {
    const { playerData } = React.useContext(PlayerDataContext);
    const { acceptedQuests } = useQuests();
    // Convert the inventory map to an array of objects
    const inventoryArray =
        Array.from(playerData.inventory.entries()).map(([name, item]) =>
            ([name, item]));

    const equipmentArray =
        Array.from(playerData.equipments.entries()).map(([equipType, equipment]) =>
            ([equipType, equipment]));

    const gameData = {
        player: {
            name: playerData.name,
            class: playerData.class,
            inventory: inventoryArray,
            stats: playerData.stats,
            gold: playerData.gold,
            equipments: equipmentArray,
        },
        quests: acceptedQuests,
    };

    const autoSave = () => {
        // Convert playerData and quests to JSON
        const saveStr = JSON.stringify(gameData);
        if (saveStr) {
            window.api.writeFile("./autosave.json", saveStr);
            console.log('Auto saved');
        }
    };

    // count down timer
    const [time, setTime] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 600000);   // 600000ms = 10min
        autoSave();
        return () => clearInterval(interval);
    });

    return (
        <div className="sidebar">
            <ul>
                <li><Link draggable="false" to="/">Title Menu</Link></li>
                <li><Link draggable="false" to="/dungeon-select">Dungeon</Link></li>
                <li><Link draggable="false" to="/python-dungeon">Dungeon Script</Link></li>
                <li><Link draggable="false" to="/hometown">HomeTown</Link></li>
                <li><Link draggable="false" to="/character">Character</Link></li>
                <li><Link draggable="false" to="/text-editor">Text</Link></li>
                <li><Link draggable="false" to="/level-creator">Create Level</Link></li>
                <SaveButton/>
                <SaveAsButton/>
            </ul>
        </div>
    );
}

export default SideBar;