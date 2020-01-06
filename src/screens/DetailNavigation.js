import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import WordList from '../components/WordList/WordList';
import Loader from '../components/Loader/Loader';

import axios from '../axios/axios';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetailLetter extends Component{
  
    state = {
        isLoaded: false,
        parentLetter: '',
        wordList: [

        ]
    }

    // contohObject = {
    //     wordList: [
    //         {
    //             id: "5c715dd8090e574d06a659a4",
    //             words: 'amplaih',
    //             word_type: 'kata benda',
    //             translations: ['ampelas'],
    //             definitions: ['menggosok sampai mengkilat'],
    //             synonyms: [''],
    //             examples: [
    //                 {
    //                     word: 'taamplaih beuget alee parang nyoe',
    //                     translation: 'gosoklah gagang parang ini hingga berkilat'
    //                 },
    //                 {
    //                     word: "reuncong nyan jroh that geuamplaih",
    //                     translation: "rencong itu sangat rapi diampelas"
    //                 }
    //             ]
    //         }
    //     ]
    // }

    async componentDidMount(){
        const parentLetter = this.props.navigation.getParam('parentLetter', null);
        await this.getWordList(parentLetter);
        this.isLoaded();
    }

    isLoaded (){
        this.setState({ isLoaded: true });
    }

    async getWordList(letter) {
        await axios.get('search/text/' + letter)
            .then( data => {
                const wordList = data.data;
                this.setState({ wordList });
            })
            .catch( data => {
                const wordList = [];
                this.setState({ wordList })
            });
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.isLoaded 
                    ?
                    <ScrollView>
                        <View>
                            {
                                this.state.wordList.map( (data, index) => (
                                    <WordList
                                        key={index}
                                        navigation={this.props.navigation}
                                        data={data}
                                    />
                                ))
                            }
                        </View>
                    </ScrollView>

                    :
                        <Loader />
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 2.5

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailLetter);