var Router = require('express').Router;
var _a = require('./controllers/userControllers'), getUser = _a.getUser, createUser = _a.createUser, updateUser = _a.updateUser, getAllUsers = _a.getAllUsers, deleteAllUsers = _a.deleteAllUsers;
var _b = require('./controllers/machineControllers'), getMachine = _b.getMachine, createMachine = _b.createMachine, getAllMachines = _b.getAllMachines, getTopMachines = _b.getTopMachines, deleteAllMachines = _b.deleteAllMachines;
var router = Router();
router.post('/users', createUser);
router.get('/users/:uid', getUser);
router.put('/users/:uid', updateUser);
router.post('/machines', createMachine);
router.get('/machines/:id', getMachine);
router.get('/top-machines', getTopMachines);
// FOR DEBUGGING
router.get('/users', getAllUsers);
router.delete('/users', deleteAllUsers);
router.get('/machines', getAllMachines);
router.delete('/machines', deleteAllMachines);
module.exports = router;
