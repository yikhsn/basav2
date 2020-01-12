import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = (props) => {
    return(
        <View
            style={styles.container}
        >
             <ActivityIndicator size="large" color="#00C749" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Loader;