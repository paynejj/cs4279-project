import { useState, useEffect, useContext } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { useQuests } from '../Object/QuestData';

function HpBar() {
    const { acceptedQuests, progressQuest } = useQuests();
    const { playerData, setPlayerData } = useContext(PlayerDataContext);
    const [currentHp, setCurrentHp] = useState(playerData.stats.HP);
    const [currentMp, setCurrentMp] = useState(playerData.stats.MP);
    const healSpeed = 2;
    const maxHp = playerData.stats.MaxHP;
    const maxMp = playerData.stats.MaxMP;


    useEffect(() => {
        let warmQuest = acceptedQuests.find((quest) => quest.name === "WARM");

        const interval = setInterval(() => {
            let newPlayerData = { ...playerData };
            setCurrentHp((prevHp) => Math.min(prevHp + healSpeed, maxHp));
            newPlayerData.stats.HP = currentHp;
            setCurrentMp((prevMp) => Math.min(prevMp + healSpeed, maxMp));
            newPlayerData.stats.MP = currentMp;
            setPlayerData(newPlayerData);

            // counting the time spent for the WARM quest
            if (warmQuest) {
                progressQuest(warmQuest);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [currentHp, currentMp, healSpeed, maxHp, maxMp, playerData, setPlayerData]);

    const hpPercentage = (currentHp / maxHp) * 100;
    const MpPercentage = (currentMp / maxMp) * 100;

    return (
        <div>
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    height: "40px",
                    width: "100%",
                    outline: "3px solid purple",
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
            <h3 style={{ display: "inline-block", color: "green" }}>
                {currentHp}/{maxHp} HP
            </h3>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <h3 style={{ display: "inline-block", color: "blue" }}>
                {currentMp}/{maxMp} MP
            </h3>
        </div>
    );
}

export default HpBar;