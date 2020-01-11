import * as actionTypes from './actionTypes';

const initialState = {
    words : null,

    searchValues: '',
    isSearching: false,
    searchWordList: [
    ]
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_WORD:
            return {
                ...state,
                word: action.word
            };
        case actionTypes.SET_VALUES_SEARCH:
            return {
                ...state,
                searchValues: action.values
            };
        case actionTypes.SET_SEARCH_WORDLIST:
            return {
                ...state,
                searchWordList: action.searchWordList
            };
        case actionTypes.SET_IS_SEARCHING:
            return {
                ...state,
                isSearching: action.isSearching
            }
        default:
            return {
                ...state
            }
    }
}

export default appReducer;