import React from "react";
import "../style/EditOverlay.scss";
import { FaEdit } from "react-icons/fa";

export const EditOverlay = (props) => {
  const test = () => {
    console.log("Mouse Click Overlay");
  };

  if (props.active) {
    return (
      <div id="overlay" onClick={test}>
        <p className="overlay-edit-icon">
          <FaEdit />
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};
