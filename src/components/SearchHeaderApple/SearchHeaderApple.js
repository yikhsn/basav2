import React, { Component } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';

import * as actionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from '../../axios/axios';

import SearchBox from '../SearchBox/SearchBox';

class SearchHeaderApple extends Component{
    constructor(props){
        super(props);

        this.state = {
            wordList: [
                {
                    id: "5c715dd8090e574d06a659a4",
                    words: 'amplaih',
                    word_type: 'kata benda',
                    translations: ['ampelas'],
                    definitions: ['menggosok sampai mengkilat'],
                    synonyms: [''],
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
    }

    getData = (text) => {
        axios.get('search/text/' + text)
            .then(data => {
                const wordList = data.data;
                this.props.setSearchWordList(wordList);
            })
            .catch( data => {
                const wordList = [];
                this.props.setSearchWordList(wordList);
            })
    }

    handleInputChange = (input) => {
        this.props.setValuesSearch(input);
        
        this.getData(input);
    }

    render(){

        const { datas } = this.props;

        console.log(datas.searchWordList);
        
        return(
            <View style={styles.container}>
                <SearchBox
                    values={datas.searchValues}
                    handleInputChange={this.handleInputChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        padding: 10,
        backgroundColor: '#00C749'
    }
});

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeaderApple);