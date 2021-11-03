import './App.css';
import { useState } from "react"
import Header from './components/Header';
import { Provider } from "./context"


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <Provider value={{ counter, setCounter }}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
