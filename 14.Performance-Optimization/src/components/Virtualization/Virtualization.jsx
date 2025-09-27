// src/components/Virtualization/Virtualization.jsx
import { useState } from "react";

const ITEM_HEIGHT = 35; // height of each item
const WINDOW_HEIGHT = 500; // height of the scrollable container
const OVERSCAN = 10; // extra items rendered above/below viewport

export default function Virtualization() {
  const totalItems = 1000; // total number of items
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN, 0);
  const endIndex = Math.min(
    totalItems,
    Math.floor((scrollTop + WINDOW_HEIGHT) / ITEM_HEIGHT) + OVERSCAN
  );

  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(<ListItem key={i} index={i} />);
  }

  return (
    <div
      style={{
        height: `${WINDOW_HEIGHT}px`,
        overflowY: "auto",
        border: "2px solid #000",
        position: "relative",
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: `${totalItems * ITEM_HEIGHT}px`, position: "relative" }}>
        {visibleItems}
      </div>
    </div>
  );
}

function ListItem({ index }) {
  return (
    <div
      style={{
        height: `${ITEM_HEIGHT}px`,
        lineHeight: `${ITEM_HEIGHT}px`,
        position: "absolute",
        top: `${index * ITEM_HEIGHT}px`,
        width: "100%",
        textAlign: "center",
        backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      List Item {index + 1}
    </div>
  );
}
