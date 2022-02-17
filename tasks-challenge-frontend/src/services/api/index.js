import axios from 'axios';

const URL = 'http://localhost:3001/';

export const getTasks = async () => {
    const tasks = await axios['get'](URL, null);
    return tasks;
}

export const postTask = async (newTask) => {
    await axios['post'](URL, { newTask: newTask });
}

export const putTask = async (updatedTask) => {
    await axios['put'](URL, { updatedTask: updatedTask });
}

export const deleteTask = async (_id) => {
    await axios['delete'](URL, { data: { _id } });
}