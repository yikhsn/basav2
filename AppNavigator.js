import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeNavigation from './src/screens/HomeNavigation';
import LetterNavigation from './src/screens/LetterNavigation';
import DetailNavigation from './src/screens/DetailNavigation';
import DetailResult from './src/screens/DetailResult';
import SearchScreen from './src/screens/SearchScreen';

const AppNavigator = createStackNavigator(
    {
        HomeNavigation: {
            screen: HomeNavigation,
        },
        LetterNavigation: {
            screen: LetterNavigation,
        },

        DetailNavigation: {
            screen: DetailNavigation,
        },

        DetailResult: {
            screen: DetailResult,    
        },

        SearchScreen: {
            screen: SearchScreen,    
        }
    },
    {
        initialRouteName: 'HomeNavigation',
    },
    
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;