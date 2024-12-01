import React from "react";

const AddHead: React.FC = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>In User's Workspace</h2>
      <input
        type="text"
        placeholder="Please enter document name"
        style={{
          width: "30%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default AddHead;
