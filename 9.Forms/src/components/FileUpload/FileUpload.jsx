import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null); // State to store selected file
  const [preview, setPreview] = useState(null); // State to store file preview
  const [error, setError] = useState(""); // State to store validation error

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the first file
    if (!selectedFile) return;

    // Validate file type (accept only images)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Invalid file type. Only JPG, PNG, GIF allowed.");
      setFile(null);
      setPreview(null);
      return;
    }

    // Validate file size (optional, e.g., max 2MB)
    const maxSize = 2 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError("File size exceeds 2MB limit.");
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile); // Store valid file
    setPreview(URL.createObjectURL(selectedFile)); // Generate preview
    setError(""); // Clear error
  };

  const handleUpload = () => {
    if (!file) return alert("No valid file selected"); // Check if file exists

    console.log("Uploading file:", file);

    // Real-world: send file to API using FormData
    // const formData = new FormData();
    // formData.append("file", file);
    // fetch("YOUR_API_URL", { method: "POST", body: formData })
  };

  return (
    <div>
      <h2>File Upload with Validation</h2>
      <input type="file" onChange={handleChange} /> {/* Select file */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error */}
      {preview && <img src={preview} alt="Preview" width={100} />} {/* Preview */}
      <button onClick={handleUpload} disabled={!file}>Upload</button> {/* Disable button if invalid */}
    </div>
  );
}
