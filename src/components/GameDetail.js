import React from "react";
import { GameDetailForm } from "./GameDetailForm";
import "../style/GameDetail.scss";
import { game_type } from "../constants/Contant.js";
import { FaGlobe, FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const GameDetail = (props) => {
  let date = props.date;
  const type_icon = props.type === game_type.ONLINE ? <FaGlobe /> : <FaHome />;
  return (
    <div className="game-detail">
      <div className="d-flex flex-row justify-content-between">
        <h4 className="game-title">{props.title}</h4>
        <div className="game-type">{type_icon}</div>
      </div>

      <div className="d-flex flex-row justify-content-center">
        <img className="game-image" src={process.env.PUBLIC_URL + props.image} alt={props.title} />
      </div>
      <p className="game-text">{props.own ? `Owned by: ${props.name}` : `Anyone own this?`}</p>
      <p className="game-text">
        Cost: <b>{props.cost > 0 ? props.cost : "Free"}</b>
      </p>
      <div className="d-flex flex-row justify-content-between align-items-end">
        <p className="date-created align-self-end">{date.toLocaleString()}</p>

        <p className="num-player game-text">
          <BsPeopleFill className="people-icon" />
          {props.player}
        </p>
      </div>
    </div>
  );
};
