const express = require("express");
const router = express.Router();
const HomeController = require("../controller/homeController");


// GET home page
router.get("/", HomeController.index);

// GET all game list
router.get("/api/game/list", HomeController.gameList);

// POST add game list
router.post("/api/game/list/add", HomeController.fileUpdate, HomeController.gameAdd)

// DELETE delte game list
router.delete("/api/game/list/delete", HomeController.gameDelete);

// PUT update game list
router.put("/api/game/list/update", HomeController.fileUpdate, HomeController.gameUpdate);

module.exports = router;
