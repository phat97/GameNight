// Handle endpoints
const path = require("path");
const { collection } = require("../models/UserGameList");
const multer = require('multer')
const settings = require("../multer/Setting")

const upload = multer({ storage: settings.storage, fileFilter: settings.filter }).single("image")

// Home page
exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.gameList = (req, res) => {
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


// File upload
exports.fileUpdate = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.send(`Error uploading file: ${err}`)
    } else {
      console.log(req.file);
      console.log(req.body);
      res.locals.id = "test";
      next();
    }
  })

}

// Add to list
exports.gameAdd = (req, res) => {
  console.log(res.locals.id);
  // const data = req.body;
  // const query = { _id: data._id };
  // const update = { $addToSet: { gamelist: { req.body.gamelist } } }
  // const options = { upsert: true };

  // collection
  //   .updateOne(query, update, options)
  //   .then((result) => {
  //     res.status(200).send("Successfully added");
  //   })
  //   .catch((err) => {
  //     res.status(500).send(`Failed to add: ${err}`);
  //   });
  // res.send("file")
  res.send(res.locals.id);
};


// Delete item
exports.gameDelete = (req, res) => {
  const query = { _id: req.query.id }
  const update = { $pull: { "gamelist": { _gameId: req.query.gameid } } }

  collection.updateOne(query, update, false, true).then((result) => {
    res.status(200).send("Successfully deleted");
  }).catch((err) => {
    res.status(500).send(`Failed to delete: ${err}`)
  })
};

// Update item
exports.gameUpdate = (req, res, next) => {
  const query = { _id: req.body._id, "gamelist._gameId": req.body.gamelist._gameId }
  const update = { $set: { "gamelist.$": req.body.gamelist } }

  collection.updateOne(query, update).then((result) => {
    res.status(200).send("Successfully updated");
  }).catch((err) => {
    res.status(500).send(`Failed to update: ${err}`)
  })
};
