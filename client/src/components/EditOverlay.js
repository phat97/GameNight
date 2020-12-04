import React from "react";
import "../style/EditOverlay.scss";
import { FaEdit } from "react-icons/fa";

export const EditOverlay = (props) => {
  if (props.active) {
    return (
      <div id="overlay" onClick={props.enableEditForm}>
        <p className="overlay-edit-icon">
          <FaEdit />
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};
