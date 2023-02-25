import { DungeonNode } from "../Scripts/DungeonNode"
interface DungeonNodeProps {
    node: DungeonNode
    hasPlayer: boolean
}
function DungeonNodeHTML({ node, hasPlayer }: DungeonNodeProps) {
    return (
        <div className='dungeon-node'
            style={{
                backgroundColor: hasPlayer ? "red" : node.color
            }}>
        </div>
    )
}

export default DungeonNodeHTML