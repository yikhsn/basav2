import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';

import * as actionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Ionicons';

import axios from '../../axios/axios';

import SearchBox from '../SearchBox/SearchBox';

class HeaderSearch extends Component{
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

    getData = async(text) => {
    
        this.props.setIsSearching(true);
    
        await axios.get('search/text/' + text)
            .then(data => {
                const wordList = data.data;
                this.props.setSearchWordList(wordList);
            })
            .catch( data => {
                const wordList = [];
                this.props.setSearchWordList(wordList);
            })

        this.props.setIsSearching(false);

    }

    handleInputChange = async(input) => {
        this.props.setValuesSearch(input);
        
        await this.getData(input);

    }

    render(){
        const { datas } = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.navigationContainer}>
                    <TouchableOpacity 
                        style={styles.navigationButton}
                        onPress={ () => {
                            this.props.navigation.goBack()
                        } }
                    
                    >
                        <Icon style={styles.navigationIcon} name='ios-arrow-back' size={30} color='#FFFFFF' />
                        <Text style={styles.navigationText}>Kembali</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBoxContainer}>
                    <SearchBox
                        values={datas.searchValues}
                        handleInputChange={this.handleInputChange}
                        navigation={this.props.navigation}
                    />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: Platform.OS === 'android' ? 115 : 155,
        paddingTop: Platform.OS === 'android' ? 5 : 40,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#00C749'
    },
    navigationContainer: {
        marginBottom: 5
    },
    navigationButton: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',

    },
    navigationIcon: {
        marginRight: 5,
        paddingTop: 4

    },
    navigationText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#FFFFFF',
    },
    searchBoxContainer: {
        flex: 1
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);