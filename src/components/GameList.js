import React from "react";
import { EditableGameDetail } from "./EditableGameDetail";
import { GameDetailForm } from "./GameDetailForm";
import "../style/GameList.scss";
import Container from "react-bootstrap/Container";

export const GameList = (props) => {
  const gameDetails = props.games.map((game) => (
    <EditableGameDetail
      id={game.id}
      key={game.id}
      title={game.title}
      type={game.type}
      image={game.image}
      name={game.name}
      own={game.own}
      cost={game.cost}
      date={game.date}
      players={game.players}
    />
  ));

  return (
    <Container fluid className="game-list d-flex justify-content-around">
      {gameDetails}
      <div style={props.formOpen ? { display: "block" } : { display: "none" }}>
        <GameDetailForm disableEditForm={props.handleFormClose} />
      </div>
    </Container>
  );
};
