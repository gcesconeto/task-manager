const connection = require('./connection');

const createTask = async (newTask) => (await connection())
    .collection('tasks')
    .insertOne(newTask);

const getTasks = async () => (await connection())
    .collection('tasks')
    .find().toArray();

const updateTask = async (updatedTask) => {
    (await connection()).collection('tasks').updateOne(
        { task: updatedTask.task },
        {
          $set: updatedTask,
        },
      );
    };

module.exports = {
    createTask,
    getTasks,
    updateTask,
};
