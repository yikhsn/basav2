import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeNavigation from './src/screens/HomeNavigation';
import LetterNavigation from './src/screens/LetterNavigation';
import DetailNavigation from './src/screens/DetailNavigation';
import DetailResult from './src/screens/DetailResult';
import SearchScreen from './src/screens/SearchScreen';

import SearchHeaderApple from './src/components/SearchHeaderApple/SearchHeaderApple';
import SearchHeaderAppleScreen from './src/components/SearchHeaderAppleScreen/SearchHeaderAppleScreen';

const AppNavigator = createStackNavigator(
    {
        HomeNavigation: {
            screen: HomeNavigation,
            navigationOptions: {
                // title: 'Home'
                header: navProps => <SearchHeaderApple {...navProps}/>

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
        },
        SearchScreen: {
            screen: SearchScreen,
            navigationOptions: {
                header: navProps => <SearchHeaderAppleScreen {...navProps}/>
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
    },
    
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;