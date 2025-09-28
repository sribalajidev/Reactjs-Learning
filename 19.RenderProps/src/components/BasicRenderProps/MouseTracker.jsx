import { useState } from "react";

function MouseTracker({ render }) {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
  return (
    <>
      <div
        style={{
          height: "200px",
          border: "2px dashed gray",
          textAlign: "center",
          padding: "10px",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Call the render function passed from parent */}
        {render(mousePosition)}
      </div>
    </>
  );
}

export default MouseTracker;