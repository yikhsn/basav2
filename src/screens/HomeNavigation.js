import React, { Component } from 'react';

import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import Letters from '../components/Letters/Letters';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
    render(){

        const letters = [
            { letter: 'A', desc: '400 kata'},
            { letter: 'B', desc: '400 kata'},
            { letter: 'C', desc: '400 kata'},
            { letter: 'D', desc: '400 kata'},
            { letter: 'E', desc: '400 kata'},
            { letter: 'F', desc: '400 kata'},
            { letter: 'G', desc: '400 kata'},
            { letter: 'H', desc: '400 kata'},
            { letter: 'I', desc: '400 kata'},
            { letter: 'J', desc: '400 kata'},
            { letter: 'K', desc: '400 kata'},
            { letter: 'L', desc: '400 kata'},
            { letter: 'M', desc: '400 kata'},
            { letter: 'N', desc: '400 kata'},
            { letter: 'O', desc: '400 kata'},
            { letter: 'P', desc: '400 kata'},
            { letter: 'Q', desc: '400 kata'},
            { letter: 'R', desc: '400 kata'},
            { letter: 'S', desc: '400 kata'},
            { letter: 'T', desc: '400 kata'},
            { letter: 'U', desc: '400 kata'},
            { letter: 'V', desc: '400 kata'},
            { letter: 'W', desc: '400 kata'},
            { letter: 'X', desc: '400 kata'},
            { letter: 'Y', desc: '400 kata'},
            { letter: 'Z', desc: '400 kata'},
        ];

        return(
            <ScrollView style={styles.container}>
                <Letters
                    navigation={this.props.navigation}
                    letters={letters}
                    size={50}
                    nextScreen='LetterNavigation'
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        // padding: 2,
    }
});

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);