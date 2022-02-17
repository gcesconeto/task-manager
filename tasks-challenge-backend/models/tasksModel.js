const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTask = async (newTask) => (await connection())
    .collection('tasks')
    .insertOne(newTask);

const getTasks = async () => (await connection())
    .collection('tasks')
    .find().toArray();

const updateTask = async ({_id, ...updatedTask}) => 
    (await connection()).collection('tasks').updateOne(
        { _id: ObjectId(_id) },
        {
          $set: updatedTask,
        },
    );

const deleteTask = async (_id) => 
    (await connection()).collection('tasks').deleteOne({ _id: ObjectId(_id) });


module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
