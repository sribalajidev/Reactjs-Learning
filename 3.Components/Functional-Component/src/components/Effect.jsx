import React, { useState, useEffect } from "react";

function Effect({ start = 10 }) {
  const [seconds, setSeconds] = useState(start);

  useEffect(() => {
    // This acts like componentDidMount + componentDidUpdate
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // Cleanup function acts like componentWillUnmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array => runs only once (like componentDidMount)

  useEffect(() => {
    // This effect runs whenever seconds changes
    if (seconds === 0) {
      alert("Time's up!");
    }
  }, [seconds]); // Dependency array ensures it runs only when seconds updates

  return (
    <div>
      <h2>Countdown Timer with useEffect</h2>
      <p>Seconds left: {seconds}</p>
    </div>
  );
}

export default Effect;
