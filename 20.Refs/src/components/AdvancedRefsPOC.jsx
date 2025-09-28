import React, { useRef, useState, forwardRef } from "react";

// Child Input using forwardRef
const DynamicInput = forwardRef(({ placeholder }, ref) => (
  <input
    ref={ref}
    placeholder={placeholder}
    style={{ display: "block", marginBottom: "10px", padding: "5px", width: "300px" }}
  />
));

export default function AdvancedRefsPOC() {
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);
  const inputRefs = useRef([]);

  const addInput = () => {
    const newId = inputs.length + 1;
    setInputs([...inputs, { id: newId, value: "" }]);
  };

  const focusLastInput = () => {
    const lastIndex = inputRefs.current.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  };

  const handleChange = (index, e) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].value = e.target.value;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    alert("Form Values: " + JSON.stringify(inputs.map((i) => i.value)));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Advanced Refs POC – Dynamic Form</h2>

      {inputs.map((input, index) => (
        <DynamicInput
          key={input.id}
          placeholder={`Input #${input.id}`}
          ref={(el) => (inputRefs.current[index] = el)} // Callback ref for dynamic inputs
          value={input.value}
          onChange={(e) => handleChange(index, e)}
        />
      ))}

      <button onClick={addInput} style={{ marginRight: "10px", padding: "5px 10px" }}>
        Add Input
      </button>
      <button onClick={focusLastInput} style={{ marginRight: "10px", padding: "5px 10px" }}>
        Focus Last Input
      </button>
      <button onClick={handleSubmit} style={{ padding: "5px 10px" }}>
        Submit
      </button>
    </div>
  );
}
