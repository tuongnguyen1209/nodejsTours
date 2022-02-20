const express = require("express");

const tourController = require("../controller/tourController");

const router = express.Router();

router.route("/").get(tourController.getAll).post(tourController.create);

router.route("/:id").get(tourController.getOne);
// .put().delete();

module.exports = router;
