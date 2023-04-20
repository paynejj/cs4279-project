import React from "react";
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { defaultPlayerData, defaultStats } from "../Player/DefaultPlayer";
import { useQuests } from "../Object/QuestData";
import { useNavigate } from "react-router-dom";
import { Item } from "../Object/Item";
import { Equipment, EquipmentType } from "../Object/Equipment";
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
        newPlayerData.stats = { ...defaultStats };
        newPlayerData.inventory = new Map<string, Item>();
        newPlayerData.equipments = new Map<EquipmentType, Equipment>([
            [EquipmentType.Helmet, ['NOTHING', { equipmentType: EquipmentType.Helmet, }]],
            [EquipmentType.Chestplate, ['NOTHING', { equipmentType: EquipmentType.Chestplate, }]],
            [EquipmentType.Boots, ['NOTHING', { equipmentType: EquipmentType.Boots, }]],
            [EquipmentType.Chausses, ['NOTHING', { equipmentType: EquipmentType.Chausses }]],
            [EquipmentType.Ring1, ['NOTHING', { equipmentType: EquipmentType.Ring1 }]],
            [EquipmentType.Ring2, ['NOTHING', { equipmentType: EquipmentType.Ring2 }]],
            [EquipmentType.Amulet, ['NOTHING', { equipmentType: EquipmentType.Amulet }]],
            [EquipmentType.Weapon, ['NOTHING', { equipmentType: EquipmentType.Weapon }]],
        ]);;

        setAcceptedQuestlist([]);
        resetQuestboard();

        if (characterClass === 'Warrior') {
            newPlayerData.stats.MaxHP += 10;
            newPlayerData.stats.Vitality += 3;
            newPlayerData.stats.Strength += 3;
        } else if (characterClass === 'Mage') {
            newPlayerData.stats.MaxMP += 10;
            newPlayerData.stats.Intelligence += 5;
        } else if (characterClass === 'Ranger') {
            newPlayerData.stats.Agility += 2;
            newPlayerData.stats.Dexterity += 2;
            newPlayerData.stats.Luck += 2;
        }

        const firstSave = () => {
            // Convert the inventory map to an array of objects
            // this is for saving
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
                    inDungeon: false,
                },
                quests: acceptedQuests,
            };

            const saveStr = JSON.stringify(gameData);
            if (saveStr) {
                window.api.writeFile("./autosave.json", saveStr);
                setPlayerData(newPlayerData); // set the player data if save is successful
                console.log('New Character Saved');
            }
        }

        firstSave();
        navigate('/hometown');
    };

    return (
        <CreationForm onSubmit={handleCharacterCreation} />
    );
}

export default CharacterCreation;