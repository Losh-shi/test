import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
    AsyncStorage,
  ActivityIndicator,
} from 'react-native';



import { fetchLcation, fetchWeather0, fetchLocationId } from './api';
import getImageForWeather from './getImageForWeather' //用来根据不同的天气显示相应的天气图片背景
import SearchInput from './SearchInput';
import ClockDemo from './clock';//显示一个时钟
var xx='Tianjin'


export default class HomeScreen extends React.Component {

  // static navigationOptions = ({ navigation }) => ({
  //   tabBarOnPress: (tab) => {
  //     this.props._setcity(this.state.location)
  //     // navigation.state.params.navigatePress()
  //   }
  // })

  // tab 切换调用方法
  // clickTabCallback = () => {
  //   this.props._setcity(this.state.location)
  // }

//   componentDidMount() {
//     this.props.navigation.setParams({ navigatePress: this.clickTabCallback })  // 使用这个来调用this
//  }
  

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
 // this.props.navigation.state.navigate('HomeScreen',{params:location});

  //componentDidMount(){
    //this.props.navigation.setParams({param: this.state.location})
 // }


  handleUpdateLocation = async city => {  //将获取的天气信息保存到state中
    if (!city) return;
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather0(
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
    read=async ()=>{  //获取最后一次输入的城市名 
        var city=await AsyncStorage.getItem('city');
        this.setState({city:city,});
        //alert(this.state.city);
    }



    //PX=() => { 
      //this.props.navigation.navigate('WEEK', {
      //     Param: this.state.city,
       // })}

  componentDidMount() {
            this.handleUpdateLocation(xx)
          
  }


  render() {

  

    const { loading, location, error, weather, temperature,city } = this.state;
  
  

    //this.props.navigation.setParams({Param:`${location}`});
   // this.props.navigation.navigate('Day2Screen',{info:`${location}`});
    //this.props.navigation.navigate('Day3Screen',{info:`${location}`});
    //this.props.navigation.navigate('Day4Screen',{info:`${location}`});
    //this.props.navigation.navigate('Day5Screen',{info:`${location}`});
    return (

   
  

      <View style={styles.container} behavior="padding">
      <Text style={{color:'red'}}>{this.state.location}</Text>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.detailsContainer}>
            <ClockDemo/>
            <ActivityIndicator animating={loading} color="white" size="large" />
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}
              </View>
            )}


            {!error && (
              <View>
                <Text style={[styles.largeText, styles.textStyle]} onPress={this.read}>{location}{this.state.city}</Text>
                <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>
              </View>
            )}


            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
      </View>
  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 0,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
