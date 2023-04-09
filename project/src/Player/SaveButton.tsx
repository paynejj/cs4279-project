import { PlayerDataContext } from "./PlayerDataContext";
import { useQuests } from "../Object/QuestData";
import { useContext, useState } from 'react';
import "../SideBar/SideBarUI.css"


export const SaveButton = () => {
    const { playerData } = useContext(PlayerDataContext);
    const { acceptedQuests } = useQuests();
    const [saveJson, setSaveJson] = useState<string>();
    let insecurityQuest = acceptedQuests.find((quest) => quest.name === "Insecurity");

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

    const saveData = () => {

        if (insecurityQuest && 
            typeof insecurityQuest.itemCollected === 'number' &&
            insecurityQuest.itemToCollect &&
            insecurityQuest.itemCollected < insecurityQuest.itemToCollect){
            ++insecurityQuest.itemCollected;
            console.log("Saved", insecurityQuest.itemCollected, "times");
        }

        // Convert playerData and quests to JSON
        const saveStr = JSON.stringify(gameData);

        // Save the JSON strings to state
        setSaveJson(saveStr);

        if (saveJson) {
            window.api.writeFile("./save.json", saveJson);
            console.log('Successfully saved');
        }
    };

    return (
        <li onClick={saveData}>
            <a className="not-selectable-pointer">
                Save
            </a>
        </li>
    );
};