import React, { useState } from "react";
import { Filter } from "./Filter";
import { GameList } from "./GameList";
import { ToggleAdd } from "./ToggleAdd";
import "../style/Dashboard.scss";
import { sample_data } from "../constants/TestData";

export const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);

  const [games, setgames] = useState(sample_data);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };
  return (
    <div>
      <header className="d-flex justify-content-center">
        <h1 className="banner-title">Game Night</h1>
      </header>
      <Filter />
      <GameList games={games} formOpen={formOpen} handleFormClose={handleFormClose} />
      <ToggleAdd formOpen={formOpen} handleFormOpen={handleFormOpen} />
    </div>
  );
};
