const { cornsilk } = require('color-name');
const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201);
    res.send(newUser);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({uid:req.params.uid});
    res.send(user);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const saveMachineToUser = async (req, res) => {
  try {
    console.log('hello from save machine to user');
    const updatedMachinesArr =
      req.body.user.savedMachines.includes(req.body.machine.washingMachineCode) ?
        req.body.user.savedMachines.filter((id) => id !== req.body.machine.washingMachineCode) :
        req.body.user.savedMachines.concat(req.body.machine.washingMachineCode);

    const updatedUser = await User.findById(req.body.user._id).exec()
    updatedUser.savedMachines = updatedMachinesArr;
    updatedUser.save();

    res.send(updatedUser);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const deleted = await User.deleteMany({});
    res.send(deleted);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};


module.exports = { getUser, createUser, saveMachineToUser, getAllUsers, deleteAllUsers };