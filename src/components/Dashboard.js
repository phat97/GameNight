import React from "react";
import { Filter } from "./Filter";
import { GameList } from "./GameList";
import { ToggleAdd } from "./ToggleAdd";

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Filter />
      <GameList />
      <ToggleAdd />
    </div>
  );
};
