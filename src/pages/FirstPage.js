import React, { Component } from 'react';
import { Text, View,StyleSheet, Animated,Image  } from 'react-native';
import { API_KEY } from '../utils/HelperAPI';
import  Weather  from '../templates/WeatherContainer';


export default class FirstPage extends Component<{}> {
  state = {
    temperature:'0',
    weatherCondition: 'Clear',
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
    	<Weather weather={this.state.weatherCondition} temperature={this.state.temperature}/>
    );
  }
}
