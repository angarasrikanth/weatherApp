import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class WeatherApp extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: '',
            temperature: '',
            weather: ''
        }
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Secunderabad,in&appid=96196ad11704d82a3cad1b21764973ab')
            .then((response) => response.json())
            .then((responseData) => {

                let weather = '';
                if (responseData.weather.length) {
                    weather = responseData.weather[0].description;
                }

                this.setState({
                    temperature: Math.round(responseData.main.temp - 273.15),
                    cityName: responseData.name,
                    weather: weather
                });
            })
            .done();
    }

    render() {
        let image = 'https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif';
        if (this.state.weather === 'haze') {
            image = 'https://image.flaticon.com/icons/png/512/52/52017.png';
         }
         console.log(this.state.weather);

        return (
            <View>
                <Text style={text.container}>{this.state.cityName}</Text>
                <Image source={{uri: image}}
                       style={{width: 300, height: 300}}/>

                <Text style={text.temp}>{this.state.temperature} °c </Text>
            </View>
        )
    }
}

const text = StyleSheet.create({
    container: {
        fontSize: 25,
    },
    temp: {
        fontSize: 40,
        paddingLeft: 100,

    }
});

export default WeatherApp;
