import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import AppContext from './AppContext';

function Provider({ children }) {
    const [tasks, setTasks] = useState([{ task: 'hello', status: 'in progress', createdAt: 'World!'}]);
    const [updatedTask, setUpdatedTask] = useState({});
    const [newTask, setNewTask] = useState({});
    const [sort, setSort] = useState({ order: 'desc', field: 'createdAt' });
    const contextValue = { 
        tasks, 
        setTasks, 
        newTask, 
        setNewTask, 
        updatedTask, 
        setUpdatedTask,
        sort, 
        setSort, 
    };
  
    useEffect(() => {
        const sortTasks = (tasks) => {
            const { field, order } = sort;
            if (order === 'asc') {
                tasks = tasks.sort((a, b) => {
                if (Number.isNaN(+a[field]) || Number.isNaN(+b[field])) {
                    return a[field].localeCompare(b[field]);
                }
                return +a[field] - +b[field];
                });
            }
            if (order === 'desc') {
                tasks = tasks.sort((b, a) => {
                if (Number.isNaN(+a[field]) || Number.isNaN(+b[field])) {
                    return a[field].localeCompare(b[field]);
                }
                return +a[field] - +b[field];
                });
            }
            return setTasks(tasks);
        };
        sortTasks(tasks);
    }, [sort, tasks]);

//   useEffect( () => {
//     const getTasks = async () => {
//         const tasks = await axios['get']('API_GET_URL', null);
//         setTasks(tasks);
//     }
//     getTasks();
//   }, []);

//   useEffect(() => {
//     const postTasks = async (tasks) => {
//         await axios['post']('API_POST_URL', tasks);
//     }
//     postTasks(tasks);
//   }, [tasks]);


    return (
        <AppContext.Provider value={ contextValue }>
            {children}
        </AppContext.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
