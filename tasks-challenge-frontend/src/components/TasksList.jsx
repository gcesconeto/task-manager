import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskCard from './TaskCard';

function TasksList() {
    const { tasks } = useContext(AppContext);

    const renderTasksList = () => tasks.map(
        ({ _id, task, status, createdAt }) => 
        <TaskCard
            id={ _id }
            key={ _id } 
            task={ task } 
            status={ status } 
            createdAt={ createdAt }
        /> 
    );

    return (
        <div className="task-list">
            { renderTasksList() }
        </div>);
}

export default TasksList;
