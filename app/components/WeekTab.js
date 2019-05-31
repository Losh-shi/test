import React from "react"; 
import {createMaterialTopTabNavigator,createAppContainer } from "react-navigation"; 

import Day1Screen from"./Day1";
import Day2Screen from"./Day2";
import Day3Screen from"./Day3";
import Day4Screen from"./Day4";
import Day5Screen from"./Day5";

import Icon from 'react-native-vector-icons/FontAwesome';


const TabRouteConfigs={
    Day1: {
        screen: Day1Screen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Day1',
           tabBarIcon: ({focused, tintColor}) => (
                <Icon name='home'size={35} color={tintColor}/>
           ),
      

        }),
    },

    Day2: {
        screen: Day2Screen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Day2',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name='bar-chart'size={35} color={tintColor}/>
           ),
       
        }),
    },
    
    Day3: {
        screen: Day3Screen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Day3',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name='flickr'size={35} color={tintColor}/>
           ),
     
        }),
    },
    Day4: {
        screen: Day4Screen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Day4',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name='bar-chart'size={35} color={tintColor}/>
           ),
        
        }),
    },
    Day5: {
        screen: Day5Screen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Day5',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name='bar-chart'size={35} color={tintColor}/>
           ),
    
        }),
    },
}

const TabNavigatorConfigs={
    tabBarOptions: {
        //当前选中的tab bar的文本颜色和图标颜色
        activeTintColor: '#34495E',
        //activeTintColor: '#4BC1D2',
        //当前未选中的tab bar的文本颜色和图标颜色
        inactiveTintColor: '#000',
        //是否显示tab bar的图标，默认是false
        showIcon: true,
        //showLabel - 是否显示tab bar的文本，默认是true
        showLabel: true,
        //是否将文本转换为大小，默认是true
        upperCaseLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,
        //tab bar的样式
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        //tab bar的文本样式
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 0},
    },
    //tab bar的位置, 可选值： 'top' or 'bottom'
   // tabBarPosition: 'bottom',
    //是否允许滑动切换tab页
    swipeEnabled: true,
    //是否在切换tab页时使用动画
    animationEnabled: false,
    //是否懒加载
    lazy: true,
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none',

}
    
const Week=createMaterialTopTabNavigator(TabRouteConfigs,TabNavigatorConfigs)

const WeekTab = createAppContainer(Week);

export default WEEK =(props)=>{
    return <WeekTab screenProps={{city: props.city}}/>;
  
    }

