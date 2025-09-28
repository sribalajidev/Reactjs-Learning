import ReactDOM from "react-dom";

export default function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={onClose} // closes modal when background clicked
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside content
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // renders outside root
  );
}