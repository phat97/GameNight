import React, { useState } from "react";
import { GameDetail } from "./GameDetail";
import { GameDetailForm } from "./GameDetailForm";

export const EditableGameDetail = (props) => {
  const [editFormOpen, setEditForm] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleEnableOverlay = () => {
    setOverlay(true);
  };
  const handleDisableOverlay = () => {
    setOverlay(false);
  };

  const handleEnableEditForm = () => {
    setEditForm(true);
  };
  const handleDisableEditForm = () => {
    setEditForm(false);
  };
  if (editFormOpen) {
    return (
      <div>
        <GameDetailForm
          id={props.id}
          title={props.title}
          type={props.type}
          image={props.image}
          own={props.own}
          name={props.name}
          cost={props.cost}
          date={props.date}
          players={props.players}
          disableEditForm={handleDisableEditForm}
          formSubmit={props.handleUpdateForm}
          deleteGameDetail={props.handleDeleteGameDetail}
        />
      </div>
    );
  } else {
    return (
      <div>
        <GameDetail
          id={props.id}
          title={props.title}
          type={props.type}
          image={props.image}
          name={props.name}
          own={props.own}
          cost={props.cost}
          date={props.date}
          players={props.players}
          handleEnableEditForm={handleEnableEditForm}
          handleEnableOverlay={handleEnableOverlay}
          handleDisableOverlay={handleDisableOverlay}
          overlay={overlay}
        />
      </div>
    );
  }
};
