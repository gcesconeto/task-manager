import { createContext } from 'react';

const INITIAL_CONTEXT = {
    tasks: [{ task: 'hello', status: 'pending', createdAt: 'World!'}],
    sort: { field: 'creationDate', order: 'desc' },
    newTask: {},
    updatedTask: {},
};

const AppContext = createContext(INITIAL_CONTEXT);

export default AppContext;