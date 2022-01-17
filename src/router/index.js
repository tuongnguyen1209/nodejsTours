const express = require("express");
const homeCtl = require("../controller/homeController");

const router = express.Router();

router.route("/").get(homeCtl.home);

router.route("/detail/:id").get(homeCtl.getDetail);

router.route("/cate/:id").get(homeCtl.getByCate);

module.exports = router;
