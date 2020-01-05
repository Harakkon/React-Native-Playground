/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginPage from './src/pages/LoginPage';
import FirstPage from './src/pages/FirstPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FirstPage);
