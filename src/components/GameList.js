import React from "react";
import { GameDetail } from "./GameDetail";
import "../style/GameList.scss";
import Container from "react-bootstrap/Container";

export const GameList = () => {
  let test_date = new Date("2015-03-25");
  return (
    <Container fluid className="game-list d-flex justify-content-around">
      <GameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={false}
        cost={0}
        date={test_date}
        player={4}
      />
    </Container>
  );
};
