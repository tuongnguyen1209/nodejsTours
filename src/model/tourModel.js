const mongoose = require("mongoose");

const { Schema } = mongoose;

const toursSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    sortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    time: {
      type: Number,
    },
    destination: {
      type: String,
    },
    departure: {
      type: String,
    },
    vehicle: {
      type: String,
    },

    view: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("tours", toursSchema);
