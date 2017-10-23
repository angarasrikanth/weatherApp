import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherApp from "./components/WeatherApp";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <WeatherApp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingLeft:15,
    alignItems:'flex-start',
    justifyContent: 'space-between',
      backgroundColor:'#cccc00',
      height: '100%',
      width: '100%'
  }
});
