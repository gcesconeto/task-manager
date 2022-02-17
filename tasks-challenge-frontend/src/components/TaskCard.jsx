import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { string } from 'prop-types';

const api = require('../services/api');

function TaskCard({ id, task, status, createdAt }) {
    const { updateCounter, setUpdateCounter } = useContext(AppContext);
    
    const statusList = ['pending', 'in progress', 'done'];

    const handleChange = async (event) => {
        await api.putTask({
            _id: id,
            task,
            status: event.target.value,
            createdAt,
        });
        setUpdateCounter(updateCounter + 1)
    };

    const handleClick = async (event) => {
        await api.deleteTask(id);
        setUpdateCounter(updateCounter + 1)
    };

    return (
        <div className="task-card">
            <span className="task-card-title">{ task }</span>
            <span className="task-card-date">{ createdAt }</span>
            <form>
                <select
                    id="status-select"
                    value={ status }
                    onChange={ handleChange }
                >
                    {
                        statusList.map((option, index) => (
                            <option key={ index } value={ option }>{option}</option>
                            ))
                    }
                </select>
            </form>
            <button
                className="delete"
                type="button"
                onClick={ handleClick }
            >
                DELETE
            </button>
        </div>
    );
}

TaskCard.propTypes = {
  task: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
};

export default TaskCard;
