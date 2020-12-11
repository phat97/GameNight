var express = require("express");
var router = express.Router();
const path = require("path");

const BUILD_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(BUILD_DIR, "index.html");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(HTML_FILE);
});

module.exports = router;
