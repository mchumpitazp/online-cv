import * as ActionTypes from './ActionTypes';

export const filesReducer = (state = {
        isLoading: true,
        errMess: null,
        files: []
    }, action: any) => {
        
    switch(action.type) {
        case ActionTypes.ADD_FILES:
            return {...state, isLoading: false, errMess: null, files: action.payload};

        case ActionTypes.FILES_LOADING:
            return {...state, isLoading: true, errMess: null, files: []};

        case ActionTypes.FILES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, files: []};

        default:
            return state;
    }
}