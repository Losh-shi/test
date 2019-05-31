import React from "react"; 

import { View,Button,Text} from "react-native"; 

import { createStackNavigator, createAppContainer } from "react-navigation"; 

const AppContainer = createAppContainer(AppNavigator);

  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        
        </View>
      );
    }
  }
  
  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen
    },

    {
      initialRouteName: "Home"
    }
  );

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
  