/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import navigation from 'react-navigation';
import gesture from 'react-native-gesture-handler';
import reanimated from 'react-native-reanimated';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
     <View style={styles.basicViewStyle}>
        <Text>Engine: Hermes</Text>
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  basicViewStyle:{
    alignItems:'center',
    alignSelf: 'stretch',
    justifyContent:'center',
    paddingLeft:40,
    paddingRight:40
  },
});

export default App;
