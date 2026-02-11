import { useState } from "react";
import "./CounterApp.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="glass-card">
        <h1 className="heading">Counter</h1>

        <div className="count">{count}</div>

        <div className="actions">
          <button onClick={() => setCount(count - 1)} className="btn secondary">
            Decrement (-)
          </button>

          <button onClick={() => setCount(0)} className="btn ghost">
            Reset
          </button>

          <button onClick={() => setCount(count + 1)} className="btn primary">
            Increment (+)
          </button>
        </div>
      </div>
    </div>
  );
}
