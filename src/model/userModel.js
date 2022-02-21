const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
    },
    createAt: {
      type: Date,
      default: new Date(),
    },
    hobby: {
      type: Array,
    },
    birthday: {
      type: Date,
    },
    role: {
      type: String,
      enum: {
        values: ["ADMIN", "USER"],
      },
      default: "USER",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("user", userModel);
