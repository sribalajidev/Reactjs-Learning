import React, { useRef, forwardRef } from "react";

// Child component using forwardRef
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} placeholder="Type something..." />;
});

export default function ForwardRefDemo() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Access child input directly
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Forward Ref Example</h2>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}
