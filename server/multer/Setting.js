const multer = require('multer')

exports.storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}\\server\\public\\images`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

exports.filter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error("Wrong file"))
    }
};