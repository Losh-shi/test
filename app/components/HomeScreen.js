import React,{Component} from "react"; 
import { View,Text} from "react-native"; 
import Icon from 'react-native-vector-icons/FontAwesome';

//class 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>  
          <Icon name='soundcloud'size={67} color='black'/>    
        </View>
      );
    }
  }


  
   
  