const express = require("express");
const router = express.Router();
const IndexController = require("../Controller/IndexController");

// GET home page
router.get("/", IndexController.index);

// GET all game list
router.get("/api/game/list", IndexController.game_list);

// POST add game list
router.post("/api/game/list/add", IndexController.game_add);

// DELETE delte game list
router.delete("/api/game/list/delete", IndexController.game_delete);

// PUT update game list
router.put("/api/game/list/update", IndexController.game_update);

module.exports = router;
