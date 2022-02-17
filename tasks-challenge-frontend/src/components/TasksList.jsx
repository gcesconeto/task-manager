import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskCard from './TaskCard';

function TasksList() {
    const { tasks } = useContext(AppContext);

    const renderTasksList = () => tasks.map(
        ({ task, status, createdAt }) => 
        <TaskCard 
            key={ task } 
            task={ task } 
            status={ status } 
            createdAt={ createdAt }
        /> 
    );

    return (
        <div>
            { renderTasksList() }
        </div>);
}

export default TasksList;
