import "./SideBarUI.css"
import { Link } from 'react-router-dom';
import { SaveButton } from "../Player/SaveButton";
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/dungeon-select">Dungeon</a></li>
                <li><a href="/hometown">HomeTown</a></li>
                <li><a href="/character">Character</a></li>
                <li><a href="/text-editor">Text</a></li>
                <li><a href="?"> Create Level </a></li>
                <li><SaveButton/></li>
            </ul>
        </div>
    );
}

export default SideBar;