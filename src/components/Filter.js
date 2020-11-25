import React, { useState } from "react";
import "../style/Filter.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import { sort_type } from "../constants/Contant";

export const Filter = (props) => {
  const [sortByItem, setSortByItem] = useState(sort_type.PLAYERS);

  const handleSortData = (sort) => {
    setSortByItem(sort);
    props.sortData(sort);
  };

  return (
    <div className="filter-row d-flex flex-row">
      <Col xs lg="auto">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Sort By: {sortByItem}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortData(sort_type.PLAYERS)}>{sort_type.PLAYERS}</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortData(sort_type.TITLE)}>{sort_type.TITLE}</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortData(sort_type.COST)}>{sort_type.COST}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </div>
  );
};
