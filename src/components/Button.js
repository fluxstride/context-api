import { useContext } from "react"
import context from '../context'

const Button = ({ type }) => {
    const contextData = useContext(context)
    const { counter, setCounter } = contextData
    let action;
    let buttonText;

    const subtractEvent = () => {
        setCounter(counter - 1)
    }

    const addEvent = () => {
        setCounter(counter + 1)
    }
    switch (type) {
        case "add":
            action = addEvent;
            buttonText = "Add";
            break;

        case "subtract":
            action = subtractEvent
            buttonText = "Subtract"
            break;

        default:
            break;
    }

    return (
        <button className='button' onClick={action}>
            {buttonText}
        </button>
    )
}

export default Button