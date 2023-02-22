import "./DungeonSelect.css"
function handleClick() {

}
function DungeonSelect() {
    return (
        <div className="dungeon-select-body">
            <h1> Select a Difficulty</h1>
            <div className="dungeon-select">
                <a className="dungeon-select-card" href="/dungeon"> Easy </a>
                <a className="dungeon-select-card" href="/dungeon"> Medium </a>
                <a className="dungeon-select-card" href="/dungeon"> Hard </a>
            </div>
        </div>
    )
}
export default DungeonSelect 
