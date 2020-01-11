import React from 'react';
import { 
    View,
    StyleSheet,
    Dimensions 
} from 'react-native';

const { height, width } = Dimensions.get('window');

const EmptyLetter = props => <View style={styles.container} />

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: (width - 8) / 4,
        width: (width - 8) / 4,
        borderColor: '#eaeaea',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default EmptyLetter;