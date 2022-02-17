const tasksModel = require('../models/tasksModel');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

const createTask = async (req, res, next) => {
    try {
        const { newTask } = req.body;
        await tasksModel.createTask(newTask);
        return res.status(STATUS_CREATED).end();
    } catch (err) {
        next(err);
    }
};

const getTasks = async (_req, res, next) => {
    try {
        const tasks = await tasksModel.getTasks();
        return res.status(STATUS_OK).json({ tasks });
    } catch (err) {
        next(err);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const { updatedTask } = req.body;
        await tasksModel.updateTask(updatedTask);
        return res.status(STATUS_OK).end()
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
};