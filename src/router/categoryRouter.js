const express = require("express");
const categoryController = require("../controller/categoryController");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.addCategory);
router
  .route("/:id")
  .get(categoryController.getOne)
  .put(categoryController.update)
  .delete(categoryController.delete);

module.exports = router;
