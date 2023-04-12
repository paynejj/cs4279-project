import { NumberLiteralType } from "typescript"
import { DungeonNode } from "../Scripts/DungeonNode"
interface DungeonNodeProps {
    node: DungeonNode
    key?: string | number
    hasPlayer?: boolean
    onClick?: (e?: Event) => void
}
function DungeonNodeDisplay({ node, hasPlayer, key, onClick }: DungeonNodeProps) {
    return (
        <div className='dungeon-node'
            key={key}
            style={{
                backgroundColor: hasPlayer ? "blue" : node.color
            }}>
        </div>
    )
}

export default DungeonNodeDisplay