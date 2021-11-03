import Button from "./Button"
import Counter from "./Counter"

const Header = () => {
    return (
        <header className="App-header">
            <Counter />
            <div className="button-con">
                <Button type={"add"} />
                <Button type={"subtract"} />
            </div>
        
        </header>
    )
}

export default Header;