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

class DetailResult extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <MainResult />
                <SingleWordResult
                    kata="ambong"
                    jenisKata="kata benda"
                />
                <SingleWordResult
                    kata="ambong"
                    jenisKata="kata benda"
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