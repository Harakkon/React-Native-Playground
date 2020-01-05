import React, { Component,Fragment } from 'react';
import { Text, View,StyleSheet, Animated,Image,ScrollView,RefreshControl,SafeAreaView,StatusBar,FlatList} from 'react-native';
import { API_KEY } from '../utils/HelperAPI';
import Weather  from '../templates/WeatherMultiContainer';
import Geolocation from '@react-native-community/geolocation';

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = "0"+a.getHours();
  var minutes = "0"+ a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' В ' + hour.substr(-2)+ ':' + minutes.substr(-2);
  return time;
}

export default class FirstPage extends Component<{}> {
  state = {
  	latitude:22,
  	longitude:22,
    temperature:'0',
    weatherCondition: 'Clear',
    error: null,
    refreshing: false,
    data:[]
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
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`).then(res => res.json()).then(json => {
        this.setState({
          data: json
        });
      });
    this.setState({refreshing: false});
  	}

  componentDidMount() {
	this.getCurrentCoords()
	}
  _onRefresh() {
    this.setState({refreshing: false}); 
  	}

  render() {
    return (
    	<View>
    	<StatusBar backgroundColor="blue" barStyle="light-content" />
	    <FlatList data={this.state.data.list} keyExtractor={(x, i) => i} renderItem={({item}) => <Weather weather={item.weather[0].main} temperature={item.main.temp} time={timeConverter(item.dt)} />} />
	    </View>
    );
  }
}
const styles = StyleSheet.create({
   container: {   
    borderBottomWidth:4,
    borderRightWidth:4,
 },
 flex:{
 	flex:1,
 }

})
