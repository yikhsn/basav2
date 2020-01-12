import React, { Component } from 'react';
import{
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchResultHeader from '../components/SearchResultHeader/SearchResultHeader';
import SearchResultContent from '../components/SearchResultContent/SearchResultContent';
import Loader from '../components/Loader/Loader';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';

class SearchScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: <HeaderSearch navigation={navigation} />
        }
    }

    render(){
        const { datas, navigation } = this.props;

        return(
            <View style={styles.container}>
                {
                    datas.isSearching
                    ?
                        <Loader />
                    :
                        datas.searchWordList.length > 0
                        ?
                        <ScrollView>
                            <View style={styles.boxResults}>
                                <SearchResultHeader />

                                <SearchResultContent
                                    searchWordList={datas.searchWordList}
                                    navigation={navigation}
                                    />
                            </View>
                        </ScrollView>
                        :
                            null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    boxResults: {
        flex: 1,
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