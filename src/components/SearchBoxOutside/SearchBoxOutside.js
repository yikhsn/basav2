import React from 'react';
import {
    View,
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
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5
    },
    inputBox: {
        padding: 15,
        width: '90%',
        height: '100%',
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#666666',
        alignItems: 'center'
    },
    searchIcon: {

    }
});

export default SearchBox;