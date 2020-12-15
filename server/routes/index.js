const express = require("express");
const router = express.Router();
const IndexController = require("../controller/indexController");

// GET home page
router.get("/", IndexController.index);

// GET all game list
router.get("/api/game/list", IndexController.gameList);

// POST add game list
router.post("/api/game/list/add", IndexController.gameAdd);

// DELETE delte game list
router.delete("/api/game/list/delete", IndexController.gameDelete);

// PUT update game list
router.put("/api/game/list/update", IndexController.gameUpdate);

module.exports = router;
