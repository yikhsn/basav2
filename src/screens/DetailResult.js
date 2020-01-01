import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import MainResult from '../components/MainResult/MainResult';
import SingleWordResult from '../components/SingleWordResult/SingleWordResult';

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


})

export default DetailResult;