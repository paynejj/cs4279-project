import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
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
import { Player } from "./Object/Player";
import { defaultPlayerData } from "./Player/DefaultPlayer";
import { QuestsProvider } from "./Object/QuestData"

function App() {

  const [playerData, setPlayerData] = useState<Player>(defaultPlayerData);


  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <SideBar />
        </nav>
        <main>
          <PlayerDataContext.Provider value={{ playerData, setPlayerData }}>
            <QuestsProvider>
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
            </QuestsProvider>
          </PlayerDataContext.Provider>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
