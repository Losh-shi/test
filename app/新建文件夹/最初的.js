import React from "react"; 

import { View,Button,Text} from "react-native"; 

import { createStackNavigator, createAppContainer } from "react-navigation"; 


class HomeScreen extends React.Component { 
  render() { 
    return (
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
       <Text>page1</Text> 
       <Button
          title="Go to page2"
          onPress={() => this.props.navigation.navigate('page2')}
        />
           <Button
          title="Go to page3"
          onPress={() => this.props.navigation.navigate('page3')}
        />
 <Button
         title="Go to page1"
         onPress={() => this.props.navigation.navigate('page1')}
       />


       </View> ); } } 



class DetailScreen extends React.Component { 
  render() { 
    return (
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
       <Text>page2</Text> 
       <Button
          title="Go to page3"
          onPress={() => this.props.navigation.navigate('page3')}
        />

       </View> ); } } 
class week extends React.Component{
  render(){

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
      <Text>page3</Text> 
      <Button
         title="Go to page1"
         onPress={() => this.props.navigation.navigate('page1')}
       />

      </View> 

    )
  }
}


const AppNavigator = createStackNavigator({
  page1: { screen: HomeScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'page1',
    }),
  } ,
  page2:{screen: DetailScreen, 
    navigationOptions: ({ navigation }) => ({
      title: 'page1',
    }),
  },
   page3:{screen:week,
    navigationOptions: ({ navigation }) => ({
      title: 'page1',
    }),
  },
  


});
       
        export default createAppContainer(AppNavigator); 