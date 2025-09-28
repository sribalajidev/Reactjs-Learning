import { useState } from "react";
import ReactDOM from "react-dom";

export default function NotificationPortal() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const id = Date.now();
    setNotifications((prev) => [
      ...prev,
      { id, message: `Notification at ${new Date().toLocaleTimeString()}` },
    ]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <div>
      <h2>Notification Portal Example</h2>
      <button onClick={addNotification}>Show Notification</button>

      {/* Render notifications in the portal-root */}
      {ReactDOM.createPortal(
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
          {notifications.map((notification) => (
            <div
              key={notification.id}
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                minWidth: "200px",
              }}
            >
              {notification.message}
            </div>
          ))}
        </div>,
        document.getElementById("portal-root")
      )}
    </div>
  );
}