import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Sorter() {
    const { sort, setSort } = useContext(AppContext);

    return (
        <form>
            <button
                type="button"
                value={ sort.order === 'asc' ? 'desc' : 'asc'}
                onClick={ (event) => setSort({...sort, order: event.target.value}) }
            >
                { sort.order === 'asc' ? 'Descending' : 'Ascending' }
            </button>
            <button
                type="button"
                disabled={ sort.field === 'task' ? true : false}
                value="task"
                onClick={ (event) => setSort({...sort, field: event.target.value}) }
            >
                Alphabetically
            </button>
            <button
                disabled={ sort.field === 'createdAt' ? true : false}
                type="button"
                value="createdAt"
                onClick={ (event) => setSort({...sort, field: event.target.value}) }
            >
                Date
            </button>
            <button
                type="button"
                disabled={ sort.field === 'status' ? true : false}
                value="status"
                onClick={ (event) => setSort({...sort, field: event.target.value}) }
            >
                Status
            </button>
        </form>
    );
}

export default Sorter;
