//import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from './projectsReducer';
import { filesReducer } from './filesReducer';
import { dataReducer } from './dataReducer';

const reducer = {
    projects: projectsReducer,
    files: filesReducer,
    data: dataReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()//.concat(logger)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
