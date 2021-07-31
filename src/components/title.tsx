import { FC } from "react"

export const Title: FC = ({ children }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-4xl">
                {children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}