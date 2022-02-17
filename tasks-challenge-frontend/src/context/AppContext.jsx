import { createContext } from 'react';

const INITIAL_CONTEXT = {
    tasks: [],
    sort: {},
    // newTask: {},
    // updatedTask: {},
    updateCounter: 0,
};

const AppContext = createContext(INITIAL_CONTEXT);

export default AppContext;