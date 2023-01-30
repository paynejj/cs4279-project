import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterUi from './character/CharacterUi';
import DungeonUI from './Dungeon/DungeonUI';
import Hometown from './Hometown';
import SideBar from "./SideBar/sidebar";
function App() {
  return (
    <BrowserRouter>
    <>
      <SideBar/>
      <Routes>
        <Route path="/character" element={<CharacterUi/>}/>
        <Route path="/dungeon" element= {<DungeonUI />}/> 
        <Route path="/hometown" element= {<Hometown />}/> 
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
