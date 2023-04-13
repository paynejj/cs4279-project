import { useState } from 'react'
import { Dungeon } from '../Dungeon/Scripts/Dungeon'
import './LevelCreator.css'
import CDButton from '../Components/CDButton'
import internal from 'stream'

export type Level = {
    name: string
    rows: number
    cols: number
    start: [number, number]
    map: number[][]

}
function LevelCreator() {
    const dungeon = new Dungeon()
    const [map, setMap] = useState(dungeon.map)
    const defaultSelected = {
        void: false,
        tunnel: false
    }
    const [selected, setSelected] = useState(defaultSelected)
    const handleClick = (e?) => {
        window.api.writeFile("./test.txt", "chicken mcnuggets")
        let readres = window.api.readFile("./test.txt")
        console.log(readres)

    }

    const toggleSelected = (tile: string) => {

        switch (tile) {
            case "void":
                setSelected({ ...defaultSelected, void: true })
                break;
            case "tunnel":
                setSelected({ ...defaultSelected, tunnel: true })
        }
    }

    const saveLevel = () => {
  
    }
    return (
        <>
            <CDButton onClick={saveLevel}> Save Template Level </CDButton>
            <button className={`tile ${selected.void ? "active" : ""}`}
                onClick={() => toggleSelected("void")}> Void </button>
            <button className={`tile ${selected.tunnel ? "active" : ""}`}
                onClick={() => toggleSelected("tunnel")}> Tunnel </button>
            <button onClick={(e) => handleClick(e)}> Save Dungeon</button>
        </>
    )
}

export default LevelCreator