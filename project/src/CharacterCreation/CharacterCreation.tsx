import React from "react";
import UploadBotton from "./UploadButton";
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { useNavigate } from "react-router-dom";
import { useQuests } from "../Object/QuestData";
import { QuestType } from "../Object/Quest";
import { Item } from "../Object/Item";
import { Equipment, EquipmentType } from "../Object/Equipment";
import "./CreationForm.css"


function CharacterCreation() {
    const navigate = useNavigate();
    const {playerData, setPlayerData} = React.useContext(PlayerDataContext);
    const { setAcceptedQuestlist } = useQuests();

    const handleUpload = (uploadedPlayerData, questData : QuestType[]) => {

        const newInventory : Map<string, Item> = new Map(uploadedPlayerData.inventory);
        const newEquipments : Map<EquipmentType, Equipment> = new Map(uploadedPlayerData.equipments);
        console.log(newEquipments);
        const newPlayerData = {
            name: uploadedPlayerData.name,
            class: uploadedPlayerData.class,
            inventory:  newInventory,
            stats: uploadedPlayerData.stats,
            gold: uploadedPlayerData.gold,
            equipments: newEquipments,
        };

        setPlayerData(newPlayerData);
        setAcceptedQuestlist(questData);
      };

    const handleCharacterCreation = (name: string, characterClass: string) => {
        const newPlayerData = {...playerData};
        newPlayerData.name = name;
        newPlayerData.class = characterClass;

        if(characterClass === 'Warrior') {
            newPlayerData.stats.MaxHP += 10;
            newPlayerData.stats.Vitality  += 3;
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
            <UploadBotton onUpload={handleUpload}/>
        </div>
    );
}

export default CharacterCreation;