import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const MainResult = props => {
    console.log(props);

    const { results } = props;

    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>{ results.words}</Text>

            <View style={styles.resultBox}>
                
                {
                    results.definitions.map( (definition, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.descriprionContainer}
                            >
                                <View style={styles.descriprionNumberContainer}>
                                    <Text style={styles.descriprionNumber}>{index + 1}</Text>
                                </View>
                                <View style={styles.descriprionTextContainer}>
                                    <Text style={styles.descriprionText}>{definition}</Text>
                                </View>
                            </View>
                        )
                    })
                }

                <View style={styles.translateContainer}>
                    <View style={styles.descriprionNumberContainer}>
                    </View>
                    <View style={styles.translates}>
                        {
                            results.translations.map( (translation, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={styles.translate}
                                    >
                                        {translation}
                                    </Text>
                                )

                            })
                        }
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10
    },
    mainText: {
        fontFamily: 'Vollkorn-Bold',
        fontSize: 50,
        marginBottom: 5,
        color: '#333333'

    },
    resultBox: {
        marginBottom: 15
    },
    descriprionContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    descriprionNumberContainer: {
        width: 25
    },
    descriprionNumber: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        color: '#333333'
    },
    descriprionTextContainer: {
        flex: 1
    },
    descriprionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#333333',
        borderRadius: 15
    },
    translateContainer: {
        flexDirection: 'row',
    },
    translates: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    translate: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#333333',
        textAlign: 'center',
        marginRight: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: '#eaeaea'
    }
})

export default MainResult;