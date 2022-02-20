const express = require("express");
const router = require("../router");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "../../views"));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(router);

app.use((err, req, res, next) => {
  res.status(400).json({
    status: "FALSE",
    message: err.message,
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    status: "false",
    message: "Router not found",
  });
});

module.exports = app;
