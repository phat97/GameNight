import React from "react";
import { Filter } from "./Filter";
import { GameList } from "./GameList";
import { ToggleAdd } from "./ToggleAdd";
import "../style/Dashboard.scss";

export const Dashboard = () => {
  return (
    <div>
      <header className="d-flex justify-content-center">
        <h1 className="banner-title">Game Night</h1>
      </header>
      <Filter />
      <GameList />
      <ToggleAdd />
    </div>
  );
};
