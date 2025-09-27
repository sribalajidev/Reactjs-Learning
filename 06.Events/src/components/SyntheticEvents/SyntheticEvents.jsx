function SyntheticEvents() {
  // Click event
  const handleClick = (e) => {
    console.log("Synthetic event object:", e);
    console.log("Event type:", e.type);
    console.log("Event target:", e.target);
  };

  // Keyboard event
  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key);
  };

  // Focus event
  const handleFocus = (e) => {
    console.log("Input focused:", e.target.value);
  };

  return (
    <div>
      <h2>Synthetic Events Example</h2>

      {/* Click event */}
      <button onClick={handleClick}>Click Me</button>

      {/* Keyboard event */}
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
      />

      {/* Focus event */}
      <input
        type="text"
        placeholder="Focus here..."
        onFocus={handleFocus}
      />
    </div>
  );
}

export default SyntheticEvents;
