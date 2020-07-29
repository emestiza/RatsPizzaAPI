const mongoose = require("mongoose"); // require mongoose
const { Schema, model } = mongoose; // destructure Schema and model from mongoose
// const { Schema, model } = require("mongoose");

const RatSchema = new Schema(
  {
    name: String,
    pizza: String,
  },
  { timestamps: true }
);

const Rat = model("Rat", RatSchema);

module.exports = Rat;