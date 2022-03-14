import mongoose = require('mongoose');
import Machine = require('./../types/Machine')

const machineSchema = new mongoose.Schema({
  energyClass: {
    type: String,
    required: true,
  },
  modelIdentifier: {
    type: String,
    required: true,
    unique: true
  },
  ratedCapacity: {
    type: Number,
    required: true,
  },
  supplierOrTrademark: {
    type: String,
    required: true,
  },
  waterCons: {
    type: Number,
    required: true
  },
  noiseClass: {
    type: String,
    required: true
  },
  energyConsPerCycle :{
    type: Number,
    required: true
  }
});

const Machine = mongoose.model<Machine>('Machine', machineSchema);
export = Machine;
