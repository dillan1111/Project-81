import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen.js';
import ExchangeScreen from '../screens/ExchangeScreen.js';

export const AppTabNavigator = createBottomTabNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home/Exhange"
        }
    },
    Exchange: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarLabel: "Request"
        }
    }
})