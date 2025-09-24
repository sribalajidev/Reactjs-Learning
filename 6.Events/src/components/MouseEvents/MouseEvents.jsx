import { useState } from "react";

const MouseEvents = () => {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  // Mouse enter
  const handleMouseEnter = () => {
    setHoverStatus(true);
    setMessage("Mouse Entered the box!");
  };

  // Mouse leave
  const handleMouseLeave = () => {
    setHoverStatus(false);
    setMessage("Mouse Left the box!");
  };

  // Click
  const handleClick = () => {
    setClickCount(clickCount + 1);
    setMessage(`Box clicked ${clickCount + 1} time(s)!`);
  };

  // Double click
  const handleDoubleClick = () => {
    setMessage("Box double-clicked!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mouse Events Example</h2>
      <div
        style={{
          width: "250px",
          height: "150px",
          background: hoverStatus ? "#d1e7dd" : "#f8d7da",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #ccc",
          cursor: "pointer",
          userSelect: "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        Hover / Click / Double Click
      </div>
      <p><strong>Status:</strong> {message}</p>
    </div>
  );
};

export default MouseEvents;