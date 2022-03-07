const {Router} = require ('express');
const { getUser, createUser, updateUser, getAllUsers, deleteAllUsers } = require('./controllers/userControllers');
const { getMachine, createMachine, getAllMachines, getTopMachines, deleteAllMachines } = require('./controllers/machineControllers');


const router = Router();

router.post('/users', createUser);
router.get('/users/:uid', getUser);
// TODO: Update users
router.put('/users/:uid', updateUser);

router.post('/machines', createMachine);
router.get('/machines/:id', getMachine);
router.get('/machines/top', getTopMachines);


// FOR DEBUGGING
router.get('/users', getAllUsers);
router.delete('/users', deleteAllUsers);

router.get('/machines', getAllMachines);
router.delete('/machines', deleteAllMachines);


module.exports = router;