import React from "react";
import "../style/Filter.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Filter = () => {
  let sortByItem = "Players";
  let sortByType = "Online";
  let sortByStatus = "Owned";
  return (
    <Row className="filter-row">
      <Col xs lg="auto">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Sort By: {sortByItem || "test"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Players</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Title</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cost</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col xs lg="auto">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Sort By: {sortByType || "test"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Online</Dropdown.Item>
            <Dropdown.Item href="#/action-2">In-person</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col xs lg="auto">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Sort By: {sortByStatus || "test"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Owned</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Not Owned</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};
