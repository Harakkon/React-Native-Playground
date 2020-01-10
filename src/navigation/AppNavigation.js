import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigation';
import AuthNavigator from './AuthNavigation';

export default createAppContainer(
  createSwitchNavigator({
    Login:AuthNavigator,
    Main: DrawerNavigator
  },)
);