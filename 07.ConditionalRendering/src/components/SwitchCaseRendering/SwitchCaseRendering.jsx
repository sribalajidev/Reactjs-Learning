import { useState } from "react";

function SwitchCaseRendering() {
  const [status, setStatus] = useState("pending");

  const renderContent = () => {
    switch (status) {
      case "pending":
        return <p>Status: Pending. Please wait.</p>;
      case "approved":
        return <p>Status: Approved! You can proceed.</p>;
      case "rejected":
        return <p>Status: Rejected. Contact support.</p>;
      default:
        return <p>Status: Unknown.</p>;
    }
  };

  return (
    <div>
      <h2>Switch Case Rendering Example</h2>
      {renderContent()}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setStatus("pending")}>Pending</button>
        <button onClick={() => setStatus("approved")}>Approved</button>
        <button onClick={() => setStatus("rejected")}>Rejected</button>
      </div>
    </div>
  );
}

export default SwitchCaseRendering;