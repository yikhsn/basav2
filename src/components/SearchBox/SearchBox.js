import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

const SearchBox = (props) => {
    return(
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.inputBox}
                autoCorrect={false}
                value={props.values}
                onChangeText={ text => props.handleInputChange(text)}
                placeholder='Masukkan kata disini...'
                placeholderTextColor='#CCCCCC'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    inputBox: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#666666'
    }
});

export default SearchBox;