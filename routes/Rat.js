const express = require("express");
const RatRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/Rat.js");

// routes and middleware specific to this router
// Get all rats
RatRouter.get("/", index);

// Create new rat
RatRouter.post("/", create);

// Update a rat
RatRouter.put("/:id", update);

// Destroy a rat
RatRouter.delete("/:id", destroy);

module.exports = RatRouter;