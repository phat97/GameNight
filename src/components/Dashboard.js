import React, { useState } from "react";
import { Filter } from "./Filter";
import { GameList } from "./GameList";
import { ToggleAdd } from "./ToggleAdd";
import "../style/Dashboard.scss";
import { sample_data } from "../constants/SampleData";
import { sort_type } from "../constants/Contant";
import * as Sorter from "../SortHelper";

export const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);

  const [games, setGames] = useState(sample_data);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleUpdateForm = (data) => {
    updateGameDetail(data);
  };

  const updateGameDetail = (data) => {
    setGames(
      games.map((game) => {
        if (game.id === data.id) {
          return Object.assign({}, game, {
            title: data.title,
            type: data.type,
            image: data.image,
            name: data.name,
            own: data.own,
            cost: data.cost,
            date: data.date,
            players: data.players,
          });
        } else {
          return game;
        }
      })
    );
  };

  const handleCreateGameDetail = (data) => {
    createNewGameDetail(data);
  };

  const createNewGameDetail = (data) => {
    setGames((games) => [...games, data]);
  };

  const handleDeleteGameDetail = (id) => {
    deleteGameDetail(id);
  };

  const deleteGameDetail = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const sortData = (sort) => {
    switch (sort) {
      case sort_type.PLAYERS:
        setGames(Sorter.sortByPlayers(games));
        break;
      case sort_type.TITLE:
        setGames(Sorter.sortByTitle(games));
        break;
      case sort_type.COST:
        setGames(Sorter.sortByCost(games));
        break;
      default:
        console.log("Something wrong with sorting");
        break;
    }
  };

  return (
    <div>
      <header className="d-flex justify-content-center">
        <h1 className="banner-title">Game Night</h1>
      </header>
      <Filter sortData={sortData} />
      <GameList
        games={games}
        formOpen={formOpen}
        handleFormClose={handleFormClose}
        handleCreateGameDetail={handleCreateGameDetail}
        handleUpdateForm={handleUpdateForm}
        handleDeleteGameDetail={handleDeleteGameDetail}
      />
      <ToggleAdd formOpen={formOpen} handleFormOpen={handleFormOpen} />
    </div>
  );
};
