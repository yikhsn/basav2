import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import ArtiBox from '../ArtiBox/ArtiBox';
import DefinisBox from '../DefinisiBox/DefinisiBox';
import ContohBox from '../ContohBox/ContohBox';

const SingleWordResult = (props) => {

    const { results } = props;
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{results.word_type.toUpperCase() } | </Text>
                <Text style={styles.headerDescription}>{results.words}</Text>
            </View>

            <View style={styles.contentContainer}>
                
                {
                    results.definitions.length > 0 
                        ? 
                            <DefinisBox
                                title="Definisi"
                                text={results.definitions}
                            />
                        : 
                            null
                }

                {
                    results.translations.length > 0
                        ?
                            <ArtiBox 
                                title="Arti Kata"
                                text={results.translations}
                            />
                        :
                            null
                }

                {
                    results.synonyms.length > 0
                        ?
                            <ArtiBox 
                                title="Sinonim"
                                text={results.synonyms}
                            />
                        :
                            null
                }

                {
                    results.examples.length > 0
                        ?
                            <ContohBox 
                                title="Contoh Kalimat"
                                text={results.examples}
                            />
                        :
                            null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 10
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        paddingBottom: 10,
        marginBottom: 10
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#888888'
    },
    headerDescription: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#00C749'
    },
    contentContainer: {

    }
})

export default SingleWordResult;