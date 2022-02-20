const categoryModel = require("../model/categoryModel");
const tourModel = require("../model/tourModel");

exports.home = async (req, res) => {
  const listCate = await categoryModel.find();
  console.log(listCate);

  res.render("index", { page: "home", listCate });
};

exports.getDetail = async (req, res) => {
  let { id } = req.params;

  const listCate = await categoryModel.find();

  const tour = await tourModel.findById(id);

  res.render("index", { tour, listCate, page: "detail" });
};

exports.home = async (req, res) => {
  const listCate = await categoryModel.find();

  const tours = await tourModel.find();

  res.render("index", { page: "all", listCate, tours });
};
