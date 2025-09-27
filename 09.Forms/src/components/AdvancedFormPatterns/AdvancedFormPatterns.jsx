import { useState } from "react";

// Step 1 fields validation helper
const validateStep1 = (data) => {
  return (
    data.firstName.trim() &&
    data.lastName.trim() &&
    /\S+@\S+\.\S+/.test(data.email) &&
    /^\d{10}$/.test(data.phone) &&
    data.gender &&
    data.passportFile
  );
};

// Step 2 fields validation helper
const validateStep2 = (data) => {
  return data.organization.trim() && data.startDate && (data.presentEmployer || data.endDate);
};

// Step 3 fields validation helper
const validateStep3 = (data) => {
  return data.resumeFile && data.message.trim() && data.consent;
};

export default function AdvancedFormPatterns() {
  const [showPOC, setShowPOC] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    passportFile: null,
    organization: "",
    startDate: "",
    endDate: "",
    presentEmployer: false,
    resumeFile: null,
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        // If presentEmployer is checked, clear endDate
        ...(name === "presentEmployer" && checked ? { endDate: "" } : {})
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    setShowPOC(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      passportFile: null,
      organization: "",
      startDate: "",
      endDate: "",
      presentEmployer: false,
      resumeFile: null,
      message: "",
      consent: false,
    });
  };

  return (
    <div>
      <button onClick={() => setShowPOC(true)}>Click here to see Advance POC</button>

      {showPOC && (
        <div style={overlayStyle}>
          <div style={formContainer}>
            <button style={closeBtn} onClick={() => setShowPOC(false)}>Go Back</button>
            <h2>Multi-Step Job Application Form</h2>

            {step === 1 && (
              <div style={stepStyle}>
                <h3>Step 1: Personal Details</h3>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone (10 digits)" value={formData.phone} onChange={handleChange} />
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="file" name="passportFile" onChange={handleChange} />
                <button onClick={handleNext} disabled={!validateStep1(formData)}>Next</button>
              </div>
            )}

            {step === 2 && (
              <div style={stepStyle}>
                <h3>Step 2: Employment Details</h3>
                <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} disabled={formData.presentEmployer} />
                <label>
                  <input type="checkbox" name="presentEmployer" checked={formData.presentEmployer} onChange={handleChange} /> Present Employer
                </label>
                <div>
                  <button onClick={handlePrev}>Prev</button>
                  <button onClick={handleNext} disabled={!validateStep2(formData)}>Next</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={stepStyle}>
                <h3>Step 3: Upload Resume & Consent</h3>
                <input type="file" name="resumeFile" accept=".pdf" onChange={handleChange} />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                <label>
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} /> I agree to terms
                </label>
                <div>
                  <button onClick={handlePrev}>Prev</button>
                  <button onClick={handleSubmit} disabled={!validateStep3(formData)}>Submit</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  overflowY: "auto",
  padding: "20px"
};

const formContainer = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const closeBtn = {
  alignSelf: "flex-end",
  marginBottom: "10px",
  padding: "5px 10px",
  cursor: "pointer"
};

const stepStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};
