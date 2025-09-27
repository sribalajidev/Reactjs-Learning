// RealTimeState.jsx
import { useState, useEffect } from "react";

export default function RealTimeState() {
  const [seconds, setSeconds] = useState(0);

  // Update seconds every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Real-Time State Example</h2>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}
