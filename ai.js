import React,{Component} from "react"; 
import { createStackNavigator,createAppContainer} from "react-navigation"; 

import TAB from "./app/components/TabNavigator1";
import comein from "./app/components/comeinScreen";

//StackNavigator的各页面路由配置
const StackRouteConfigs={
    TabNavigator1:
    {
        screen: TAB,
    },
    comein:
    {
        screen:comein,
    }
    //现只配置了两个页面

}

//StackNavigator导航器配置
const StackNavigatorConfigs={
     initialRouteName:'comein',
     
}

TabNavigator1.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName; 
    return {
      headerTitle,
    };
  };


 AppNavigator=createStackNavigator(StackRouteConfigs,StackNavigatorConfigs)

export default createAppContainer(AppNavigator); 