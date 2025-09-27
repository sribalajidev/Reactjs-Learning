import React, { useState, useEffect } from "react"; // Import React and hooks

function POC({ start = 10 }) {
  const [seconds, setSeconds] = useState(start); // State to track countdown seconds
  const [isRunning, setIsRunning] = useState(true); // State to track if timer is running

  // useEffect handles countdown and acts like componentDidMount / componentDidUpdate
  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1); // Decrement seconds every 1 sec
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup: stops interval when component unmounts or updates
  }, [isRunning, seconds]); // Dependencies: re-run effect when seconds or isRunning changes

  // Event handlers
  const pauseTimer = () => setIsRunning(false); // Pause countdown
  const resumeTimer = () => setIsRunning(true); // Resume countdown
  const resetTimer = () => {
    setSeconds(start); // Reset seconds to initial start value
    setIsRunning(true); // Start timer again
  };

  return (
    <div>
      <h2>Countdown Timer POC</h2>
      <p>Seconds left: {seconds}</p> {/* Display current seconds */}

      {/* Buttons to control timer */}
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resumeTimer} disabled={isRunning || seconds === 0}>
        Resume
      </button>
      <button onClick={resetTimer}>Reset</button>

      {/* Conditional rendering when timer ends */}
      {seconds === 0 && <p>⏰ Time's up!</p>}
    </div>
  );
}

export default POC;
