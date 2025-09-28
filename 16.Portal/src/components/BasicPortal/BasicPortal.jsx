import ReactDOM from "react-dom";

export default function BasicPortal() {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      This is rendered using <b>React Portal</b> outside the root DOM!
    </div>,
    document.getElementById("portal-root") // target DOM node
  );
}