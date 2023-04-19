import React from 'react';
import { Player } from '../Object/Player';
import { defaultPlayerData } from './DefaultPlayer';

interface PlayerDataContextProps {
  playerData: Player;
  setPlayerData: (data: Player) => void;
}

export const PlayerDataContext = React.createContext<PlayerDataContextProps>({
  playerData: defaultPlayerData,
  setPlayerData: () => { },
});


