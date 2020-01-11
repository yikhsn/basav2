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
import axios from '../axios/axios';
import Loader from '../components/Loader/Loader';

import SearchHeaderAppleNav from '../components/HeaderNav/HeaderNav';

class SingleLetter extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
            parentLetter: '',
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
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: <SearchHeaderAppleNav navigation={navigation} />
        }
    }
    
    async componentDidMount(){
        const parentLetter = this.props.navigation.getParam('parentLetter', null);
        this.setParentLetter(parentLetter);

        await this.mergeParentLetter(parentLetter);
        
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

    setParentLetter = (parentLetter) => {
        this.setState({parentLetter});
    }

    async mergeParentLetter(parentLetter){
        const letters = this.state.letters.map( letter => {
            return {
                letter: parentLetter.concat(letter.letter),
                desc: 0
            }
        });

        this.setState({ letters });
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
                            <Letters
                                letters={this.state.letters}
                                navigation={this.props.navigation}
                                size={40}
                                nextScreen='DetailNavigation'
                            />
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