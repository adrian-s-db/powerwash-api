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

const updateUser = async (req, res) => {
  try {
    const updatedMachinesArr =
      req.body.user.savedMachines.includes(req.body.machine.washingMachineCode) ?
        req.body.user.savedMachines.filter((id) => id !== req.body.machine.washingMachineCode) :
        req.body.user.savedMachines.concat(req.body.machine.washingMachineCode);

    console.log('SEARCHING USER WITH ID: ', req.body.user.id)
    const user = User.findById(req.body.user.id);

    console.log(user);
    // user.savedMachines = updatedMachinesArr;
    // const updatedUser = await user.save();

    // res.send(updatedUser);
    res.end();
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


module.exports = { getUser, createUser, updateUser, getAllUsers, deleteAllUsers };