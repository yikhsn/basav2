import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import MainResult from '../components/MainResult/MainResult';

class DetailResult extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MainResult />
            </View>
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