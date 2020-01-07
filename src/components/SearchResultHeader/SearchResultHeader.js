import React from 'react';
import { 
    View,
    Text, StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchResultHeader = (props) => {
    return(
        <View style={styles.headerResults}>
            <Feather style={styles.headerIcon} name="list" size={16} color="#888888" />
            <Text style={styles.headerText}>Hasil Pencarian</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    headerResults: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon: {
        marginRight: 5,
        paddingTop: 4
    },
    headerText: {
        fontSize: 16,
        color: '#888888',
        fontFamily: 'OpenSans-Regular',

    },
})

export default SearchResultHeader;