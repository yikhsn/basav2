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
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{props.jenisKata.toUpperCase() } | </Text>
                <Text style={styles.headerDescription}>{props.kata}</Text>
            </View>

            <View style={styles.contentContainer}>
                
                <DefinisBox
                    title="Definisi"
                    text={[
                        'Keranjang yang digunakan oleh etnis gayo untuk dipikul saat memetik kopi dikebun',
                        'Keranjang yang digunakan oleh etnis gayo untuk dipikul saat memetik kopi dikebun',
                        'Keranjang yang digunakan oleh etnis gayo untuk dipikul saat memetik kopi dikebun'
                    ]}
                />

                {/* <ArtiBox 
                    title="Arti Kata"
                    text={['Satu', 'Dua', 'Tiga']}
                />
                
                <ArtiBox 
                    title="Sinonim"
                    text={['Satu', 'Dua', 'Tiga']}
                />
                
                <ContohBox 
                    title="Contoh Kalimat"
                    text={[
                        {
                            kalimat: "Soe sigamnyan lage awak Gayo meuambong",
                            arti: "Siapa lelaki itu menggunakan keranjang seperti Gayo"
                        },
                        {
                            kalimat: "Soe sigamnyan lage awak Gayo meuambong",
                            arti: "Siapa lelaki itu menggunakan keranjang seperti Gayo"
                        }
                    ]}
                /> */}

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