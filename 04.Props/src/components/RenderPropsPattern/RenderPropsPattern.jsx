import MouseTracker from "./MouseTracker";

function RenderPropsPattern() {
  return (
    <>
      <h2>Render Props Pattern Example</h2>

      {/* We pass a function as the `render` prop */}
      <MouseTracker render={({ x, y }) => (
        <p>The current mouse position is ({x}, {y})</p>
      )}
      />

      {/* Another usage of the same logic but different UI */}
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ color: "blue" }}>
            <h4>Custom UI:</h4>
            <p>X position is {x}, Y position is {y}</p>
          </div>
        )}
      />
    </>
  );
}

export default RenderPropsPattern;