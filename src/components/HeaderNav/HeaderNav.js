import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Platform
} from 'react-native';
import * as actionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBoxOutside from '../SearchBoxOutside/SearchBoxOutside';

class HeaderNav extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { datas, navigation } = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.navigationContainer}>
                    <TouchableOpacity 
                        style={styles.navigationButton}
                        onPress={ () => navigation.goBack() }
                        >
                        <Icon style={styles.navigationIcon} name='ios-arrow-back' size={30} color='#FFFFFF' />
                        <Text style={styles.navigationText}>Kembali</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBoxContainer}>
                    <SearchBoxOutside 
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);