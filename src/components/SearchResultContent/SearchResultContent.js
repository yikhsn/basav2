import React from 'react';
import {
    View,
    TouchableOpacity,
    Text, 
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const SearchResultContent = (props) => {
    return(
        <View 
            style={styles.contentResults}
        >
            {
                props.searchWordList.map( word => {
                    return(
                        <TouchableOpacity
                            key={word._id}
                            style={styles.result}
                            onPress={ () => props.navigation.navigate('DetailResult', {
                                _id: word._id
                            })}
                        >
                            <Text style={styles.resultText}>{word.words}</Text>
                            <Icon name="chevron-thin-right" size={16} color="#888888" />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contentResults: {
    },
    result: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#dddddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resultText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#444444'
    }
});

export default SearchResultContent;