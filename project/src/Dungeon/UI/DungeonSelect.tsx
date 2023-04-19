import "./DungeonSelect.css"
import { Link } from "react-router-dom"

function DungeonSelect() {

    return (
        <>
            <h1> Level Select</h1>
            <div className="dungeon-select">

                <div className="levels">
                    {window.api.getLevelFilenames()
                        .map((levelname: string) => {
                            return (
                                <Link className="level" key={levelname} draggable="false" to={`/dungeon/${levelname}`}>
                                    {levelname}
                                </Link>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
export default DungeonSelect 
