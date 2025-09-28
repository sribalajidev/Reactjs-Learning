import React, { useState } from "react";

// Higher-Order Component that injects counter state
function withCounter(WrappedComponent) {
  return function () {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return <WrappedComponent count={count} increment={increment} />;
  };
}

// Component to display counter
function CounterDisplay({ count, increment }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Export HOC-enhanced component
export default withCounter(CounterDisplay);
