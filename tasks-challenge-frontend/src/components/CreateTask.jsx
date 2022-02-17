import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const api = require('../services/api');

function CreateTask() {
    const { updateCounter, setUpdateCounter } = useContext(AppContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const createdAt  = new Intl.DateTimeFormat('pt-br',
        { dateStyle: 'short', timeStyle: 'medium' }).format(new Date());
        await api.postTask({
            task: event.target[0].value,
            status: 'pending',
            createdAt,
        });
        event.target[0].value = '';
        setUpdateCounter(updateCounter + 1)
    };

    return (
            <form onSubmit={ handleSubmit }>
                <input
                    placeholder="Type new task..."
                    id="newTask"
                    type="text"
                    name="newTask"
                />
                <button type="submit">Create</button>
            </form>
    );
}

export default CreateTask;
