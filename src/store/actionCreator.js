import * as actionTypes from './actionTypes';

export const setWord = word => {
    return {
        type: actionTypes.SET_WORD,
        word: word
    }
}

export const setValuesSearch = values => {
    return {
        type: actionTypes.SET_VALUES_SEARCH,
        values: values
    }
}

export const setSearchWordList = wordList => {
    return {
        type: actionTypes.SET_SEARCH_WORDLIST,
        wordList: wordList
    }
}