import React from 'react';
import { 
    View,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions 
} from 'react-native';

const { height, width } = Dimensions.get('window');

const Letter = props => {
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={ () => props.navigation.navigate(props.nextScreen) }
        >
            <Text style={ [styles.letter, { fontSize: props.size }]}>{props.letter}</Text>
            <Text style={styles.description}>400 kata - {props.letter}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: (width - 16) / 4,
        width: (width - 16) / 4,
        margin: 1,
        // borderWidth: 1,
        // borderColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        // fontSize: 40,
        color: '#00C749'
    },
    description:{
        fontSize: 11,
        color: '#666666'
    }
})

export default Letter;