import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// projects

export const fetchProjects = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(projectsLoading());

    return fetch(baseUrl + '/projects/')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                // error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
};

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess: any) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects: any) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

// files

export const fetchFiles = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(filesLoading());

    return fetch(baseUrl + '/files/')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                // error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(files => dispatch(addFiles(files)))
        .catch(error => dispatch(filesFailed(error.message)));
};

export const filesLoading = () => ({
    type: ActionTypes.FILES_LOADING
});

export const filesFailed = (errmess: any) => ({
    type: ActionTypes.FILES_FAILED,
    payload: errmess
});

export const addFiles = (files: any) => ({
    type: ActionTypes.ADD_FILES,
    payload: files
});

// database

export const fetchData = (token: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(dataLoading());

    return fetch(baseUrl + '/data/', {
            headers: {
                'x-access-token': token
            }
        })
        .then(response => {
            if (response.ok)
                return response;
            else 
                throw Error('Error ' + response.status + ': ' + response.statusText);
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(data => dispatch(addData(data)))
        .catch(error => dispatch(dataFailed(error.message)));
};

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = (errmess: any) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});

export const addData = (files: any) => ({
    type: ActionTypes.ADD_DATA,
    payload: files
});

// database item