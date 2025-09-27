import { useState } from "react";

function MultipleInputsForm() {
  // Single state object for all inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Handle changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the specific field using spread
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Data:
Username: ${formData.username}
Email: ${formData.email}
Password: ${formData.password}`);
    // Typically send formData to an API here
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h2>Multiple Inputs Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: "20px" }}>
        <h4>Live Preview:</h4>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password ? "********" : ""}</p>
      </div>
    </div>
  );
}

export default MultipleInputsForm;
