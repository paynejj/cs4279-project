import React from "react";
import CDButton from "../Components/CDButton";
import { useNavigate } from "react-router-dom";
import ContinueButton from "./ContinueButton";
import LoadButton from "./LoadButton";
import { QuestType } from "../Object/Quest";
import { Item } from "../Object/Item";
import { Equipment, EquipmentType } from "../Object/Equipment";
import { useQuests } from "../Object/QuestData";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { defaultPlayerData } from "../Player/DefaultPlayer";

function TitleScreen() {

    const { setPlayerData } = React.useContext(PlayerDataContext);
    const { setAcceptedQuestlist } = useQuests();

    let navigate = useNavigate();
    const newGame = () => {
        let path = `/creation`;
        navigate(path);
    }

    const handleLoad = (uploadedPlayerData, questData: QuestType[]) => {
        const newInventory: Map<string, Item> = new Map(uploadedPlayerData.inventory);
        const newEquipments: Map<EquipmentType, Equipment> = new Map(uploadedPlayerData.equipments);
        const newPlayerData = {
            ...defaultPlayerData,
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

    return (
        <React.Fragment>
            <h1> Welcome to CodeDungeons! </h1>
            <CDButton onClick={newGame}> New </CDButton>
            <ContinueButton onLoad={handleLoad} />
            <LoadButton onLoad={handleLoad} />
        </React.Fragment>
    )
}

export default TitleScreen