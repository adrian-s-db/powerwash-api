const Machine = require('../models/machine');

const createMachine = async (req, res) => {
  try {
    Machine.create(req.body, function (err, newMachine) {
      if (err) {
        console.error(err);
      } else {
        res.status(201);
        res.send(newMachine);
      }
    })
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getMachine = async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);
    res.send(machine);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getTopMachines = async (req, res) => {
  try {
    const topMachines = await Machine.find({}).sort({'energyConsPerCycle': 'asc'}).limit(3);
    res.send(topMachines);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};


const deleteAllMachines = async (req, res) => {
  try {
    const deleted = await Machine.deleteMany({});
    res.send(deleted);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
}

const getAllMachines = async (req, res) => {
  try {
    const machines = await Machine.find({});
    res.send(machines);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

module.exports = { getMachine, createMachine, getAllMachines, getTopMachines, deleteAllMachines };