import React from "react";
import { Button } from "primereact/button";

const AddToList = (props) => {
  return (
    <div className="prep-item">
      <Button label="➕" className="p-button-raised p-button-rounded" />
    </div>
  );
};

export default AddToList;
