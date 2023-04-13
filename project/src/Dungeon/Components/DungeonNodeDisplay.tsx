import { DungeonNode } from "../Scripts/DungeonNode"
interface DungeonNodeProps {
    node: DungeonNode
    hasPlayer?: boolean
}
function DungeonNodeDisplay({ node, hasPlayer }: DungeonNodeProps) {
    return (
        <div className='dungeon-node'
            style={{
                backgroundColor: hasPlayer ? "blue" : node.color
            }}>
        </div>
    )
}

export default DungeonNodeDisplay