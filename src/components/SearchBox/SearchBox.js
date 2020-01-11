import React from 'react';
import {
    View,
    TouchableOpacity,
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
                autoFocus={true}
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
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5
    },
    inputBox: {
        padding: 15,
        width: '100%',
        height: '100%',
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#666666',
        alignItems: 'center'
    },
});

export default SearchBox;