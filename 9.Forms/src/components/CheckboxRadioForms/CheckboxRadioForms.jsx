import { useState } from "react";

function CheckboxRadioForms() {
  // Checkbox group (skills)
  const [skills, setSkills] = useState([]);

  // Radio group (contact preference)
  const [contactMethod, setContactMethod] = useState("");

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add skill if checked
      setSkills((prev) => [...prev, value]);
    } else {
      // Remove skill if unchecked
      setSkills((prev) => prev.filter((skill) => skill !== value));
    }
  };

  // Handle radio change
  const handleRadioChange = (e) => {
    setContactMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:
Skills: ${skills.join(", ")}
Preferred Contact: ${contactMethod}`);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h2>Checkbox and Radio Forms</h2>
      <form onSubmit={handleSubmit}>
        {/* Checkbox Group */}
        <fieldset style={{ marginBottom: "15px" }}>
          <legend>Select Your Skills (multiple allowed):</legend>
          <label>
            <input
              type="checkbox"
              value="React"
              onChange={handleCheckboxChange}
              checked={skills.includes("React")}
            />
            React
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              onChange={handleCheckboxChange}
              checked={skills.includes("JavaScript")}
            />
            JavaScript
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="CSS"
              onChange={handleCheckboxChange}
              checked={skills.includes("CSS")}
            />
            CSS
          </label>
        </fieldset>

        {/* Radio Group */}
        <fieldset style={{ marginBottom: "15px" }}>
          <legend>Preferred Contact Method (choose one):</legend>
          <label>
            <input
              type="radio"
              name="contact"
              value="Email"
              onChange={handleRadioChange}
              checked={contactMethod === "Email"}
            />
            Email
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="contact"
              value="Phone"
              onChange={handleRadioChange}
              checked={contactMethod === "Phone"}
            />
            Phone
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="contact"
              value="WhatsApp"
              onChange={handleRadioChange}
              checked={contactMethod === "WhatsApp"}
            />
            WhatsApp
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: "20px" }}>
        <h4>Live Preview:</h4>
        <p>Skills: {skills.join(", ") || "None selected"}</p>
        <p>Preferred Contact: {contactMethod || "None selected"}</p>
      </div>
    </div>
  );
}

export default CheckboxRadioForms;
