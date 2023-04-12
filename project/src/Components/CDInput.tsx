import './CDInput.css'
interface CDInputProps {
    children?: React.ReactNode
    type: string
    value: string
    disabled?: boolean
    onClick?: (e?) => {}
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function CDInput({ children, type, value, disabled, onClick, onChange }: CDInputProps) {
    return (
        <input
            className="cdinput"
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}
            onChange={onChange}>
            {children}
        </input>
    )
}

export default CDInput