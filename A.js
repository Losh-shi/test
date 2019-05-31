import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

 class HomeScreen extends React.Component {
  render() {
  //  const { navigation } = this.props;
  //  const itemId = navigation.getParam('itemId', 'NO-ID'); <Text>itemId: {JSON.stringify(itemId)}</Text>
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

Tab = createBottomTabNavigator({
  Home1: HomeScreen,
  Settings: SettingsScreen,
});

export default class Home extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
         
          <Button
            title="Go to Details"
           // onPress={() => {
             // this.props.navigation.navigate('HomeScreen',{
              //  itemId: 86,
             // });
  
           // }}
  
          />
           <Tab />
  
        </View>
  
      );
  
    }
  
  }
  
   