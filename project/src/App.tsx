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
import TextEditor from "./TextEditor";
import { PythonProvider } from 'react-py';
import LevelCreator from "./Dungeon/Levels/LevelCreator";
import CharacterCreation from "./CharacterCreation/CharacterCreation";
import { PlayerDataContext } from './Player/PlayerDataContext';
import { Player } from "./Object/Player";
import { defaultPlayerData } from "./Player/DefaultPlayer";
import { QuestsProvider } from "./Object/QuestData"

function App() {

  const [playerData, setPlayerData] = useState<Player>(defaultPlayerData);

  return (
    <PythonProvider>
      <PlayerDataContext.Provider value={{ playerData, setPlayerData }}>
        <QuestsProvider>
          <BrowserRouter>
            <div className="App">
              <nav>
                <SideBar />
              </nav>
              <main>
                <Routes>
                  <Route path="/character" element={<CharacterUi />} />
                  <Route path="/dungeon-select" element={<DungeonSelect />} />
                  <Route path="/dungeon" element={<DungeonUI />} />
                  <Route path="/hometown" element={<Hometown />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/rest" element={<Rest />} />
                  <Route path="/quest" element={<Quest />} />
                  <Route path="/level-creator" element={<LevelCreator />} />
                  <Route path="/text-editor" element={<TextEditor />} />
                  <Route path="/" element={<CharacterCreation />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </PythonProvider>
      </QuestsProvider>
    </PlayerDataContext.Provider>
  );
}

export default App;
