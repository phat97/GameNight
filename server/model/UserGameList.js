// Contain database detail and CRUD
const mongoose = require("mongoose");

const GameListSchema = mongoose.Schema({
  _userId: {
    type: String,
    required: true,
  },
  username: String,
  password: String,
  gameList: [
    {
      _gameId: {
        type: String,
        required: true,
      },
      title: String,
      type: String,
      imageURI: String,
      own: Boolean,
      cost: Number,
      date: {
        type: Date,
        default: Date.now,
      },
      players: String,
    },
  ],
});

module.exports = mongoose.model("GameList", GameListSchema);
