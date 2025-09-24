import { useState } from "react";

function BasicEvents() {
  // Local state to demonstrate click events
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1); // Increment count
    console.log("Button clicked! Count is now:", count + 1);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Form submitted!");
  };

  return (
    <div>
      <h2>Basic Events Example</h2>

      {/* Button click event */}
      <button onClick={handleClick}>Click Me!</button>
      <p>Clicked {count} times</p>

      {/* Input change event */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />

      {/* Form submit event */}
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicEvents;
