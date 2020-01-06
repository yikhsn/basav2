import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import MainResult from '../components/MainResult/MainResult';
import SingleWordResult from '../components/SingleWordResult/SingleWordResult';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from '../axios/axios';

class DetailResult extends Component{
    constructor(props){
        super(props);

        this.state = {
            results : {
                id: '',
                words: '',
                word_type: '',
                translations: [],
                definitions: [],
                synonyms: [],
                examples: []
            }
        }
    }
    
    async componentDidMount(){
        await this.getData();
    }

    async getData(){
        const _id = this.props.navigation.getParam('_id', null);
        return axios.get(_id)
            .then( data => {
                const results = data.data;
                this.setState({results});
            })
            .catch(data => {
                const results = {};
                this.setState({results});
            });
    }
    
    render(){

        // console.log(this.state.results);
        return(
            <ScrollView style={styles.container}>
                <MainResult
                    results={this.state.results}
                    />
                <SingleWordResult
                    kata="ambong"
                    jenisKata="kata benda"
                    results={this.state.results}
                    />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 10
    },


});

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailResult);