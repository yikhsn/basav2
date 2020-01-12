import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import MainResult from '../components/MainResult/MainResult';
import SingleWordResult from '../components/SingleWordResult/SingleWordResult';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Loader from '../components/Loader/Loader';
import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from '../axios/axios';

class DetailResult extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
            results : {}
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: <HeaderNav navigation={navigation} />
        }
    }
    
    async componentDidMount(){
        await this.getData();
        this.isLoaded();
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

    isLoaded(){
        this.setState({ isLoaded: true });
    }
    
    render(){
        return(
                <View style={styles.container}>
                    {
                        this.state.isLoaded
                        ?
                            Object.entries(this.state.results).length === 0
                            ?
                                <Text>Object is null</Text>
                            :
                                <ScrollView style={styles.results}>
                                    <MainResult
                                        results={this.state.results}
                                        />
                                    <SingleWordResult
                                        kata="ambong"
                                        jenisKata="kata benda"
                                        results={this.state.results}
                                        />
                                </ScrollView>
                        :
                            <Loader />
                    }
                    </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    results:{
        padding: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailResult);