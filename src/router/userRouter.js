const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/signin").post(userController.logIn);

router.route("/signup").post(userController.create);

// router.route("/myprofile").get();

// router.route("/update").post();

module.exports = router;
