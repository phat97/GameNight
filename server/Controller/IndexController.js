// Handle endpoints
const path = require("path");
const gameDetailModel = require("../model/UserGameList");

exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.gameList = (req, res) => {
  res.send("Not implemented: Return a list of all games");
};

exports.gameAdd = (req, res) => {
  res.send("Not implemented: Post a new game");
};

exports.gameDelete = (req, res) => {
  res.send("Not implemented: delete an existing");
};

exports.gameUpdate = (req, res) => {
  res.send("Not implemented: update game detail");
};
