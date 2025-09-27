import { useState } from "react";

function BasicForms() {
  // State for controlled inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${name}\nEmail: ${email}`);
    // Here you would typically send data to an API
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Basic Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: "20px" }}>
        <h4>Live Preview:</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default BasicForms;
