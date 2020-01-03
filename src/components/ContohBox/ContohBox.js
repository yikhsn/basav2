import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ContohBox = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {
                props.text.map( (txt, index) => (
                    <View
                        key={index} 
                        style={styles.box}
                    >
                        <Text style={styles.kalimat}>"{txt.kalimat}"</Text>
                        <Text style={styles.arti}>"{txt.arti}"</Text>
                    </View>
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
    box: {
        marginBottom: 8
    },
    kalimat: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#333333'
    },
    arti: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#888888'
    }
});

export default ContohBox;