import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    message: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        return /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Enter a valid email address";
      case "mobile":
        return /^\d{10}$/.test(value) ? "" : "Enter a valid 10-digit mobile number";
      case "password":
        return value.length >= 6 ? "" : "Password must be at least 6 characters";
      case "confirmPassword":
        return value === formData.password ? "" : "Passwords do not match";
      case "message":
        return value.trim() ? "" : "Message is required";
      case "gender":
        return value ? "" : "Please select gender";
      case "terms":
        return value ? "" : "You must accept terms";
      default:
        return "";
    }
  };

  // Handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, fieldValue),
      }));
    }
  };

  // Handle blur (mark field as touched)
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.password &&
      formData.confirmPassword &&
      formData.message &&
      formData.gender &&
      formData.terms &&
      Object.values(errors).every((err) => !err)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all fields as touched to show errors if any
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate all fields
    const allErrors = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: validateField(key, formData[key]) }),
      {}
    );
    setErrors(allErrors);

    if (isFormValid()) {
      alert("Form submitted successfully!");
      console.log(formData);
      // reset form if needed
      setFormData({ name: "", email: "", mobile: "", password: "", confirmPassword: "", message: "", gender: "", terms: false });
    }
  };

  return (
    <div>
      <h2>Form Validation Example</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.mobile && errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Female
          </label>
          {touched.gender && errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        {/* Terms */}
        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Accept Terms
          </label>
          {touched.terms && errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>

        {/* Submit */}
        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
