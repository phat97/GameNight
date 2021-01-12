const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/home");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
let mongooseURI = require("./config/config");

if (typeof mongooseURI !== 'string' || !mongooseURI instanceof String) {
  mongooseURI = "demo";
}

//connecting to database
mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to Database");
    console.log(`THIS IS THE FILE PATH??? ${process.cwd()}`);
    console.log(`app.js located in ${__dirname}`);
  }
});

const app = express();

const BUILD_DIR = path.join(__dirname, "../dist");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(BUILD_DIR));
app.use(cors());
app.use(helmet());

app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
