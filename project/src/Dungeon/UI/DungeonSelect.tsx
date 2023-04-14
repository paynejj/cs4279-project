import "./DungeonSelect.css"

function DungeonSelect() {

    return (
        <>
            <h1> Level Select</h1>
            <div className="dungeon-select">

                <div className="levels">
                    {window.api.getLevelFilenames()
                        .map((levelname: string, idx) => {
                            return (
                                <a className="level" href={`/dungeon/${levelname}`}>
                                    {levelname}
                                </a>)
                        })}
                </div>
            </div>
        </>
    )
}
export default DungeonSelect 
