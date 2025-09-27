import React, { Profiler, useState } from "react";

export default function ProfilerComponent() {
  const [count, setCount] = useState(0);

  // Callback function to capture render timings
  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" or "update"
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(`Profiler [${id}] - ${phase}`);
    console.log(`Actual duration: ${actualDuration.toFixed(2)}ms`);
    console.log(`Base duration: ${baseDuration.toFixed(2)}ms`);
    console.log(`Start time: ${startTime.toFixed(2)}ms`);
    console.log(`Commit time: ${commitTime.toFixed(2)}ms`);
    console.log("Interactions:", interactions);
    console.log("-------------------------");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>React Profiler Example</h2>
      <Profiler id="CounterComponent" onRender={onRenderCallback}>
        <Counter count={count} setCount={setCount} />
      </Profiler>
    </div>
  );
}

function Counter({ count, setCount }) {
  // Simulate expensive rendering
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
