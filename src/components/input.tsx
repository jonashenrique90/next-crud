import { FC } from "react"

interface InputProps {
    text: string;
    name: string;
    value: any;
    type?: 'text' | 'number';
    readonly?: boolean;
    className?: string;
    onChange?: (value: any) => void;
}

export const Input: FC<InputProps> = ({ text, name, value, type = "text", readonly, className, onChange }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className={`mb-4`} htmlFor={name}>{text}</label>
            <input name={name} className={`
                border border-purple-500 rounded-lg focus:outline-none bg-gray-200 px-4 py-2
                ${readonly ? '' : 'focus:bg-white'}
            `}
                readOnly={readonly}
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}