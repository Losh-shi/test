import React,{Component} from "react"; 
import { StackNavigator,createAppContainer} from "react-navigation"; 

import {TabNavigator1} from ".app/components/TabNavigator1";

//StackNavigator的各页面路由配置
const StackRouteConfigs={
    Tab1:{
        screen: TabNavigator1
    }//现只配置了一个页面

}

//StackNavigator导航器配置
const StackNavigatorConfigs={
     initialRouteName:'Tab1',
}

const  AppNavigator=StackNavigator(StackRouteConfigs,StackNavigatorConfigs)

export default createAppContainer(AppNavigator); 