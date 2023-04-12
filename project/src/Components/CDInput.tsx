import './CDInput.css'
interface CDInputProps {
    children?: React.ReactNode
    type: string
    value: string
    disabled?: boolean
    required?: boolean
    onClick?: (e?) => {}
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function CDInput({ children, type, value, disabled, onClick, onChange, required }: CDInputProps) {
    return (
        <input
            className="cdinput"
            type={type}
            value={value}
            disabled={disabled}
            required={required}
            onClick={onClick}
            onChange={onChange}>
            {children}
        </input>
    )
}

export default CDInput