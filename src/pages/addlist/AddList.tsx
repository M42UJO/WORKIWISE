import React from "react";
import AddHead from "./components/AddHead";
import AddBody from "./components/AddBody";

const AddList: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <AddHead />
      <AddBody />
    </div>
  );
};

export default AddList;
