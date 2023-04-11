import React from 'react';
import { Player } from '../Object/Player';
import { defaultPlayerData } from './DefaultPlayer';

interface PlayerDataProps {
  playerData: Player;
  setPlayerData: (data: Player) => void;
}

export const PlayerDataContext = React.createContext<PlayerDataProps>({
  playerData: defaultPlayerData,
  setPlayerData: () => { },
});


