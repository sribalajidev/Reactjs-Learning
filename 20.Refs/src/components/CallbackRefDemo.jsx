import React, { useState } from "react";

export default function CallbackRefDemo() {
  const [inputValue, setInputValue] = useState("");
  let inputElement = null;

  const setInputRef = (element) => {
    inputElement = element;
  };

  const focusInput = () => {
    if (inputElement) inputElement.focus();
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Callback Ref Demo</h2>
      <input
        type="text"
        ref={setInputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
