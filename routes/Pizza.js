const express = require("express");
const PizzaRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/Pizza.js");

// Routes specific to this router
// get all pizzas
PizzaRouter.get("/", index);

// create a new pizza
PizzaRouter.post("/", create);

// update a pizza
PizzaRouter.put("/:id", update);

// destroy a pizza
PizzaRouter.delete("/:id", destroy);

module.exports = PizzaRouter;