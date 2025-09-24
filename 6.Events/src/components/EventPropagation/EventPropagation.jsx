import React from "react";

const EventPropagation = () => {
  const handleParentClick = () => {
    alert("Parent clicked (bubbled up)");
  };

  const handleChildClick = (e) => {
    // Prevent the click from bubbling up to the parent
    e.stopPropagation();
    alert("Child clicked (no bubbling)");
  };

  const handleLinkClick = (e) => {
    // Prevent default browser navigation
    e.preventDefault();
    alert("Link clicked but prevented default navigation");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Propagation Example</h2>

      {/* Parent element */}
      <div
        onClick={handleParentClick}
        style={{
          border: "2px solid #333",
          padding: "20px",
          width: "300px",
        }}
      >
        Parent Div (click me or child)
        <div
          onClick={handleChildClick}
          style={{
            background: "#e9ecef",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Child Div (stopPropagation)
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <a
          href="https://example.com"
          onClick={handleLinkClick}
          style={{
            display: "inline-block",
            padding: "10px",
            background: "#f8d7da",
            color: "#333",
            textDecoration: "none",
            marginTop: "10px",
          }}
        >
          Click Me (preventDefault)
        </a>
      </div>
    </div>
  );
};

export default EventPropagation;
