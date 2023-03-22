import { DungeonNode } from "../Scripts/DungeonNode"
interface DungeonNodeProps {
    node: DungeonNode
    hasPlayer?: boolean
    onClick?: (e?: Event) => void
}
function DungeonNodeDisplay({ node, hasPlayer, onClick }: DungeonNodeProps) {
    return (
        <div className='dungeon-node'
            style={{
                backgroundColor: hasPlayer ? "red" : node.color
            }}>
        </div>
    )
}

export default DungeonNodeDisplay