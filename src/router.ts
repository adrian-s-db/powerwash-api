import { Router } from 'express';
import { getUser, createUser, updateUser, getAllUsers, deleteAllUsers } from './controllers/userControllers';

// Should not be showing an error as soon as the machineController.js file is refactored.
import { getMachine, createMachine, getAllMachines, getTopMachines, deleteAllMachines } from './controllers/machineControllers';


const router = Router();

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