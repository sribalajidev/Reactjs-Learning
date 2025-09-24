import React, { useState } from "react";

const KeyboardEvents = () => {
  const [lastKey, setLastKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Handle key down
  const handleKeyDown = (e) => {
    console.log("Key Down:", e.key);
    setLastKey(`Key Down: ${e.key}`);
  };

  // Handle key up
  const handleKeyUp = (e) => {
    console.log("Key Up:", e.key);
    setLastKey(`Key Up: ${e.key}`);
  };

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Keyboard Events Example</h2>
      <p>Type something below and watch keyboard events in action:</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Type here..."
      />
      <p><strong>Last Key Event:</strong> {lastKey}</p>
      <p><strong>Current Input:</strong> {inputValue}</p>
    </div>
  );
};

export default KeyboardEvents;