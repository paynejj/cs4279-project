import React from "react";
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { defaultPlayerData } from "../Player/DefaultPlayer";
import { useQuests, defaultQuests, defaultQuests2 } from "../Object/QuestData";
import { useNavigate } from "react-router-dom";
import "./CreationForm.css"


function CharacterCreation() {
    const { setPlayerData } = React.useContext(PlayerDataContext);
    const { setAcceptedQuestlist, resetQuestboard } = useQuests();
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

        setPlayerData(newPlayerData);
        navigate('/hometown');
    };

    return (
        <CreationForm onSubmit={handleCharacterCreation} />
    );
}

export default CharacterCreation;