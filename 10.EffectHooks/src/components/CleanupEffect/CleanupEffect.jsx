import { useState, useEffect } from "react";

export default function CleanupEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Setting up interval");

    // setInterval to increment count every second
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval);
    };
  }, []); // run once, cleanup on unmount

  // Another example: window resize listener
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Cleanup Effect Example</h2>
      <p>Count increments every second: {count}</p>
      <p>Open console to see setup and cleanup logs</p>
    </div>
  );
}
