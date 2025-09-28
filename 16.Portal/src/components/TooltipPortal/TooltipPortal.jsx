import { useState } from "react";
import ReactDOM from "react-dom";

export default function TooltipPortal({ text, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const showTooltip = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
    setIsHovered(true);
  };

  const hideTooltip = () => setIsHovered(false);

  return (
    <>
      <span
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        {children}
      </span>

      {isHovered &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: `${coords.y}px`,
              left: `${coords.x}px`,
              transform: "translate(-50%, -100%)",
              backgroundColor: "#333",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "4px",
              fontSize: "0.85rem",
              zIndex: 9999,
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}