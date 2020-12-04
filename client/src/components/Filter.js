import React, { useState, useEffect } from "react";
import "../style/Filter.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { sort_type } from "../constants/Contant";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

export const Filter = (props) => {
  const [sortByItem, setSortByItem] = useState(sort_type.TITLE);
  const [sortAscending, setSortAscending] = useState(true);

  const handleSortData = (sort) => {
    setSortByItem(sort);
    props.sortData(sort, sortAscending);
  };

  // This runs only once on page load to sort by Title ascending (A-Z)
  useEffect(() => {
    props.sortData(sort_type.TITLE, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sort each time ascending/descending value is changed.
  useEffect(() => {
    handleSortData(sortByItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortAscending]);

  const handleSortOrder = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div className="filter-row d-flex flex-row">
      <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic">
          Sort By: {sortByItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSortData(sort_type.TITLE)}>{sort_type.TITLE}</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortData(sort_type.PLAYERS)}>{sort_type.PLAYERS}</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortData(sort_type.COST)}>{sort_type.COST}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="sort-icon " onClick={handleSortOrder}>
        {sortAscending ? <HiSortAscending /> : <HiSortDescending />}
      </div>
    </div>
  );
};
