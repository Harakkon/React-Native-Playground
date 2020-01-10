/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import LoginPage from './src/pages/LoginPage';
import FirstPage from './src/pages/FirstPage';
import SecondPage from './src/pages/SecondPage';
import LoadingPage from './src/pages/LoadingPage';
import TestPage from './src/pages/RegisterPage';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
