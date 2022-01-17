const categoryModel = require("../model/categoryModel");
const tourModel = require("../model/tourModel");

exports.home = (req, res) => {
  categoryModel.getAll((listCate) => {
    tourModel.getAll((data) => {
      res.render("index", { tours: data, listCate, page: "all" });
    });
  });
};

exports.getDetail = (req, res) => {
  let { id } = req.params;
  categoryModel.getAll((listCate) => {
    tourModel.getOne(id, (data) => {
      res.render("index", { tour: data[0], listCate, page: "detail" });
    });
  });
};

exports.getByCate = (req, res) => {
  let { id } = req.params;
  categoryModel.getAll((listCate) => {
    tourModel.getByCate(id, (data) => {
      res.render("index", { tours: data, listCate, page: "all" });
    });
  });
};
