import React, { Component } from 'react';

import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import axios from '../axios/axios';

import Letters from '../components/Letters/Letters';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
    state = {
        letters: [
            { letter: 'A', desc: 0},
            { letter: 'B', desc: 0},
            { letter: 'C', desc: 0},
            { letter: 'D', desc: 0},
            { letter: 'E', desc: 0},
            { letter: 'F', desc: 0},
            { letter: 'G', desc: 0},
            { letter: 'H', desc: 0},
            { letter: 'I', desc: 0},
            { letter: 'J', desc: 0},
            { letter: 'K', desc: 0},
            { letter: 'L', desc: 0},
            { letter: 'M', desc: 0},
            { letter: 'N', desc: 0},
            { letter: 'O', desc: 0},
            { letter: 'P', desc: 0},
            { letter: 'Q', desc: 0},
            { letter: 'R', desc: 0},
            { letter: 'S', desc: 0},
            { letter: 'T', desc: 0},
            { letter: 'U', desc: 0},
            { letter: 'V', desc: 0},
            { letter: 'W', desc: 0},
            { letter: 'X', desc: 0},
            { letter: 'Y', desc: 0},
            { letter: 'Z', desc: 0},
        ]
    }

    async componentDidMount(){
        const letters = await this.getLettersInfo();
        this.setState({letters});
    }

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
      }

    async getLettersInfo() {
        const letters = [];

        await this.asyncForEach(this.state.letters, async (letter) => {
            const newLetter = await this.getLetterInfo(letter);

            letters.push(newLetter);
        });

        return letters;
    }

    getLetterInfo = (lttr) => {
        return axios.get('search/text/' + lttr.letter)
            .then( data => {
                const newLetter = {
                    letter: lttr.letter,
                    desc: data.data.length
                };

                return newLetter;
            })
            .catch( data => {
                const newLetter = {
                    letter: lttr.letter,
                    desc: [].length
                };

                return newLetter;
            });
    }
 
    render(){
        return(
            <ScrollView style={styles.container}>
                <Letters
                    navigation={this.props.navigation}
                    letters={this.state.letters}
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