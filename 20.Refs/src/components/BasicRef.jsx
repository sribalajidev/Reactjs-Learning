import React, { useRef, useEffect } from "react";

export default function BasicRef() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // Focus the input on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    alert(`Input value is: ${inputRef.current.value}`);
    inputRef.current.value = ""; // Clear input
    inputRef.current.focus(); // Focus again
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Basic Ref Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleClick}>Show & Clear Input</button>
    </div>
  );
}
