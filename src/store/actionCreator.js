import * as actionTypes from './actionTypes';

export const setWord = word => {
    return {
        type: actionTypes.SET_WORD,
        word: word
    }
}