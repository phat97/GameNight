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
  const [userId, setUserId] = "1";
  const [localData, setLocalData] = useState(false);


  /* Hooks */
  // Runs only once on load - Grab all data
  useEffect(() => {
    axios.get('/api/game/list?id=1')
      .then((res) => {
        setGames(res.data[0].gamelist);
      }).catch((err) => {
        console.log(err);
        console.log("Using sample_data");
        setGames(sample_data);
        setLocalData(true);
      })
  }, [])


  /* Function handlers */
  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleUpdateForm = (data, upload) => {
    updateGameDetail(data, upload);
  };

  const handleDeleteGameDetail = (id) => {
    deleteGameDetail(id);
  };

  const handleCreateGameDetail = (data) => {
    createNewGameDetail(data);
  };


  /* CRUD Functions */
  const createNewGameDetail = (data) => {
    if (localData) {
      setGames((games) => [...games, data]);
    } else {
      const formData = new FormData();
      formData.append("image", data.imageURI);
      formData.append("data", JSON.stringify({ _id: userId, gamelist: data }));
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
      axios.post(`/api/game/list/add`, formData, config)
        .then((res) => {
          data.imageURI = res.data;
          setGames((games) => [...games, data]);
        }).catch((err) => {
          console.log(`Failed to add: ${err}`)
        })
    }

  };

  const updateGameDetail = (data) => {
    if (localData) {
      setGames(
        games.map((game) => {
          if (game._gameId === data._gameId) {
            return Object.assign({}, game, {
              title: data.title,
              type: data.type,
              imageURI: "/images/default.jpg",
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
    } else {
      const formData = new FormData();
      formData.append("image", data.imageURI);
      formData.append("data", JSON.stringify({ _id: userId, gamelist: data }));
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
      axios.put(`/api/game/list/update`, formData, config)
        .then((res) => {
          setGames(
            games.map((game) => {
              if (game._gameId === data._gameId) {
                return Object.assign({}, game, {
                  title: data.title,
                  type: data.type,
                  imageURI: res.data,
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
        }).catch((err) => {
          console.log(`failed to update: ${err}`)
        })
    }

  };

  const deleteGameDetail = (id) => {
    if (localData) {
      setGames(games.filter((game) => game._gameId !== id));
    } else {
      axios.delete(`/api/game/list/delete?id=${userId}&gameid=${id}`)
        .then((res) => {
          setGames(games.filter((game) => game._gameId !== id));
        }).catch((err) => {
          console.log(`Failed to delete: ${err}`)
        })
    }
  };


  /* Other Functions */
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
        <h1 className="banner-title no-select">Game Night {localData ? ": Using Sample Data" : ""}</h1>
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
