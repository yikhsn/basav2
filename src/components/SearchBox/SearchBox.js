import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

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
                onFocus={ text => props.navigation.navigate('SearchScreen') }
                placeholder='Masukkan kata disini...'
                placeholderTextColor='#CCCCCC'
            />
            <Icon name='search' size={30} color='#cccccc' style={styles.searchIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        // alignItems: 'center'
        borderRadius: 5
    },
    inputBox: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#666666',
        alignItems: 'center'
    },
    searchIcon: {

    }
});

export default SearchBox;