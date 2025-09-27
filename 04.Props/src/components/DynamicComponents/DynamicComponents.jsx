// Child Components
function Chart() {
  return <div style={{ border: "1px solid blue", padding: "10px" }}>📊 Chart Component</div>;
}

function Table() {
  return <div style={{ border: "1px solid green", padding: "10px" }}>📋 Table Component</div>;
}

function Form() {
  return <div style={{ border: "1px solid red", padding: "10px" }}>📝 Form Component</div>;
}

// DynamicContainer Component
function DynamicContainer({ ComponentType }) {
  // Render whatever component type is passed as prop
  return (
    <div style={{ margin: "10px" }}>
      <h4>Dynamic Container:</h4>
      <ComponentType />
    </div>
  );
}

// Parent Component
function DynamicComponents() {
  return (
    <div>
      <h2>Dynamic Components Example</h2>

      <DynamicContainer ComponentType={Chart} />
      <DynamicContainer ComponentType={Table} />
      <DynamicContainer ComponentType={Form} />
    </div>
  );
}

export default DynamicComponents;