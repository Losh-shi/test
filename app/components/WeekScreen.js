import React,{Component} from "react"; 
import { View,Text} from "react-native"; 
import WeekTab from './WeekTab';

import Icon from 'react-native-vector-icons/FontAwesome';
//class 
class WeekScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Week',
  };

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Week Screen</Text>   
          <Icon name='soundcloud'size={67} color='black'/>    
        </View>
      );
    }
  }
  export default WeekScreen;
   
  