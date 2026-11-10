import { useState } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(prev => prev + 1);
  }

  function handleDecrease() {
    setCount(prev => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>React <span>Counter</span></h1>

      <div className="count-display">{count}</div>

      <div className="button-group">
        <button className="increase" onClick={handleIncrease}>
          ↑ Increase
        </button>

        <button className="decrease" onClick={handleDecrease}>
          ↓ Decrease
        </button>

        <button className="reset" onClick={handleReset}>
          ↻ Reset
        </button>
      </div>

      {count >= 10 && (
        <p className="message">
          ⭐ Amazing! You have reached 10 counts!
        </p>
      )}
    </div>
  );
}