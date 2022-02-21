const userModel = require("../model/userModel");
const ApiFeature = require("../utils/apisFeature");
const tryCatchHandle = require("../utils/tryCatchHandle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.create = tryCatchHandle(async (req, res, next) => {
  let userBody = req.body;

  // userBody=
  if (!(userBody.email && userBody.password)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }
  const salt = await bcrypt.genSalt(10);
  userBody.password = await bcrypt.hash(userBody.password, salt);

  const user = await userModel.create(userBody);

  res.status(201).json({
    status: "Success",
    data: {
      user,
    },
  });
});

exports.logIn = tryCatchHandle(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new AppError("Vui lòng điền đủ thông tin đăng nhập", 400));
  }
  const currentUser = await userModel.findOne({ username });
  const validPassword = await bcrypt.compare(password, currentUser.password);
  if (!validPassword) {
    return next(new Error("Username hoặc mật khẩu chưa đúng"));
  }

  const token = await jwt.sign(
    { id: currentUser._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.status(200).json({
    status: "Success",
    data: {
      user: currentUser,
      token,
    },
  });
});
