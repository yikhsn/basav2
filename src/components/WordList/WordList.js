import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const WordList = (props) => {
    return(
        <TouchableOpacity 
            onPress={ () => props.navigation.navigate('DetailResult')}
            style={styles.container}
        >
            <View>
                <Text style={styles.word}>Rumoh</Text>
                <Text style={styles.type}>Kata Benda</Text>
            </View>
            <View>
                <Icon name="chevron-right" size={26} color="#777777" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
    },
    word: {
        fontSize: 18,
        color: '#333333'
    },
    type: {
        fontSize: 16,
        color:'#777777',
        // color: '#00C749'
    }
})

export default WordList;