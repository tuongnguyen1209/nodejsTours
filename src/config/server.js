const express = require("express");
const router = require("../router");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "../../views"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(router);

module.exports = app;
