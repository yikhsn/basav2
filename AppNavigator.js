import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeNavigation from './src/screens/HomeNavigation';
import LetterNavigation from './src/screens/LetterNavigation';
import DetailNavigation from './src/screens/DetailNavigation';
import DetailResult from './src/screens/DetailResult';

const AppNavigator = createStackNavigator(
    {
        HomeNavigation: {
            screen: HomeNavigation,
            navigationOptions: {
                title: 'Home'
            },
        },
        LetterNavigation: {
            screen: LetterNavigation,
            navigationOptions: {
                title: 'Single Letter'
            }
        },
        DetailNavigation: {
            screen: DetailNavigation,
            navigationOptions: {
                title: 'Detail'
            }
        },
        DetailResult: {
            screen: DetailResult,
            navigationOptions: {
                title: 'Result'
            }
        }
    },
    {
        initialRouteName: 'HomeNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00C749',
                height: 57
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff',
                fontSize: 20,
                // fontFamily: 'Roboto-Regular',
            },
        }
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;