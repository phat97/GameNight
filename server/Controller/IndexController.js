// Handle endpoints
const path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require("../config/config")[env];

exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.game_list = (req, res) => {
  res.send("Not implemented: Return a list of all games");
};

exports.game_add = (req, res) => {
  console.log(config);
  res.send("Not implemented: Post a new game");
};

exports.game_delete = (req, res) => {
  console.log(config);
  res.send("Not implemented: delete an existing");
};

exports.game_update = (req, res) => {
  console.log(config);
  res.send("Not implemented: update game detail");
};
