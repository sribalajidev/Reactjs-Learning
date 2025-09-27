import { useState, memo } from "react";

// Child component wrapped with React.memo to prevent unnecessary re-renders
const Child = memo(({ count }) => {
  console.log("Child component rendered");
  return <p>Child Count: {count}</p>;
});

export default function ReactMemo() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>React.memo Example</h2>

      {/* Parent Counter */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setParentCount(parentCount + 1)}>
          Increment Parent Count
        </button>
        <p>Parent Count: {parentCount}</p>
      </div>

      {/* Child Counter */}
      <div>
        <button onClick={() => setChildCount(childCount + 1)}>
          Increment Child Count
        </button>
        {/* Memoized Child */}
        <Child count={childCount} />
      </div>
    </div>
  );
}
