import React,{Component} from "react"; 
import { View,Text} from "react-native"; 
import Icon from 'react-native-vector-icons/FontAwesome';
//class 
class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other',
  };

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Other Screen</Text>  
          <Icon name='soundcloud'size={67} color='black'/>     
        </View>
      );
    }
  }
  export default OtherScreen;
   
  