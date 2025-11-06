import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Personalized Greeting</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      {/* Only show greeting when input is not empty */}
      {name && <h3 style={{ marginTop: "20px" }}>Hello, {name}!</h3>}
    </div>
  );
};

export default PersonalizedGreeting;
