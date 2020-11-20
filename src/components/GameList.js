import React from "react";
import { EditableGameDetail } from "./EditableGameDetail";
import { GameDetailForm } from "./GameDetailForm";
import "../style/GameList.scss";
import Container from "react-bootstrap/Container";

export const GameList = (props) => {
  let test_date = new Date("2015-03-25");

  return (
    <Container fluid className="game-list d-flex justify-content-around">
      <EditableGameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={true}
        cost={0}
        date={test_date}
        players={"4-8"}
      />
      <EditableGameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={false}
        cost={0}
        date={test_date}
        players={"4-8"}
      />
      <EditableGameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={false}
        cost={0}
        date={test_date}
        players={"4-8"}
      />
      <EditableGameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={false}
        cost={0}
        date={test_date}
        players={"4-8"}
      />
      <EditableGameDetail
        title="Among Us"
        type="online"
        image="/images/among_us.jpg"
        name="User1"
        own={false}
        cost={0}
        date={test_date}
        players={"4-8"}
      />
      <div style={props.formOpen ? { display: "block" } : { display: "none" }}>
        <GameDetailForm disableEditForm={props.handleFormClose} />
      </div>
    </Container>
  );
};
