// MultipleState.jsx
import { useState } from "react";

export default function MultipleState() {
  // Independent state variables
  const [name, setName] = useState("");         // Stores user input for name
  const [age, setAge] = useState(0);            // Stores user input for age
  const [isSubscribed, setIsSubscribed] = useState(false); // Boolean state

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Multiple State Variables Example</h2>

      {/* Name Input */}
      <div style={{ marginBottom: "10px" }}>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      {/* Age Input */}
      <div style={{ marginBottom: "10px" }}>
        <label>Age: </label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(Number(e.target.value))} 
        />
      </div>

      {/* Subscription Checkbox */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input 
            type="checkbox" 
            checked={isSubscribed} 
            onChange={() => setIsSubscribed(!isSubscribed)} 
          />
          Subscribe
        </label>
      </div>

      {/* Display State */}
      <p>
        User Info: {name ? name : "N/A"} - {age} years old - {isSubscribed ? "Subscribed" : "Not Subscribed"}
      </p>
    </div>
  );
}
