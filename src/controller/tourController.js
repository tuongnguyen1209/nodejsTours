const tourModel = require("../model/tourModel");
const ApiFeature = require("../utils/apisFeature");
const tryCatchHandle = require("../utils/tryCatchHandle");

exports.getAll = tryCatchHandle(async (req, res) => {
  const feature = new ApiFeature(tourModel.find(), req.query).limitFields(
    "-__v"
  );

  const tours = await feature.query;

  res.json({
    status: "success",
    data: tours,
  });
});

exports.create = tryCatchHandle(async (req, res) => {
  const tour = await tourModel.create(req.body);

  res.status(201).json({
    status: "success",
    data: tour,
  });
});

exports.getOne = tryCatchHandle(async (req, res) => {
  const tour = await tourModel.findById(req.params.id);

  if (!tour) throw Error("Id is not exits");

  tour.view++;

  await tour.save();

  res.json({
    status: "success",
    data: tour,
  });
});
