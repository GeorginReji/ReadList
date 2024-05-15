import { FC, JSX } from "react"

interface props {}

const Error: FC<props> = (): JSX.Element => {
    return (
        <div>
            {"Error"}
        </div>
    )
}

export default Error