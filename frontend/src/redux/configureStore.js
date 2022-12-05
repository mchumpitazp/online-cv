import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { projectsReducer } from './projectsReducer';
import { recordsReducer } from './recordsReducer';

const reducer = {
    projects: projectsReducer,
    records: recordsReducer
}

export const ConfigureStore = () => {

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    });

    return store;
}