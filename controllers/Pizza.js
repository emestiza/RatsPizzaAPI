const Pizza = require("../models/Pizza.js");

// INDEX - gets all pizza
const index = async (req, res) => {
  //get all Pizza
  try {
    const allPizza = await Pizza.find({});
    res.status(200).json(allPizza);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
};

// CREATE - makes a new pizza
const create = async (req, res) => {
  //create a new want
  try {
    const newPizza = await Pizza.create(req.body);
    res.status(200).json(newPizza);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
};

// UPDATE - updates a pizza
const update = async (req, res) => {
  //update an existing Pizza by id
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPizza);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
};

// DESTROY - deletes a pizza
const destroy = async (req, res) => {
  //delete an existing Pizza by ID
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPizza);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
};