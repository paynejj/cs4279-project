import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { PlayerDataContext } from "./PlayerDataContext";
import { useQuests } from "../Object/QuestData";
import { useContext, useState } from 'react';
import "../SideBar/SideBarUI.css"


export const SaveButton = () => {
    const { playerData } = useContext(PlayerDataContext);
    const { acceptedQuests } = useQuests();

    const [saveJson, setSaveJson] = useState<string>();

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


    const downloadData = () => {
        // Convert playerData and quests to JSON
        const saveStr = JSON.stringify(gameData);

        // Save the JSON strings to state
        setSaveJson(saveStr);

        // Convert the JSON strings to blobs
        let saveUrl: string = '';
        if (saveJson) {
            const saveBlob = new Blob([saveJson], { type: 'application/json' });
            saveUrl = URL.createObjectURL(saveBlob);
        }

        // Create an <a> tag with the download attribute set
        const link = document.createElement('a');
        link.download = 'save.json';
        link.href = saveUrl;
        link.click();
    };

    return (
        <li onClick={downloadData}>
            <a>
                Save
            </a>
        </li>
    );
};