import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import Letters from '../components/Letters/Letters';
import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SingleLetter extends Component{
    render(){

        const letters = [
            { letter: 'AA', desc: '400 kata'},
            { letter: 'AB', desc: '400 kata'},
            { letter: 'AC', desc: '400 kata'},
            { letter: 'AD', desc: '400 kata'},
            { letter: 'AE', desc: '400 kata'},
            { letter: 'AF', desc: '400 kata'},
            { letter: 'AG', desc: '400 kata'},
            { letter: 'AH', desc: '400 kata'},
            { letter: 'AI', desc: '400 kata'},
            { letter: 'AJ', desc: '400 kata'},
            { letter: 'AK', desc: '400 kata'},
            { letter: 'AL', desc: '400 kata'},
            { letter: 'AM', desc: '400 kata'},
            { letter: 'AN', desc: '400 kata'},
            { letter: 'AO', desc: '400 kata'},
            { letter: 'AP', desc: '400 kata'},
            { letter: 'AQ', desc: '400 kata'},
            { letter: 'AR', desc: '400 kata'},
            { letter: 'AS', desc: '400 kata'},
            { letter: 'AT', desc: '400 kata'},
            { letter: 'AU', desc: '400 kata'},
            { letter: 'AV', desc: '400 kata'},
            { letter: 'AW', desc: '400 kata'},
            { letter: 'AX', desc: '400 kata'},
            { letter: 'AY', desc: '400 kata'},
            { letter: 'AZ', desc: '400 kata'},
        ];

        return(
            <ScrollView style={styles.container}>
                <Letters
                    letters={letters}
                    navigation={this.props.navigation}
                    size={40}
                    nextScreen='DetailNavigation'
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
});

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleLetter);