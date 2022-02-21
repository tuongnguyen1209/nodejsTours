const mongoose = require("mongoose");

const BookingModel = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    createAt: {
      type: Date,
      default: new Date(),
    },
    dateStart: {
      type: Date,
    },
    quantity: {
      type: Number,
    },
    total: {
      type: Number,
    },
    status: {
      type: String,
      enum: {
        values: ["Chờ xử lý", "Đợi thanh toán", "Thành công"],
      },
      default: "Chờ xử lý",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("booking", BookingModel);
