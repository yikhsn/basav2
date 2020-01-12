import React, { Component, useEffect } from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './src/store/appReducer';
import AppNavigator from './AppNavigator';
import SplashScreen from 'react-native-splash-screen';

const store = createStore(appReducer);

const App = () => {
  
  useEffect( () => {
    SplashScreen.hide()
  }, []);

  return(
    <Provider store={store}>
      <StatusBar backgroundColor='#00C749' barStyle="light-content" />
      <AppNavigator />
    </Provider>
  )
}

export default App;