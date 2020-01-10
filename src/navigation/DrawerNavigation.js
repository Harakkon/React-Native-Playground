import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenOne from '../pages/FirstPage';
import ScreenTwo from '../pages/SecondPage';

const DrawerNavigator = createDrawerNavigator({
  One: ScreenOne,
  Two: ScreenTwo
});

export default DrawerNavigator;