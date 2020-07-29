const mongoose = require("mongoose"); // require mongoose
const { Schema, model } = mongoose; // destructure Schema and model from mongoose

const PizzaSchema = new Schema(
  {
    name: String,
    toppings: [String],
  },
  { timestamps: true }
);

const Pizza = model("Pizza", PizzaSchema); //"Pizza" is name of collection

module.exports = Pizza;

