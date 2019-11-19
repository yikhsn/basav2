import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './src/store/appReducer';
import AppNavigator from './AppNavigator';

import Home from './src/screens/HomeNavigation';

const store = createStore(appReducer);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  
});