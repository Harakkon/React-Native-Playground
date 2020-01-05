import React, { Component } from 'react';
import { Text, View,StyleSheet, Animated,Image  } from 'react-native';
import { API_KEY } from '../utils/HelperAPI';


export default class HelloWorldApp extends Component {
  state = {
    temperature: 0,
    weatherCondition: null,
    error: null
  };
  fetchWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`).then(res => res.json()).then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  	}
  componentDidMount() {
	this.fetchWeather(12,24);
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> {this.state.temperature}+{this.state.weatherCondition}</Text>
        <Image style={{ tintColor:'red' }} source={require('../assets/'+'cloud'+'.png')} />
      </View>
    );
  }
}
