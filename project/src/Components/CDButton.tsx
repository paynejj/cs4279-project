import './CDButton.css'
interface CDButtonProps {
    children?: React.ReactNode
    color?: string
    onClick?: any
}
function CDButton({ children, color = "purple", onClick }: CDButtonProps) {
    return (
        <button className="cdbutton"
            color={color}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default CDButton