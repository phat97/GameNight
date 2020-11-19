import React, { useState } from "react";
import "../style/GameDetailForm.scss";
import { game_type } from "../constants/Contant.js";

export const GameDetailForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [image, setImage] = useState(null);
  const [type, setType] = useState(props.type || game_type.ONLINE);
  const [own, setOwn] = useState(props.own || false);
  const [name, setName] = useState(props.name || "");
  const [cost, setCost] = useState(props.cost || 0);
  const [players, setPlayers] = useState(props.players || "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleGameType = (e) => {
    setType(e.target.value);
  };

  const handleFileSelected = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOwnGame = (e) => {
    setOwn(e.target.checked);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCost = (e) => {
    setCost(e.taget.value);
  };

  const handlePlayers = (e) => {
    setPlayers(e.target.value);
  };

  return (
    <div className="form-body">
      <form>
        <label>
          Game Title:
          <input type="text" name="title" defaultValue={title} onChange={handleTitleChange} />
        </label>
        <div>
          <label>
            Online
            <input
              type="radio"
              value="online"
              name="type"
              checked={type === game_type.ONLINE}
              onChange={handleGameType}
            ></input>
          </label>
          <label>
            In-Person
            <input
              type="radio"
              value="home"
              name="type"
              checked={type === game_type.HOME}
              onChange={handleGameType}
            ></input>
          </label>
        </div>
        <input type="file" accept="image/*" name="image" onChange={handleFileSelected} />
        <label>
          Do you own this game?
          <input type="Checkbox" checked={own} onChange={handleOwnGame}></input>
        </label>
        <label style={own ? { display: "block" } : { display: "none" }}>
          Owner:
          <input type="text" name="name" defaultValue={name} onchange={handleName} />
        </label>
        <label>
          Cost:
          <input type="number" name="cost" defaultValue={cost} onchange={handleCost} />
        </label>
        <label>
          Number of Players
          <input type="text" name="players" placeholder="ie. 2-4" defaultValue={players} onchange={handlePlayers} />
        </label>
        <button className="form-btn submit-btn" type="submit">
          Submit
        </button>
        <button className="form-btn cancel-btn" type="button" onClick={props.disableEditForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};
