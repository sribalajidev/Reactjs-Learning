import React, { useState } from "react";
import BasicButton from "../BasicButton/BasicButton";

export default function IntegrationDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="integration-count">{count}</h2>
      <BasicButton
        label="Add"
        onClick={() => setCount(count + 1)}
      />
      <BasicButton
        label="Subtract"
        onClick={() => setCount(count - 1)}
      />
    </div>
  );
}
