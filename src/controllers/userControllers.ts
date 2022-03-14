import Express from 'express';
import User from '../models/user';

const createUser = async (req: Express.Request, res: Express.Response) => {
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

const getUser = async (req: Express.Request, res: Express.Response) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({uid});
    res.send(user);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const updateUser = async (req: Express.Request, res: Express.Response) => {
  try {
    const updatedMachinesArr =
      req.body.user.savedMachines.includes(req.body.machine.washingMachineCode) ?
        req.body.user.savedMachines.filter((id: string) => id !== req.body.machine.washingMachineCode) :
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

const deleteAllUsers = async (_req: Express.Request, res: Express.Response) => {
  try {
    const deleted = await User.deleteMany({});
    res.send(deleted);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
}

const getAllUsers = async (_req: Express.Request, res: Express.Response) => {
  try {
    const users = await User.find({});
    res.status(200);
    res.send(users);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};


export { getUser, createUser, updateUser, getAllUsers, deleteAllUsers };