import "./DungeonSelect.css"
import { useState } from 'react';

function DungeonSelect() {
    //UseStates for toggling visibility
    const allClosed = { easy: false, medium: false, hard: false }
    const [isOpen, setIsOpen] = useState({ ...allClosed })
    //Toggle 
    const toggle = (id: string) => {
        const updateOpen = { ...allClosed }
        updateOpen[id] = !isOpen[id]
        setIsOpen(updateOpen)
    }

    return (
        <>
            <h1> Level Select</h1>
            <div className="dungeon-select">
                <button
                    className={`difficulty ${isOpen.easy ? "active" : ""}`}
                    onClick={() => toggle("easy")}>
                    Easy
                </button>
                <button
                    className={`difficulty ${isOpen.medium ? "active" : ""}`}
                    onClick={() => toggle("medium")}>
                    Medium
                </button>
                <button
                    className={`difficulty ${isOpen.hard ? "active" : ""}`}
                    onClick={() => toggle("hard")}>
                    Hard
                </button>
                <div className={`levels ${isOpen.easy ? "" : "hidden"}`}>
                    <a className="level" href="/dungeon"> Level 1</a>
                    {new Array(24).fill(undefined).map((_, idx) =>
                        <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 2}`}</a>)}
                </div>
                <div className={`levels ${isOpen.medium ? "" : "hidden"}`}>
                    {new Array(25).fill(undefined).map((_, idx) =>
                        <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 1}`}</a>)}
                </div>


                <div className={`levels ${isOpen.hard ? "" : "hidden"}`}>
                    {new Array(25).fill(undefined).map((_, idx) =>
                        <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 1}`}</a>)}
                </div>
            </div>
        </>
    )
}
export default DungeonSelect 
