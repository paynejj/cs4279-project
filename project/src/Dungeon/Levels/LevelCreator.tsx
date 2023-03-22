import { useState } from 'react'
import DungeonNodeDisplay from '../Components/DungeonNodeDisplay'
import { Dungeon } from '../Scripts/Dungeon'
import { DNodes } from '../Scripts/DungeonNode'


function LevelCreator() {
    const dungeon = new Dungeon()
    const [map, setMap] = useState(dungeon.map)
    const defaultSelected = {
        void: false,
        tunnel: false
    }
    const [selected, setSelected] = useState(defaultSelected)
    const handleClick = (e?: Event) => {
        if(e ===undefined) return


    }
    return (
        <>
            <div className="dungeon-map" >
                {map
                    //flatten 2d array to 1d
                    .flat()
                    //create DungeonNode components for every internal dungeon node
                    .map((node, idx) =>
                        <DungeonNodeDisplay node={node} key={idx} onClick={handleClick}/>)}
            </div>
            
        </>
    )
}

export default LevelCreator