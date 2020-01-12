import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Platform
} from 'react-native';
import * as actionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBoxOutside from '../SearchBoxOutside/SearchBoxOutside';

class HeaderHome extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { datas } = this.props;

        return(
            <View style={styles.container}>
                <SearchBoxOutside
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'android' ? 80 : 130,
        paddingTop: Platform.OS === 'android' ? 10 : 60,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);