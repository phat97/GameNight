// Handle endpoints
const path = require("path");
const { collection } = require("../model/UserGameList");

exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.gameList = (req, res) => {
  collection
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(`Failed to retrieve all data: ${err}`);
    });

  res.send("This should never happen");
};

exports.gameAdd = (req, res) => {
  const data = req.body;
  const query = { _userId: data._userId, _gameId: data._gameId };
  const update = {
    $set: {
      _gameId: data._gameId,
      title: data.type,
      imageURI: data.imageURI,
      own: data.own,
      date: data.date,
      players: data.players,
    },
  };
  const options = { upsert: true };

  collection
    .updateOne(query, update, options)
    .then((result) => {
      res.status(200).send("Successfully added");
    })
    .catch((err) => {
      res.status(500).send("Failed to add");
    });

  res.send("This should never happen");
};

exports.gameDelete = (req, res) => {
  res.send("Not implemented: delete an existing");
};

exports.gameUpdate = (req, res) => {
  res.send("Not implemented: update game detail");
};
