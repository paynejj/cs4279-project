import { useState, useEffect, useContext } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { useQuests } from '../Object/QuestData';

function HpBar() {
    const { acceptedQuests } = useQuests();
    const { playerData, setPlayerData } = useContext(PlayerDataContext);
    const [currentHp, setCurrentHp] = useState(playerData.stats.HP);
    const [currentMp, setCurrentMp] = useState(playerData.stats.MP);
    const healSpeed = 1;
    const maxHp = playerData.stats.MaxHP;
    const maxMp = playerData.stats.MaxMP;


    useEffect(() => {
        let warmQuest = acceptedQuests.find((quest) => quest.name === "I LOVE WARM");

        const intervalId = setInterval(() => {
            let newPlayerData = { ...playerData };
            setCurrentHp((prevHp) => Math.min(prevHp + healSpeed, maxHp));
            newPlayerData.stats.HP = currentHp;
            setCurrentMp((prevMp) => Math.min(prevMp + healSpeed, maxMp));
            newPlayerData.stats.MP = currentMp;
            setPlayerData(newPlayerData);

            // counting the time spent for the I LOVE WARM quest
            if (warmQuest &&
                typeof warmQuest.itemCollected === "number" &&
                warmQuest.itemToCollect &&
                warmQuest.itemCollected < warmQuest.itemToCollect) {
                ++warmQuest.itemCollected;
                console.log(warmQuest.itemCollected);
            }

        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentHp, currentMp, healSpeed, maxHp, maxMp, playerData, setPlayerData]);

    const hpPercentage = (currentHp / maxHp) * 100;
    const MpPercentage = (currentMp / maxMp) * 100;

    return (
        <div>
            <div
                style={{
                    backgroundColor: "red",
                    height: "40px",
                    width: "100%",
                    outline: "3px solid black",
                }}
            >
                <div
                    style={{
                        backgroundColor: "green",
                        height: "20px",
                        width: `${hpPercentage}%`,
                        transition: "width 1s linear",
                    }}
                />
                <div
                    style={{
                        backgroundColor: "blue",
                        height: "20px",
                        width: `${MpPercentage}%`,
                        transition: "width 1s linear",
                    }}
                />
            </div>
            <h3 style={{ color: "black", backgroundColor: "white" }}>
                {currentHp}/{maxHp} HP
                &nbsp;
                {currentMp}/{maxMp} MP&nbsp;
            </h3>
        </div>
    );
}

export default HpBar;