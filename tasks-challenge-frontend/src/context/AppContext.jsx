import { createContext } from 'react';

const INITIAL_CONTEXT = {
    tasks: [],
    sort: {},
    newTask: {},
    updatedTask: {},
};

const AppContext = createContext(INITIAL_CONTEXT);

export default AppContext;