import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { recordsReducer } from './recordsReducer';

const reducer = {
    records: recordsReducer
}

export const ConfigureStore = () => {

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    });

    return store;
}