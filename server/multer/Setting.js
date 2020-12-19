const multer = require('multer')
const path = require("path");

exports.storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}\\server\\public\\images`)
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, file.originalname)
    }
})

exports.filter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error("Wrong file"))
    }
};