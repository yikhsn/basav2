import React, { Component } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';

import * as actionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from '../SearchBox/SearchBox';

class SearchHeaderApple extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { datas } = this.props;

        return(
            <View style={styles.container}>
                <SearchBox
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
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