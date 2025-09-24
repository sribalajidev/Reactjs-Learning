// Tabs.jsx
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const tabs = ["Tab1", "Tab2", "Tab3"];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Tabs Example</h2>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              marginRight: "10px",
              background: activeTab === tab ? "#007BFF" : "#eee",
              color: activeTab === tab ? "#fff" : "#000",
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "Tab1" && <p>Content for Tab 1</p>}
        {activeTab === "Tab2" && <p>Content for Tab 2</p>}
        {activeTab === "Tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}
