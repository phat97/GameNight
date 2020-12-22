import React, { useState } from "react";
import "../style/GameDetailForm.scss";
import { game_type } from "../constants/Contant.js";
import { FaUpload } from "react-icons/fa";
import { v4 } from "uuid";

export const GameDetailForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [image, setImage] = useState(props.image);
  const [uploadImageTitle, setUploadImageTitle] = useState("");
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
    setUploadImageTitle(e.target.files[0].name);
  };

  const handleOwnGame = (e) => {
    setOwn(e.target.checked);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCost = (e) => {
    setCost(e.target.value);
  };

  const handlePlayers = (e) => {
    setPlayers(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setUploadImageTitle("");
    setImage(null);
    setType(game_type.ONLINE);
    setOwn(false);
    setName("");
    setCost(0);
    setPlayers("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.formSubmit({
      _gameId: props.id || v4(),
      title: title || "Game Title",
      type: type,
      imageURI: image || "/images/default.jpg",
      own: own,
      name: name,
      cost: cost || 0,
      date: new Date(),
      players: players,
    });
    resetForm();
    props.disableEditForm();
  };

  const handleDelete = (e) => {
    props.disableEditForm();
    props.deleteGameDetail(props.id);
  };

  return (
    <div className="form-body">
      <form>
        <label>
          Game Title:
          <input type="text" name="title" value={title} onChange={handleTitleChange} />
        </label>
        <div className="radio-btn">
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
        <input
          type="file"
          accept="image/*"
          name="image"
          className="file"
          id={props.id ? props.id : "image-file"}
          onChange={handleFileSelected}
        />
        <label htmlFor={props.id ? props.id : "image-file"}>
          <FaUpload className="upload-icon" />
          {uploadImageTitle !== "" ? uploadImageTitle : "upload a file"}
        </label>

        <label>
          Do you own this game?
          <input type="Checkbox" checked={own} onChange={handleOwnGame}></input>
        </label>
        <label style={own ? { display: "block" } : { display: "none" }}>
          Owner:
          <input type="text" name="name" value={name} onChange={handleName} />
        </label>
        <label>
          Cost:
          <input type="text" pattern="[0-9]+" name="cost" className="small-input" value={cost} onChange={handleCost} />
        </label>
        <label>
          Number of Players
          <input
            type="text"
            name="players"
            placeholder="ie. 2-4"
            pattern="^[1-9]*-*[0-9]"
            className="small-input"
            value={players}
            onChange={handlePlayers}
          />
        </label>
        <div className="d-flex flex-row btn-container">
          <button className="form-btn submit-btn" type="submit" onClick={handleSubmit}>
            {props.id !== undefined ? "Update" : "Submit"}
          </button>
          <button className="form-btn cancel-btn" type="button" onClick={props.disableEditForm}>
            Cancel
          </button>
          <button
            style={props.id !== undefined ? { display: "block" } : { display: "none" }}
            className="form-btn delete-btn"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};
