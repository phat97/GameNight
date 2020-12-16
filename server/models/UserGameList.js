// Contain database detail and CRUD
const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const GameListSchema = mongoose.Schema({
  _userId:
  {
    type: String,
    required: true,
  },
  username: String,
  password: String,
  gamelist:
    [
      {
        _gameId:
        {
          type: String,
          required: true,
        },
        title: String,
        type: String,
        imageURI: String,
        own: Boolean,
        cost: Decimal128,
        date:
        {
          type: Date,
          default: Date.now,
        },
        players: String,
      },
    ],
});

module.exports = mongoose.model("gamelists", GameListSchema);
