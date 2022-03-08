const {Router} = require ('express');
const { getUser, createUser, getAllUsers, deleteAllUsers, saveMachineToUser } = require('./controllers/userControllers');
const { getMachine, createMachine, getAllMachines, getTopMachines, deleteAllMachines } = require('./controllers/machineControllers');


const router = Router();

router.post('/users', createUser);
router.get('/users/:uid', getUser);
// TODO: Update users
router.put('/users/save/:uid', saveMachineToUser);

router.post('/machines', createMachine);
router.get('/machines/:id', getMachine);
router.get('/top-machines', getTopMachines);


// FOR DEBUGGING
router.get('/users', getAllUsers);
router.delete('/users', deleteAllUsers);

router.get('/machines', getAllMachines);
router.delete('/machines', deleteAllMachines);


module.exports = router;