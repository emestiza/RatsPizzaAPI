const Rat = require("../models/Rat.js");
const Pizza = require("../models/Pizza.js");

// INDEX - get all rats with their pizza
// const index = async (req, res) => {
const index = async (req, res) => {
  try {
    //get array rats with pizza ids
    const allRats = await Rat.find({});
    //create a new array of rats with the pizza info
    const rats = allRats.map(async (rat) => {
      const thePizza = await Pizza.findById(rat.pizza);
      return {
        _id: rat._id,
        name: rat.name,
        pizza: thePizza,
      };
    });
    const rats2 = await Promise.all(rats);
    res.status(200).json(rats2);
  } catch (error) {
    res.status(400).send(error);
  }
};

// CREATE
const create = async (req, res) => {
  //create a new Rat
  try {
    const newRat = await Rat.create(req.body);
    res.status(200).json(newRat);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
}

// UPDATE
const update = async (req, res) => {
  //update an existing Rat by id
  try {
    const updatedRat = await Rat.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedRat);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
}

// Destroy
const destroy = async (req, res) => {
  //delete an existing Rat by ID
  try {
    const deletedRat = await Rat.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedRat);
  } catch (error) {
    //throw an error if something goes wrong
    res.status(400).send(error);
  }
}

module.exports = {
  index,
  create,
  update,
  destroy
}
