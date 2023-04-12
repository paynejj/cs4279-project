import "./SideBarUI.css"
import { Link } from 'react-router-dom';
import { SaveButton } from "./SaveButton";
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link draggable="false" to="/dungeon-select">Dungeon</Link></li>
                <li><Link draggable="false" to="/hometown">HomeTown</Link></li>
                <li><Link draggable="false" to="/character">Character</Link></li>
                <li><Link draggable="false" to="/text-editor">Text</Link></li>
                <li><Link draggable="false" to="?"> Create Level </Link></li>
                <SaveButton/>
            </ul>
        </div>
    );
}

export default SideBar;