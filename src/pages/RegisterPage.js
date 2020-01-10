import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View,Button } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };

 goToSignup = () => this.props.navigation.navigate('Main')
  render() {
    return (
      <View style={styles.container}>
       <Button title='GO NEXT' onPress={this.goToSignup} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});