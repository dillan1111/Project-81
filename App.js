import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignupLoginScreen from './screens/SignupLoginScreen.js';
import { AppDrawerNavigator } from './components/AppDrawerNavigator.js';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  OpeningScreen:{screen: SignupLoginScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);