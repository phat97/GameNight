// Handle endpoints
const path = require("path");
const { collection } = require("../models/UserGameList");
const multer = require('multer')
const settings = require("../multer/Setting");

const upload = multer({ storage: settings.storage, fileFilter: settings.filter }).single("image")

// Home page
exports.index = (req, res) => {
  res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
};

// Get list of all Games
exports.gameList = (req, res) => {
  const query = { _id: req.query.id }
  collection
    .find(query, (err, data) => {
      if (err) {
        res.status(400).send(`Cannot retreive data: ${err}`)
      } else {
        data.toArray((err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(`toArray error: ${err}`)
          } else {
            res.status(200).send(result)
          }
        })
      }
    })
};


// File upload
exports.fileUpdate = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.send(500)
    } else {
      if (req.file) {
        res.locals.filepathExist = true;
        let path = req.file.path;
        let public_path = path.split("public");
        res.locals.filepath = public_path[1].replace(/\\/g, "/");
      } else {
        res.locals.filepathExist = false;
      }



      next();
    }
  })
}

// Add to list
exports.gameAdd = (req, res) => {

  const data = JSON.parse(req.body.data);
  const game_data = data.gamelist;
  if (res.locals.filepathExist) {
    game_data.imageURI = res.locals.filepath;
  }

  const query = { _id: data._id };
  const update = { $addToSet: { gamelist: game_data } }
  const options = { upsert: true };

  collection
    .updateOne(query, update, options)
    .then((result) => {
      res.status(200).send(game_data.imageURI);
    })
    .catch((err) => {
      res.status(500).send(`Failed to add: ${err}`);
    });
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
exports.gameUpdate = (req, res) => {
  const game_data = JSON.parse(req.body.data);

  game_data.gamelist.imageURI = res.locals.filepath;
  console.log(game_data)
  const query = { _id: game_data._id, "gamelist._gameId": game_data.gamelist._gameId }
  const update = { $set: { "gamelist.$": game_data.gamelist } }

  collection.updateOne(query, update).then((result) => {
    res.status(200).send(game_data.gamelist.imageURI);
  }).catch((err) => {
    res.status(500).send(`Failed to update: ${err}`)
  })
};
