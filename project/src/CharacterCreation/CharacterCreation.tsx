import React from "react";
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { defaultPlayerData } from "../Player/DefaultPlayer";
import { useQuests, defaultQuests2 } from "../Object/QuestData";
import { useNavigate } from "react-router-dom";
import "./CreationForm.css"


function CharacterCreation() {
    const { playerData, setPlayerData } = React.useContext(PlayerDataContext);
    const { setAcceptedQuestlist, resetQuestboard, acceptedQuests } = useQuests();
    const navigate = useNavigate();

    const handleCharacterCreation = (name: string, characterClass: string) => {

        if (!name.replace(/\s/g, '').length) {
            console.log('Invalid Name');
            return;
        }

        const newPlayerData = { ...defaultPlayerData };
        newPlayerData.name = name;
        newPlayerData.class = characterClass;

        setAcceptedQuestlist(defaultQuests2);
        resetQuestboard();

        if (characterClass === 'Warrior') {
            newPlayerData.stats.MaxHP += 10;
            newPlayerData.stats.Vitality += 3;
            newPlayerData.stats.Strength += 3;
        } else if (characterClass === 'Mage') {
            newPlayerData.stats.MaxMP += 10;
            newPlayerData.stats.Intellegence += 5;
        } else if (characterClass === 'Ranger') {
            newPlayerData.stats.Agility += 2;
            newPlayerData.stats.Dexterity += 2;
            newPlayerData.stats.Luck += 2;
        }

        // Convert the inventory map to an array of objects
        const inventoryArray =
            Array.from(newPlayerData.inventory.entries()).map(([name, item]) =>
                ([name, item]));

        const equipmentArray =
            Array.from(newPlayerData.equipments.entries()).map(([equipType, equipment]) =>
                ([equipType, equipment]));

        const gameData = {
            player: {
                name: newPlayerData.name,
                class: newPlayerData.class,
                inventory: inventoryArray,
                stats: newPlayerData.stats,
                gold: newPlayerData.gold,
                equipments: equipmentArray,
            },
            quests: defaultQuests2,
        };

        const saveStr = JSON.stringify(gameData);
        if (saveStr) {
            setPlayerData(newPlayerData);
            window.api.writeFile("./autosave.json", saveStr);
            console.log('New Character Saved');
        }


        navigate('/hometown');
    };

    return (
        <CreationForm onSubmit={handleCharacterCreation} />
    );
}

export default CharacterCreation;