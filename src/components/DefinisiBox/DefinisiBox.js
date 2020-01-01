import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const DefinisiBox = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {
                props.text.map ( (txt, index) => (
                    <Text
                        key={index} 
                        style={styles.text}
                    >
                        {txt}
                    </Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    title: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        color: '#00C749',
        marginBottom: 5
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#333333',
        marginBottom: 8
    },
})

export default DefinisiBox;