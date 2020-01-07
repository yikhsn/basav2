import * as actionTypes from './actionTypes';
import { act } from 'react-test-renderer';

const initialState = {
    words : null,


    searchValues: '',
    searchWordList: [
        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },
        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        },
        {
            id: "5c715dd8090e574d06a659a4",
            words: 'amplaih',
            word_type: 'kata benda',
            translations: ['ampelas'],
            definitions: ['menggosok sampai mengkilat'],
            synonyms: [],
            examples: [
                {
                    word: 'taamplaih beuget alee parang nyoe',
                    translation: 'gosoklah gagang parang ini hingga berkilat'
                },
                {
                    word: "reuncong nyan jroh that geuamplaih",
                    translation: "rencong itu sangat rapi diampelas"
                }
            ]
        }
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
                wordList: action.wordList
            };
        default:
            return {
                ...state
            }
    }
}

export default appReducer;