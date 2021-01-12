const multer = require('multer')

exports.storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath;
        if (process.platform === "win32" || process.platform === "win64") {
            uploadPath = `${process.cwd()}\\server\\public\\images`
        } else {
            uploadPath = `${process.cwd()}/server/public/images`
        }
        cb(null, uploadPath)
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