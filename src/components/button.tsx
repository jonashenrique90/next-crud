import { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    className?: string;
    color?: 'green' | 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'pink';
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, className, color = 'gray', onClick }) => {
    return (
        <button className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700 text-white 
            px-4 py-2 rounded-md
            ${className}
        `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}