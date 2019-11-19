import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Letter from '../Letter/Letter';

export default class Letters extends Component{
    render(){
        
        const {letters, navigation, size, nextScreen } = this.props;

        const renderLetter = (ltrs, nvgt, sz, nxt) => (
            <>
                { ltrs.map( letter => (
                    <Letter
                        key={letter.letter}
                        letter={letter.letter}
                        navigation={nvgt}
                        size={sz}
                        nextScreen={nxt}
                    />
                ))}
            </>
        )

        return(
            <View style={styles.container}>
                { renderLetter(letters, navigation, size, nextScreen) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#fffff',
        padding: 2,
        margin: 2
    },
})