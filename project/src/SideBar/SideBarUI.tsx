import "./SideBarUI.css"
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/dungeon-select">Dungeon</a></li>
                <li><a href="/hometown">HomeTown</a></li>
                <li><a href="/character">Character</a></li>
                <li><a href="/text-editor">Text</a></li>
                <li><a href="?"> Create Level </a></li>
            </ul>
        </div>
    );
}

export default SideBar;