import "./DungeonSelect.css"
import { useState } from 'react';

function DungeonSelect() {
    //UseStates for togggling visibility
    const [easy, setEasy] = useState(false)
    const [medium, setMedium] = useState(false)
    const [hard, setHard] = useState(false)

    return (
        <>
            <h1> Level Select</h1>
            <div className="dungeon-select">
                <button
                    className={`difficulty ${easy ? "active" : ""}`}
                    onClick={() => setEasy(!easy)}>
                    Easy
                </button>
                {/* Div exists only if variable is true */}
                {easy && (
                    <div className="levels" >
                        <a className="level" href="/dungeon"> Level 1</a>
                        {new Array(24).fill(undefined).map((_, idx) =>
                            <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 2}`}</a>)}
                    </div>)}
                <button
                    className={medium ? "difficulty active" : "difficulty"}
                    onClick={() => setMedium(!medium)}>
                    Medium
                </button>
                {medium && (
                    <div className="levels">
                        {new Array(25).fill(undefined).map((_, idx) =>
                            <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 1}`}</a>)}
                    </div>)}
                <button
                    className={hard ? "difficulty active" : "difficulty"}
                    onClick={() => setHard(!hard)}>
                    Hard
                </button>
                {hard && (
                    <div className="levels">
                        {new Array(25).fill(undefined).map((_, idx) =>
                            <a className="level" href="/dungeon-select">PlaceHolder{`${idx + 1}`}</a>)}
                    </div>)}
            </div>
        </>
    )
}
export default DungeonSelect 
