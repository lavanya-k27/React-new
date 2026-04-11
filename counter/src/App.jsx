import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const increaseStep = () => {
    setCount(Number(count) + Number(inputValue));
    setInputValue("");
  };

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <div className="counter">
        <div>Current count - {count}</div>
      </div>
      <div className="buttons">
        <Button name="increase count" onClick={increaseCount} />
        <Button name="decrease count" onClick={decreaseCount} />
      </div>

      <div className="step-counter">
        <h2> Step Counter</h2>
        <input
          type="number"
          placeholder="type the number you want to add"
          className="input"
          onChange={handleInput}
          value={inputValue}
        />
        <Button name="add" onClick={increaseStep} />
      </div>
    </div>
  );
}

export default App;
