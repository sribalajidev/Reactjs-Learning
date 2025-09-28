import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="counter-value">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">
        Decrement
      </button>
    </div>
  );
}