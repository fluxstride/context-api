import { useContext } from "react"
import context from '../context'
const Counter = () => {
    const contextData = useContext(context)
    const { counter } = contextData

    return (
        <>
            <h1 className="count">{counter}</h1>
        </>

    )
}

export default Counter