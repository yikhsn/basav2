import React, { Component } from 'react';
import{
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResultHeader from '../components/SearchResultHeader/SearchResultHeader';
import SearchResultContent from '../components/SearchResultContent/SearchResultContent';


class SearchScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.boxResults}>

                    <SearchResultHeader />

                    <SearchResultContent
                        searchWordList={this.props.datas.searchWordList}
                        navigation={this.props.navigation}
                    />

                    

                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    boxResults: {
        backgroundColor: '#FFFFFF'
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