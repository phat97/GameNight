import React from "react";
import { GrAddCircle } from "react-icons/gr";
import "../style/ToggleAdd.scss";

export const ToggleAdd = (props) => {
  return (
    <div className="toggle-add" style={props.formOpen ? { display: "none" } : { display: "block" }}>
      <GrAddCircle onClick={props.handleFormOpen} className="toggle-add-btn" />
    </div>
  );
};
