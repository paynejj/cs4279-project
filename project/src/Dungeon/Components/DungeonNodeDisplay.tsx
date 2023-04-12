import { DungeonNode } from "../Scripts/DungeonNode"
interface DungeonNodeProps {
    node: DungeonNode
    key?: string
    hasPlayer?: boolean
    onClick?: (e?: Event) => void
}
function DungeonNodeDisplay({ node, hasPlayer, onClick }: DungeonNodeProps) {
    return (
        <div className='dungeon-node'
            style={{
                backgroundColor: hasPlayer ? "blue" : node.color
            }}>
        </div>
    )
}

export default DungeonNodeDisplay