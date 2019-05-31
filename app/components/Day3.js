import React,{Component} from "react"; 
import { View,Text,StyleSheet} from "react-native"; 
import WeekTab from './WeekTab';

import Screen from './screen';
import Icon from 'react-native-vector-icons/FontAwesome';
//class
import { fetchLcation, fetchWeather2, fetchLocationId } from './api';
 

export default class Day2Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
        city:'',
    }
  }

  static navigationOptions = {
    title: 'Day2',
  };




  handleUpdateLocation = async city => {  //将获取的天气信息保存到state中
    if (!city) return;
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather2(
          locationId
        );
        const weatherInfo = await fetchWeather2(
          locationId
        );
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        });
      } catch (error) {
        this.setState({
          loading: false,
          error,
        })
      }
    });
  };

  
  componentDidMount() {
    this.handleUpdateLocation('Shanghai')

}

    render() {  

      //const x=this.props.navigation.state.params;
let x='shanghai';


const { loading, location, error, weather, temperature,city } = this.state;


      return (
      
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={[styles.largeText, styles.textStyle]} >{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>

        
      
         {/**<Screen/><Text style={{color:'red',fontSize:100}}>{`${this.props.info}`}S</Text> */} 
          
          
        </View>
    
      );
    }
  }

  const styles = StyleSheet.create({


    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },


  });

  
 
   
  