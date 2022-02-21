// require variable
const express = require("express");
const homeCtl = require("../controller/homeController");
const routerCategory = require("./categoryRouter");
const routerTour = require("./toursRouter");
const userroute = require("./userRouter");
// router config
const router = express.Router();

// get home controller
router.route("/").get(homeCtl.home);

// get detail
router.route("/detail/:id").get(homeCtl.getDetail);

// //
router.route("/all-tour").get(homeCtl.getTours);

/**
 * @api
 * @path /api/v1/*
 * @description api router
 */
router.use("/api/v1/category", routerCategory);

router.use("/api/v1/tour", routerTour);

router.use("/api/v1/auth", userroute);

module.exports = router;
