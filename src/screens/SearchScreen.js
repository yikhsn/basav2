import React, { Component } from 'react';
import{
    View,
    StyleSheet,
    Text
} from 'react-native';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from '../axios/axios';

import SearchBox from '../components/SearchBox/SearchBox';

class SearchScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    {
                        this.props.datas.searchWordList.map( word => {
                            return(
                                <View>
                                    <Text>{word.words}</Text>
                                </View>
                            )
                        })
                    }
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#eaeaea'

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);