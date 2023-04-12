import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CharacterUi from './Character/CharacterUi';
import DungeonUI from './Dungeon/UI/DungeonUI';
import Hometown from './Hometown/Hometown';
import SideBar from "./SideBar/SideBarUI";
import Shop from "./Hometown/Shop";
import ShopSell from "./Hometown/ShopSell";
import Rest from "./Hometown/Rest";
import Quest from "./Hometown/Quest";
import DungeonSelect from "./Dungeon/UI/DungeonSelect";
import TextEditor from "./TextEditor";
import { PythonProvider } from 'react-py';
import LevelCreator from "./LevelCreator/LevelCreator";
import TitleScreen from "./Title/TitleScreen";
import CharacterCreation from "./CharacterCreation/CharacterCreation";
import { PlayerDataContext } from './Player/PlayerDataContext';
import { Player } from "./Object/Player";
import { defaultPlayerData } from "./Player/DefaultPlayer";
import { QuestsProvider } from "./Object/QuestData"
import GeneratorScreen from "./PythonDungeon/GeneratorScreen"
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
                  <Route path="/sell" element={<ShopSell />} />
                  <Route path="/rest" element={<Rest />} />
                  <Route path="/quest" element={<Quest />} />
                  <Route path="/level-creator" element={<GeneratorScreen />} />
                  <Route path="/text-editor" element={<TextEditor />} />
                  <Route path="/creation" element={<CharacterCreation />} />
                  <Route path="/" element={<TitleScreen />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </QuestsProvider>
      </PlayerDataContext.Provider>
    </PythonProvider>
  );
}

export default App;
