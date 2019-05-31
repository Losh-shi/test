import React from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'
import Detail from './components/Detail'
import Home from "./components/Home";
import My from "./components/My";
//import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "首页",
               // tabBarIcon:({ focused, horizontal, tintColor })=>{
                  //  return <Ionicons name={'ios-home'} size={25} style={{color:tintColor}}/>
               // }
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                title: "详情",
               // tabBarIcon:({ focused, horizontal, tintColor })=>{
                 //   return <Ionicons name={'ios-heart'} size={25} style={{color:tintColor}}/>
                //}
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                title: "我的",
              //  tabBarIcon:({focused,horizontal,tintColor})=>{
                  //  return <Ionicons name={'logo-octocat'} size={25} style={{color:tintColor}}/>
              //  }
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor:"red"
        }
    }
)

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: BottomNavigator,
            navigationOptions: {
                title: "首页"
            }
        }
    },
    {
        initialRouteName: "Home",
        headerLayoutPreset: "center"
    }
)

export default createAppContainer(StackNavigator)
