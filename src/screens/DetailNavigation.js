import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import WordList from '../components/WordList/WordList';

class DetailLetter extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                    <WordList navigation={this.props.navigation}/> 
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 2.5

    }
});

export default DetailLetter;