"use strict";
var mongoose = require("mongoose");
var machineSchema = new mongoose.Schema({
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
    energyConsPerCycle: {
        type: Number,
        required: true
    }
});
var Machine = mongoose.model('Machine', machineSchema);
module.exports = Machine;
