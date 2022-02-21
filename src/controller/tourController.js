const tourModel = require("../model/tourModel");
const ApiFeature = require("../utils/apisFeature");
const tryCatchHandle = require("../utils/tryCatchHandle");

exports.getAll = tryCatchHandle(async (req, res) => {
  let find = null;

  if (req.query.kw) {
    const reg = new RegExp(req.query.kw, "gi");
    find = tourModel.find({ title: { $in: [reg] } });
  } else {
    find = tourModel.find();
  }

  const feature = new ApiFeature(find, req.query, tourModel.countDocuments())
    .filter()
    .sort()
    .paginate()
    .limitFields("-__v");

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

exports.update = tryCatchHandle(async (req, res, next) => {
  const tour = await tourModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "Success",
    data: {
      tour,
    },
  });
});

exports.delete = tryCatchHandle(async (req, res, next) => {
  await tourModel.findByIdAndRemove(req.params.id);
  res.status(200).json({
    status: "Success",
  });
});
