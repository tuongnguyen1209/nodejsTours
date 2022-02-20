const tryCatchHandle = require("../utils/tryCatchHandle");
const categoryModel = require("../model/categoryModel");
const ApiFeature = require("../utils/apisFeature");

exports.getAllCategory = tryCatchHandle(async (req, res, next) => {
  const feature = new ApiFeature(categoryModel.find(), req.query).limitFields(
    "-__v"
  );

  const category = await feature.query;
  res.json({
    status: "SUCCESS",
    data: category,
  });
});

exports.addCategory = tryCatchHandle(async (req, res, next) => {
  const category = req.body;
  const newCategory = await categoryModel.create(category);
  res.status(201).json({
    status: "success",
    data: newCategory,
  });
});

exports.getOne = tryCatchHandle(async (req, res) => {
  const feature = new ApiFeature(
    categoryModel.findById(req.params.id),
    req.query
  ).limitFields("-__v");
  const category = await feature.query;

  res.status(200).json({
    status: "success",
    data: category,
  });
});

exports.update = tryCatchHandle(async (req, res) => {
  const newCategory = await categoryModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  if (!newCategory) throw new Error("Id is not exits!");

  res.status(200).json({
    status: "success",
    data: newCategory,
  });
});

exports.delete = tryCatchHandle(async (req, res) => {
  const cate = await categoryModel.findByIdAndRemove(req.params.id);
  console.log(cate);
  if (!cate) throw new Error("Id is not exits");

  res.status(204).json();
});
