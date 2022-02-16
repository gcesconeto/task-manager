import { createContext } from 'react';

const INITIAL_CONTEXT = {
    tasks: [],
    sort: { field: 'creationDate', order: 'desc' },
};

const AppContext = createContext(INITIAL_CONTEXT);

export default AppContext;