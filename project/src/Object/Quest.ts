export type QuestType = {
    name: string;
    description: string;
    reward: number;
    itemCollected?: number;
    itemToCollect?: number;
}