import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterUi from './Character/CharacterUi';
import DungeonUI from './Dungeon/UI/DungeonUI';
import Hometown from './Hometown/Hometown';
import SideBar from "./SideBar/SideBarUI";
import Shop from "./Hometown/Shop";
import Rest from "./Hometown/Rest";
import Quest from "./Hometown/Quest";
import DungeonSelect from "./Dungeon/UI/DungeonSelect";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <SideBar />
        </nav>
        <main>
          <Routes>
            <Route path="/character" element={<CharacterUi />} />
            <Route path="/dungeon-select" element={<DungeonSelect/>}/>
            <Route path="/dungeon" element={<DungeonUI />} />
            <Route path="/hometown" element={<Hometown />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/rest" element={<Rest />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
