const categoryModel = require("../model/categoryModel");
const tourModel = require("../model/tourModel");

exports.home = async (req, res) => {
  const listCate = await categoryModel.find();

  res.render("index", { page: "home", listCate });
};

exports.getDetail = async (req, res) => {
  let { id } = req.params;

  const listCate = await categoryModel.find();

  const tour = await tourModel.findById(id);

  tour.view++;

  await tour.save();

  res.render("index", { tour, listCate, page: "detail" });
};

exports.getTours = async (req, res) => {
  const listCate = await categoryModel.find();

  res.render("index", { page: "tours", listCate });
};
