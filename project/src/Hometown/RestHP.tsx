import { useState, useEffect, useContext } from "react";
import { PlayerDataContext } from "../Player/PlayerDataContext";

function HpBar() {
    const { playerData, setPlayerData } = useContext(PlayerDataContext);
    const [currentHp, setCurrentHp] = useState(playerData.stats.HP);
    const healSpeed = 1;
    const maxHp = playerData.stats.MaxHP;
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            let newPlayerData = { ...playerData };
            setCurrentHp((prevHp) => Math.min(prevHp + healSpeed, maxHp));
            newPlayerData.stats.HP = currentHp;
            setPlayerData(newPlayerData);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentHp, healSpeed, maxHp, playerData, setPlayerData]);

    const hpPercentage = (currentHp / maxHp) * 100;

    return (
        <div>
            <div
                style={{
                    backgroundColor: "red",
                    height: "20px",
                    width: "100%",
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
            </div>
            <div>{currentHp}/{maxHp} HP</div>
        </div>
    );
}

export default HpBar;