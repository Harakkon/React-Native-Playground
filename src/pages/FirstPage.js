import React, { Component } from 'react';
import { Text, View,StyleSheet, Animated,Image,ScrollView,RefreshControl,StatusBar} from 'react-native';
import { API_KEY } from '../utils/HelperAPI';
import Weather  from '../templates/WeatherContainer';
import Geolocation from '@react-native-community/geolocation';
import { weatherConditions } from '../utils/WeatherConditions';

export default class FirstPage extends Component<{}> {
  state = {
  	latitude:22,
  	longitude:22,
    temperature:'0',
    weatherCondition: 'Clear',
    error: null,
    refreshing: true
  };
	getCurrentCoords=()=>{
			Geolocation.getCurrentPosition(position=>{
				this.setState({latitude: position.coords.latitude,longitude: position.coords.longitude},
					()=>{this.fetchWeather(
						this.state.latitude,
						this.state.longitude);
					})
			})
	}

  fetchWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`).then(res => res.json()).then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
    this.setState({refreshing: false});
  	}
  componentDidMount() {
  	this.getCurrentCoords()
	}
	_onRefresh() {
    this.setState({refreshing: true});
    this.fetchWeather(this.state.latitude,this.state.longitude);
  	}
  render() {
    return (     
    	<ScrollView contentContainerStyle={{flexGrow: 1}} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
      <StatusBar backgroundColor={weatherConditions[this.state.weatherCondition].color}/>
    	<Weather weather={this.state.weatherCondition} temperature={this.state.temperature}/>
    	</ScrollView>
    );
  }
}
