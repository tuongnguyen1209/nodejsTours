const express = require("express");

const tourController = require("../controller/tourController");

const router = express.Router();

router.route("/").get(tourController.getAll).post(tourController.create);

router
  .route("/:id")
  .get(tourController.getOne)
  .put(tourController.update)
  .delete(tourController.delete);

module.exports = router;
