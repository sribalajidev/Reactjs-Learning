import useToggle from "./useToggle";

export default function UseToggleHook() {
  const [isVisible, toggleVisibility] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use Toggle Hook</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>This text is toggled on/off.</p>}
      </div>

      <div>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Disable" : "Enable"} Dark Mode
        </button>
        <div
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: isDarkMode ? "#333" : "#eee",
            color: isDarkMode ? "#fff" : "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Box
        </div>
      </div>
    </div>
  );
}
