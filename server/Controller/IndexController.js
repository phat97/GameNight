// Handle endpoints
const path = require("path");
const { collection } = require("../models/UserGameList");

exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.gameList = (req, res) => {
  console.log(req.query.id);
  const query = { _id: req.query.id }
  collection
    .find(query).toArray((err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(`Cannot retreive data: ${err}`)
      } else {
        res.status(200).send(result)
      }
    })

};

exports.gameAdd = (req, res) => {
  const data = req.body;
  const query = { _id: data._id };
  const update = {
    $addToSet: {
      gamelist: {
        $each: req.body.gamelist
      }
    }
  }
  const options = { upsert: true };

  collection
    .updateOne(query, update, options)
    .then((result) => {
      res.status(200).send("Successfully added");
    })
    .catch((err) => {
      res.status(500).send(`Failed to add: ${err}`);
    });
};

exports.gameDelete = (req, res) => {
  res.send("Not implemented: delete an existing");
};

exports.gameUpdate = (req, res) => {
  res.send("Not implemented: update game detail");
};
