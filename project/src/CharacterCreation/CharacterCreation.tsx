import React from "react";
import UploadIcon from '@mui/icons-material/Upload';
import { CreationForm } from "./CreationForm";
import { PlayerDataContext } from '../Player/PlayerDataContext';
import { useNavigate } from 'react-router-dom';


function CharacterCreation() {
    const navigate = useNavigate();
    const {playerData, setPlayerData} = React.useContext(PlayerDataContext);
    const handleCharacterCreation = (name: string, characterClass: string) => {
        const newPlayerData = {...playerData};
        newPlayerData.name = name;
        newPlayerData.class = characterClass;

        if(characterClass === 'Warrior') {
            newPlayerData.stats.MaxHP += 10;
            newPlayerData.stats.Strength += 3;
        } else if (characterClass === 'Mage') {
            newPlayerData.stats.MaxMP += 10;
            newPlayerData.stats.Intellegence += 3;
        } else if (characterClass === 'Ranger') {
            newPlayerData.stats.Agility += 2;
            newPlayerData.stats.Dexerity += 2;
            newPlayerData.stats.Luck += 2;
        }
        
        setPlayerData(newPlayerData);
        navigate('/hometown');
      };
      
    return (
        <div>
            <CreationForm onSubmit={handleCharacterCreation} />
            {/* <UploadIcon /> */}
        </div>
    );
}

export default CharacterCreation;