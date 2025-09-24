import { useState } from "react";

const AdvancedPatterns = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Reusable event handler example
  const handleClick = (message) => {
    alert(message);
  };

  // Callback prop example
  const ButtonWithCallback = ({ onClick, label }) => {
    return <button onClick={() => onClick(label)}>{label}</button>;
  };

  // Render prop example
  const RenderPropComponent = ({ render }) => {
    return <div style={{ marginTop: "10px" }}>{render()}</div>;
  };

  if (showAdvanced) {
    return (
      <div style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "400px" }}>
          <h2>Advanced Event Patterns</h2>

          {/* Callback prop usage */}
          <ButtonWithCallback onClick={handleClick} label="Click me with callback prop" />

          {/* Render prop usage */}
          <RenderPropComponent render={() => <p style={{ marginTop: "10px" }}>Hello from render prop!</p>} />

          <button
            onClick={() => setShowAdvanced(false)}
            style={{ marginTop: "20px", padding: "5px 10px" }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setShowAdvanced(true)}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        To See Advanced Event Patterns Click Here
      </button>
    </div>
  );
};

export default AdvancedPatterns;
