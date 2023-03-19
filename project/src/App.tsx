import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import CharacterUi from './Character/CharacterUi';
import DungeonUI from './Dungeon/UI/DungeonUI';
import Hometown from './Hometown/Hometown';
import SideBar from "./SideBar/SideBarUI";
import Shop from "./Hometown/Shop";
import Rest from "./Hometown/Rest";
import Quest from "./Hometown/Quest";
import DungeonSelect from "./Dungeon/UI/DungeonSelect";
import CharacterCreation from "./CharacterCreation/CharacterCreation";
import { PlayerDataContext } from './Player/PlayerDataContext';
import { loadPlayerData } from "./Player/PlayerDataHelper"
import { Player } from "./Object/Player";
import { defaultPlayerData } from "./Player/DefaultPlayer";

function App() {

  const [playerData, setPlayerData] = useState<Player>(defaultPlayerData);
  useEffect(() => {
    const loadedPlayerData = loadPlayerData();
    if (loadedPlayerData) {
      setPlayerData(loadedPlayerData);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <SideBar />
        </nav>
        <main>
          <PlayerDataContext.Provider value={{ playerData, setPlayerData }}>
            <Routes>
              <Route path="/character" element={<CharacterUi />} />
              <Route path="/dungeon-select" element={<DungeonSelect />} />
              <Route path="/dungeon" element={<DungeonUI />} />
              <Route path="/hometown" element={<Hometown />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/rest" element={<Rest />} />
              <Route path="/quest" element={<Quest />} />
              <Route path="/" element={<CharacterCreation />} />
            </Routes>
          </PlayerDataContext.Provider>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
