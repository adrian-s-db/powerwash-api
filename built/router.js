"use strict";
var express_1 = require("express");
var userControllers_1 = require("./controllers/userControllers");
// Should not be showing an error as soon as the machineController.js file is refactored.
var machineControllers_1 = require("./controllers/machineControllers");
var router = (0, express_1.Router)();
router.post('/users', userControllers_1.createUser);
router.get('/users/:uid', userControllers_1.getUser);
router.put('/users/:uid', userControllers_1.updateUser);
router.post('/machines', machineControllers_1.createMachine);
router.get('/machines/:id', machineControllers_1.getMachine);
router.get('/top-machines', machineControllers_1.getTopMachines);
// FOR DEBUGGING
router.get('/users', userControllers_1.getAllUsers);
router.delete('/users', userControllers_1.deleteAllUsers);
router.get('/machines', machineControllers_1.getAllMachines);
router.delete('/machines', machineControllers_1.deleteAllMachines);
module.exports = router;
