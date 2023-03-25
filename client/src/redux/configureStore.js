import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { projectsReducer } from './projectsReducer';
import { filesReducer } from './filesReducer';

const reducer = {
    projects: projectsReducer,
    files: filesReducer
}

export const ConfigureStore = () => {

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    });

    return store;
}