import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterUi from './character/CharacterUi';
import DungeonUI from './Dungeon/DungeonUI';
import Hometown from './Hometown/Hometown';
import SideBar from "./SideBar/SideBarUI";

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
            <Route path="/dungeon" element={<DungeonUI />} />
            <Route path="/hometown" element={<Hometown />} />
            <Route path="/" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
