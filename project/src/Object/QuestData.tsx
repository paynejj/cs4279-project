import React, { createContext, useContext, useEffect, useState } from "react";
import { QuestType } from "./Quest";

const defaultQuests: QuestType[] = [
    {
        name: "Slime Hunting", description: "Kill 5 Slimes",
        reward: 100, monsterKilled: 0, monsterToKill: 10
    },
    {
        name: "WEAPON", description: "Equip a weapon",
        reward: 50, itemCollected: 0, itemToCollect: 1
    },
    {
        name: "Fighting Streak", description: "Fight 5 Monsters in a row",
        reward: 150, monsterKilled: 0, monsterToKill: 5
    },
    {
        name: "Rest Time", description: "Stay in Rest area for 5 hours",
        reward: 50, itemCollected: 0, itemToCollect: 5
    },
];

const defaultQuests2: QuestType[] = [
    {
        name: 'French Fries',
        description: `Go get ONE any-size french fries from \n BurgerQueen.\n`,
        reward: 25, itemCollected: 1, itemToCollect: 1,
    },
];

interface QuestsContextValue {
    questBoardList: QuestType[];
    acceptedQuests: QuestType[];
    newQuest: (quest: QuestType) => void;
    acceptQuest: (quest: QuestType) => void;
    completeQuest: (quest: QuestType) => void;
}

const QuestsContext = createContext<QuestsContextValue>({
    questBoardList: [],
    acceptedQuests: [],
    newQuest: () => { },
    acceptQuest: () => { },
    completeQuest: () => { },
});

export function useQuests() {
    return useContext(QuestsContext);
}

interface QuestsProviderProps {
    children: React.ReactNode;
}

export function QuestsProvider({ children }: QuestsProviderProps) {
    const [questBoardList, setQuestBoardList] = useState<QuestType[]>([]);
    const [acceptedQuests, setAcceptedQuests] = useState<QuestType[]>([]);

    useEffect(() => {
        setQuestBoardList(defaultQuests);
        setAcceptedQuests(defaultQuests2);
    }, []);
    

    function acceptQuest(quest: QuestType) {
        setAcceptedQuests(prevAcceptedQuests => [...prevAcceptedQuests, quest]);
        setQuestBoardList(prevQuestBoardList => prevQuestBoardList.filter(q => q.name !== quest.name));
    }

    function newQuest(quest: QuestType) {
        setQuestBoardList((prevQuests) => [...prevQuests, quest]);
    }

    function completeQuest(quest: QuestType) {
        setAcceptedQuests(prevAcceptedQuests => prevAcceptedQuests.filter(q => q.name !== quest.name));
    }

    const value: QuestsContextValue = {
        questBoardList,
        acceptedQuests,
        acceptQuest,
        newQuest,
        completeQuest,
    };

    return <QuestsContext.Provider value={value}>{children}</QuestsContext.Provider>;
}