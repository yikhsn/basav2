import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    word : null
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_WORD:
            return {
                ...state,
                word: action.word
            };
    }
}

export default appReducer;