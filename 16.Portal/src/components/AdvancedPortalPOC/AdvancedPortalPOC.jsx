import React, { useState } from "react";
import ReactDOM from "react-dom";

// ============ MODAL PORTAL COMPONENT ============
function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9998,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "5px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

// ============ TOOLTIP PORTAL COMPONENT ============
function TooltipPortal({ position, children }) {
  if (!position) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: position.y + 10,
        left: position.x + 10,
        background: "#333",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "3px",
        fontSize: "12px",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.getElementById("portal-root")
  );
}

// ============ NOTIFICATION PORTAL COMPONENT ============
function NotificationPortal({ notifications }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999,
      }}
    >
      {notifications.map((note) => (
        <div
          key={note.id}
          style={{
            backgroundColor: note.type === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            minWidth: "200px",
          }}
        >
          {note.message}
        </div>
      ))}
    </div>,
    document.getElementById("portal-root")
  );
}

// ============ MAIN POC COMPONENT ============
export default function AdvancedPortalPOC() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tooltipPos, setTooltipPos] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <div>
      <h2>Advanced Portal POC</h2>
      <p>
        This demonstrates <b>Modal</b>, <b>Tooltip</b> and <b>Notifications</b>{" "}
        all using portals.
      </p>

      {/* OPEN MODAL BUTTON */}
      <button
        onClick={() => {
          setModalOpen(true);
          showNotification("Opened Modal!", "success");
        }}
        style={{ marginRight: "10px" }}
      >
        Open Modal
      </button>

      {/* HOVER FOR TOOLTIP */}
      <span
        style={{
          padding: "5px 10px",
          background: "#eee",
          cursor: "pointer",
          borderRadius: "3px",
        }}
        onMouseEnter={(e) =>
          setTooltipPos({ x: e.clientX, y: e.clientY, text: "This is tooltip" })
        }
        onMouseMove={(e) =>
          setTooltipPos({ x: e.clientX, y: e.clientY, text: "This is tooltip" })
        }
        onMouseLeave={() => setTooltipPos(null)}
      >
        Hover me for tooltip
      </span>

      {/* Trigger notification */}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => showNotification("Saved successfully!", "success")}
      >
        Show Notification
      </button>

      {/* MODAL PORTAL */}
      <ModalPortal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h3>Edit Profile</h3>
        <p>You can put any form or UI here!</p>
        <button
          onClick={() => {
            setModalOpen(false);
            showNotification("Profile saved!", "success");
          }}
        >
          Save Changes
        </button>
      </ModalPortal>

      {/* TOOLTIP PORTAL */}
      <TooltipPortal position={tooltipPos}>
        {tooltipPos && tooltipPos.text}
      </TooltipPortal>

      {/* NOTIFICATION PORTAL */}
      <NotificationPortal notifications={notifications} />
    </div>
  );
}