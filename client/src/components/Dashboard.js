import React, { useState, useEffect } from "react";
import { Filter } from "./Filter";
import { GameList } from "./GameList";
import { ToggleAdd } from "./ToggleAdd";
import "../style/Dashboard.scss";
import { sample_data } from "../SampleData";
import { sort_type } from "../constants/Contant";
import * as Sorter from "../helper/SortHelper";
const axios = require('axios').default;

export const Dashboard = () => {

  /* States */
  const [formOpen, setFormOpen] = useState(false);
  const [games, setGames] = useState([]);

  /* Hooks */

  // Runs only once on load - Grab all data
  useEffect(() => {
    axios.get('/api/game/list?id=1').then((res) => {
      setGames(res.data[0].gamelist)
    }).catch((err) => {
      console.log(err);
      console.log("Using sample_data");
      setGames(sample_data);
    })
  }, [])



  /* Function handlers */
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
        if (game._gameId === data._gameId) {
          return Object.assign({}, game, {
            title: data.title,
            type: data.type,
            imageURI: data.imageURI,
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
    setGames(games.filter((game) => game._gameId !== id));
  };

  const sortData = (sort, sortOrder) => {
    switch (sort) {
      case sort_type.PLAYERS:
        setGames(Sorter.sortByPlayers(games, sortOrder));
        break;
      case sort_type.TITLE:
        setGames(Sorter.sortByTitle(games, sortOrder));
        break;
      case sort_type.COST:
        setGames(Sorter.sortByCost(games, sortOrder));
        break;
      default:
        console.log("Something wrong with sorting");
        break;
    }
  };

  /* Render */
  return (
    <div>
      <header className="d-flex justify-content-center">
        <h1 className="banner-title no-select">Game Night</h1>
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
