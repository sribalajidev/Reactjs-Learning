import { useEffect, useRef, useState } from "react";

// Custom hook: useInterval
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id); // Cleanup on unmount
    }
  }, [delay]);
}

export default function UseIntervalHook() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCount((prev) => prev + 1);
    },
    isRunning ? 1000 : null // Pause interval if not running
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use Interval Hook</h2>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
