import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature,time }) => {
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color,borderColor: weatherConditions[weather].borderColor }]}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={weatherConditions[weather].icon} />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
        <Text style={styles.subtitle}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    borderBottomWidth:6,
    borderRightWidth:6,
  },
  image:{
    width: 80, 
    height: 80,
    tintColor:'white'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 10
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;