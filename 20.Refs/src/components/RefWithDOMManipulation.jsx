import React, { useRef } from "react";

export default function RefWithDOMManipulation() {
  const boxRef = useRef(null);

  const changeColor = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor =
        boxRef.current.style.backgroundColor === "skyblue" ? "salmon" : "skyblue";
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Ref with DOM Manipulation Example</h2>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "skyblue",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Box
      </div>
      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );
}
