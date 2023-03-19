import "./SideBarUI.css"
import { Link } from 'react-router-dom';
import { SaveButton } from "../Player/SaveButton";
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/dungeon-select">Dungeon</Link></li>
                <li><Link to="/hometown">HomeTown</Link></li>
                <li><Link to="/character">Character</Link></li>
                <li><SaveButton/></li>
            </ul>
        </div>
    );
}

export default SideBar;