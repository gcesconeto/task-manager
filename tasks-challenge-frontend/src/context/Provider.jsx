import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const api = require('../services/api');

function Provider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [sort, setSort] = useState({ order: 'desc', field: 'createdAt' });
    const [updateCounter, setUpdateCounter] = useState(0);
    const contextValue = { 
        tasks, 
        setTasks,
        sort,
        setSort,
        updateCounter,
        setUpdateCounter,
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

    useEffect( () => {
        const getTasks = async () => {
            const tasks = await api.getTasks();
            console.log(tasks);
            setTasks(tasks.data.tasks);
        };
        getTasks();
    }, [updateCounter]);

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
