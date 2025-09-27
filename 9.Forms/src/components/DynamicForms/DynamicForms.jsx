import { useState } from "react";

function DynamicForms() {
  // Array of field definitions
  const fieldsConfig = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mobile", label: "Mobile", type: "text", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    { name: "message", label: "Message", type: "textarea", required: false },
  ];

  const initialFormData = fieldsConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value, required) => {
    if (required && !value.trim()) return `${name} is required`;
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value))
      return "Enter a valid email";
    if (name === "mobile" && value && !/^\d{10}$/.test(value))
      return "Enter a valid 10-digit mobile";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldConfig = fieldsConfig.find((f) => f.name === name);
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value, fieldConfig.required),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = fieldsConfig.find((f) => f.name === name);

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, fieldConfig.required),
    }));
  };

  const isFormValid = () => {
    return (
      fieldsConfig.every(
        (field) =>
          !validateField(field.name, formData[field.name], field.required)
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fieldsConfig.forEach((field) => {
      newErrors[field.name] = validateField(
        field.name,
        formData[field.name],
        field.required
      );
    });
    setErrors(newErrors);
    setTouched(
      fieldsConfig.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );

    if (isFormValid()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Dynamic Forms Example</h2>
      <form onSubmit={handleSubmit}>
        {fieldsConfig.map((field) => (
          <div key={field.name}>
            <label>{field.label}:</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {touched[field.name] && errors[field.name] && (
              <p style={{ color: "red" }}>{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForms;
