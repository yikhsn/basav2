import React, { Component } from 'react';

import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import axios from '../axios/axios';

import Letters from '../components/Letters/Letters';
import Loader from '../components/Loader/Loader';
import Icon from 'react-native-vector-icons/Entypo';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
    state = {
        isLoaded: true,
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
        this.isLoaded();
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

    isLoaded = () => {
        this.setState({ isLoaded: true });
    }
 
    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.isLoaded
                    ?
                        <ScrollView>
                            <View style={styles.letterContainer}>
                                <View style={styles.letterContainerTitle}>
                                    <Icon name='open-book' size={20} color='#777777' style={styles.letterContainerTitleIcon} />
                                    <Text style={styles.letterContainerTitleText}>Jelajah</Text>
                                </View>
                                <Letters
                                    navigation={this.props.navigation}
                                    letters={this.state.letters}
                                    size={50}
                                    nextScreen='LetterNavigation'
                                />
                            </View>
                        </ScrollView>
                    :
                        <Loader />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    }, 
    searchContainer: {
        // backgroundColor: '#00C749',
        // marginTop: 5,
        // marginLeft: 5,
        // marginRight: 5,
        paddingTop: 5,
        // paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,

    },
    searchContainerTitle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#666666',
        marginBottom: 3
    }, 
    letterContainer: {
        marginTop: 10
    },
    letterContainerTitle: {
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    letterContainerTitleText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
        color: '#777777',
        marginBottom: 3,
    }, 
    letterContainerTitleIcon: {
        marginRight: 7,
        paddingTop: 4
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