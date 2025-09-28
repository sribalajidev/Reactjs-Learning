import React from "react";

export default function SnapshotDemo({ title = "Snapshot Title" }) {
  return (
    <div data-testid="snapshot-demo">
      <h1>{title}</h1>
      <p>This is a snapshot test component</p>
    </div>
  );
}
