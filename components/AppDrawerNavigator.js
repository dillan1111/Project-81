import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import CustomSideBarMenu  from './CustomSideBar';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Settings: {
          screen: SettingsScreen
      }
  
  },
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

