import './CDInput.css'
interface CDInputProps {
    children?: React.ReactNode
    type: string
    value: string
    disabled?: boolean
    onClick?: (e?) => {}
}
function CDInput({ children, type, value, disabled, onClick }: CDInputProps) {
    return (
        <input
            className="cdinput"
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </input>
    )
}

export default CDInput