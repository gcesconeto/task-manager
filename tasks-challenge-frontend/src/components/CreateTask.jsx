import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CreateTask() {
    const { setNewTask } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        let value = event.target[0].value;
        const createdAt  = new Intl.DateTimeFormat('pt-br',
        { dateStyle: 'short', timeStyle: 'medium' }).format(new Date());
        setNewTask({
            task: value,
            status: 'pending',
            createdAt,
        })
        value = '';
    };

    return (
            <form onSubmit={ handleSubmit }>
                <input
                    placeholder="Type new task..."
                    id="newTask"
                    type="text"
                    name="newTask"
                />
                <button type="submit">Submit</button>
            </form>
    );
}

export default CreateTask;
