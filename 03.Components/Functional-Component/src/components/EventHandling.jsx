import React, { useState } from "react";

function EventHandling() {
  // State for button click
  const [count, setCount] = useState(0);

  // State for input
  const [name, setName] = useState("");

  // Handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  // Handle input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Event Handling Example</h2>

      {/* Button click event */}
      <p>Button clicked: {count} times</p>
      <button onClick={handleClick}>Click Me</button>

      <hr />

      {/* Input change event */}
      <p>Entered Name: {name}</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}

export default EventHandling;
