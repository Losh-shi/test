import React,{Component} from "react"; 
import { View,Text,StyleSheet, ImageBackground,AsyncStorage,ScrollView} from "react-native"; 
import WeekTab from './WeekTab';
import TAB from "./TabNavigator1";
import Screen from './screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/Ionicons';
import Icon6 from 'react-native-vector-icons/Ionicons';

import { fetchLcation, fetchWeather0, fetchLocationId } from './api';
import getImageForWeather from './getImageForWeather'


var ccity='beijing' //AsyncStorage.getItem('city');

var yyy='';

export default class Day1Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
        city: '',
        min_temp:'',
        max_temp:'',
        wind_direction_compass:'',
        wind_speed:'',
        wind_direction:'',
        air_pressure:'',
        humidity:'',
        visibility:'',
        predictability:'',
        time:'',
        sun_rise:'', 
        sun_set:'',
    }
  }

  static navigationOptions = {
    title: 'Day1',
  };

  read=async ()=>{  //获取最后一次输入的城市名 
     ccity=await AsyncStorage.getItem('city');
    this.setState({city:city,});
    yyy=this.state.city;
     alert(yyy);
}

  handleUpdateLocation = async city => {  //将获取的天气信息保存到state中
    if (!city) return;
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature, min_temp,max_temp,wind_direction_compass
    ,wind_speed,wind_direction,air_pressure,humidity,visibility,predictability,time,sun_rise, sun_set,} = await fetchWeather0(
          locationId
        );
        const weatherInfo = await fetchWeather0(
          locationId
        );
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
          min_temp,max_temp,wind_direction_compass
    ,wind_speed,wind_direction,air_pressure,humidity,visibility,predictability,
    time,sun_rise, sun_set,
        });
      } 
      catch (error) {
        this.setState({
          loading: false,
          error,
        })
      }
    });
  };



  componentDidMount() {
    //this.read();
   //alert(ccity)
  this.handleUpdateLocation(ccity)

}


    render() {  
this.read();
const { loading, location, error, weather, temperature,city ,min_temp,max_temp,wind_direction_compass
  ,wind_speed,wind_direction,air_pressure,humidity,visibility,predictability, time,sun_rise, sun_set,} = this.state;


      return (
        <ScrollView>
        <View style={{ flex: 1,  }}>
         <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        > 

        {/* <Text>{Param}</Text> */}
            <View style={{flexDirection:'column',paddingLeft:40}}>
              <View style={{flexDirection:'row'}}>

                <View style={{flexDirection:'column',paddingLeft:40}}>
                  <Text style={[styles.smallText, styles.textStyle]}>{location}</Text>
                  <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                  <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>
              </View>
              <View style={{flexDirection:'column',paddingLeft:60}}>
              <Text style={[styles.smallText, styles.textStyle]}>sun_rise:</Text>
               <Text style={[styles.smallText, styles.textStyle]}>sun_set:</Text> 
               </View>
              </View>
       
              <Text style={[styles.smallText, styles.textStyle]}>min_temp:{`${Math.round(min_temp)}°`}</Text>
                <Text style={[styles.smallText, styles.textStyle]}>max_temp:{`${Math.round(max_temp)}°`}</Text>


              </View>

              <View style={styles.details}>

              <View style={[styles.smallText, styles.hm]}>
                 <Icon3 name='ios-water' size={35} color='blue' />
                 <Text>
                   humidity:</Text>
                   <Text>
                 {`${Math.round(humidity)}%`}</Text>
                </View>

                <View style={[styles.smallText, styles.hm]}>
                <Icon name='home' size={35} color='green'/>
                <Text>visibility:{`${Math.round(visibility)}%`}</Text></View>


                <View style={[styles.smallText, styles.hm]}>
                <Icon name='home' size={35} color='yellow'/>
                <Text>>air_pressure:{air_pressure}</Text></View>


                <View style={[styles.smallText, styles.hm]}>
                <Icon name='home' size={35} color='orange'/>
                <Text>wind_direction_compass:{wind_direction_compass}</Text></View>


                <View style={[styles.smallText, styles.hm]}>
                <Icon1 name='weather-windy' size={35} color='grey'/>

               <Text> wind_speed:{wind_speed}</Text></View>

                <View style={[styles.smallText, styles.hm]}>
                <Icon2 name='direction' size={35} color='pink'/>
                <Text>wind_direction:{wind_direction}</Text></View>
               
               
               
                </View>

             
                
               
                <Text style={[styles.smallText, styles.textStyle]}>predictability:{`${Math.round(predictability)}%`}</Text>
                <Text style={[styles.smallText, styles.textStyle]}>{`${Math.round(time)}`}</Text>
          
         {/**<Screen/><Text style={{color:'red',fontSize:100}}>{`${this.props.info}`}S</Text>  */} 
          
        </ImageBackground> 
        </View>
        </ScrollView>
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
hm:{
  
  justifyContent: "center" ,
  alignContent:'center',
  paddingLeft:9,
  paddingRight:9,
  margin:8,
  //Width:40,
  borderRadius:10,
  borderWidth:2,
  
  width:80,
  borderColor:'grey',
  color:'white',
  backgroundColor:'transparent',
  
  flexDirection:'column',
  flexWrap: 'wrap' 
},
details:
{
 flex:1,
   borderColor:'black',
   borderTopWidth:3,
   borderBottomWidth:3,
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent: "space-between" ,
  paddingLeft:20,
  paddingRight:20,
  paddingBottom:5,
},

imageContainer: {
  flex: 1,
  overflow:'hidden'
},
image: {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover',
},

  });

  
 
   
  