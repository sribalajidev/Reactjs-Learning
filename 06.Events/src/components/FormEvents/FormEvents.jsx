import { useState } from "react";

const FormEvents = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
    console.log("Submitted Data: ", formData);
    // You can send data to API here
  };

  return (
    <div>
      <h2>Form Events Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        <strong>Live Preview:</strong> {formData.name} - {formData.email}
      </p>
    </div>
  );
};

export default FormEvents;
