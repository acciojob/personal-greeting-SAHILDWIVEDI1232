import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "10px", fontSize: "18px" }}>
        {name && <span>Hello, {name}!</span>}
      </div>
    </div>
  );
};

export default PersonalizedGreeting;
