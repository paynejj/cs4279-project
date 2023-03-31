import React from "react";
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { useNavigate } from "react-router-dom";
import { useQuests } from "../Object/QuestData";
import { QuestType } from "../Object/Quest";
import { Item } from "../Object/Item";
import { Equipment, EquipmentType } from "../Object/Equipment";
import "./CreationForm.css"


function CharacterCreation() {
    const { playerData, setPlayerData } = React.useContext(PlayerDataContext);
    const { setAcceptedQuestlist } = useQuests();
    const [loadedSave, setLoadedSave] = React.useState('');
    const navigate = useNavigate();

    const handleLoad = (uploadedPlayerData, questData: QuestType[]) => {

        const newInventory: Map<string, Item> = new Map(uploadedPlayerData.inventory);
        const newEquipments: Map<EquipmentType, Equipment> = new Map(uploadedPlayerData.equipments);
        const newPlayerData = {
            name: uploadedPlayerData.name,
            class: uploadedPlayerData.class,
            inventory: newInventory,
            stats: uploadedPlayerData.stats,
            gold: uploadedPlayerData.gold,
            equipments: newEquipments,
        };

        setPlayerData(newPlayerData);
        setAcceptedQuestlist(questData);
    };

    React.useEffect(() => {
        try {
            // trying to read the file
            setLoadedSave(window.api.readFile("./save.json"));
        } catch (error) {
            console.log('Creating character and the save file')
        }
        if (loadedSave) {
            if (typeof loadedSave === "string") {
                const data = JSON.parse(loadedSave);
                handleLoad(data.player, data.quests);
            }
            console.log("Save loaded");
            navigate('/hometown');
        }
    }, [loadedSave, handleLoad, navigate]);

    const handleCharacterCreation = (name: string, characterClass: string) => {
        const newPlayerData = { ...playerData };
        newPlayerData.name = name;
        newPlayerData.class = characterClass;

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

        setPlayerData(newPlayerData);
        navigate('/hometown');
    };

    return (
        <div>
            <CreationForm onSubmit={handleCharacterCreation} />
        </div>
    );
}

export default CharacterCreation;