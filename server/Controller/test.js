const path = require("path");

module.exports = {
    // Home page
    index: (req, res) => {
        res.sendFile(path.join(__dirname + "../build", "index.html")); // Load react page without data
    },
}