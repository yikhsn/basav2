import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const MainResult = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>Ambong</Text>

            <View style={styles.resultBox}>
                
                <View style={styles.descriprionContainer}>
                    <View style={styles.descriprionNumberContainer}>
                        <Text style={styles.descriprionNumber}>1</Text>
                    </View>
                    <View>
                        <Text style={styles.descriprionText}>Adalah sebuah kata yang digunakan untuk mendefinisikan sebuah kata yang lain yang kamu tidak tau artinya dalam bahasa aceh</Text>
                    </View>
                </View>

                <View style={styles.translateContainer}>
                    <View style={styles.descriprionNumberContainer}>
                    </View>
                    <View style={styles.translates}>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
                    </View>
                </View>

            </View>


            <View style={styles.resultBox}>
                <View style={styles.descriprionContainer}>
                    <View style={styles.descriprionNumberContainer}>
                        <Text style={styles.descriprionNumber}>2</Text>
                    </View>
                    <View>
                        <Text style={styles.descriprionText}>Adalah sebuah kata yang digunakan untuk mendefinisikan sebuah kata yang lain yang kamu tidak tau artinya dalam bahasa aceh</Text>
                    </View>
                </View>

                <View style={styles.translateContainer}>
                    <View style={styles.descriprionNumberContainer}>
                    </View>
                    <View style={styles.translates}>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
                        <Text style={styles.translate}>Keranjang</Text>
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
    descriprionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#333333'
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