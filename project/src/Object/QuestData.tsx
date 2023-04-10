import React, { createContext, useContext, useEffect, useState } from "react";
import { QuestType } from "./Quest";

// default quests on the quest board
const defaultQuests: QuestType[] = [
    {
        name: "SlimeHunting", description: "Kill 10 Slimes",
        reward: 100, itemCollected: 0, itemToCollect: 10
    },
    {
        name: "WEAPON", description: "Equip a weapon",
        reward: 50, itemCollected: 0, itemToCollect: 1
    },
    {
        name: "FingerSnapping", description: "Fight 20 Monsters",
        reward: 150, itemCollected: 0, itemToCollect: 20
    },
    {
        name: "WARM", description: "Stay in the rest area for 30 seconds",
        reward: 10, itemCollected: 0, itemToCollect: 30
    },
    {
        name: "Bezos", description: "Sell 30 items",
        reward: 200, itemCollected: 0, itemToCollect: 30
    },
    {
        name: "Beginner", description: "Complete 1 dungeon",
        reward: 30, itemCollected: 0, itemToCollect: 1
    },
    {
        name: "MrDungeon", description: "Complete 20 HARD dungeons",
        reward: 200, itemCollected: 0, itemToCollect: 20
    },
    {
        name: "CHATGPT", description: "Write 10 scripts",
        reward: 200, itemCollected: 0, itemToCollect: 10
    },
    {
        name: "Insecurity", description: "Save 100 times",
        reward: 50, itemCollected: 0, itemToCollect: 100
    },
    {
        name: "Persistency", description: "Preload script outputs [0, 1, 2, 3, 4, 5]",
        reward: 500, itemCollected: 0, itemToCollect: 1
    },
];

// default already accepted quests
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
    setAcceptedQuestlist: (quest: QuestType[]) => void;
    progressQuest: (quest: QuestType) => void;
}

const QuestsContext = createContext<QuestsContextValue>({
    questBoardList: [],
    acceptedQuests: [],
    newQuest: () => { },
    acceptQuest: () => { },
    completeQuest: () => { },
    setAcceptedQuestlist: () => { },
    progressQuest: () => { },
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

    function progressQuest(quest: QuestType) {
        if (quest) {
            setAcceptedQuests(prevAcceptedQuests => prevAcceptedQuests.map(q => {
                if (q.name === quest.name) {
                    if (typeof q.itemCollected === 'number' &&
                        q.itemToCollect &&
                        q.itemCollected < q.itemToCollect) {
                        console.log("quest progress");
                        return {
                            ...q,
                            itemCollected: ++q.itemCollected,
                        };
                    }

                }
                return q;
            }));
        }
    }

    function newQuest(quest: QuestType) {
        setQuestBoardList((prevQuests) => [...prevQuests, quest]);
    }

    function completeQuest(quest: QuestType) {
        setAcceptedQuests(prevAcceptedQuests => prevAcceptedQuests.filter(q => q.name !== quest.name));
    }

    function setAcceptedQuestlist(questList: QuestType[]) {
        setAcceptedQuests(questList);
    }

    const value: QuestsContextValue = {
        questBoardList,
        acceptedQuests,
        acceptQuest,
        newQuest,
        completeQuest,
        setAcceptedQuestlist,
        progressQuest,
    };

    return <QuestsContext.Provider value={value}>{children}</QuestsContext.Provider>;
}