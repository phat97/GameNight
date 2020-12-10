var express = require("express");
var router = express.Router();
const path = require("path");

const BUILD_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(BUILD_DIR, "index.html");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(HTML_FILE);
  console.log("home");
  //res.sendFile(HTML_FILE);
  res.send("ok");
});

module.exports = router;
