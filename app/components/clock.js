

import React, {Component} from 'react';
import {Platform, Dimensions,StyleSheet, Text, View,ImageBackground} from 'react-native';
export default class ClockDemo extends Component {
    constructor() {
        super()
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    //componentWillMount()是React组件的生命周期函数
    componentWillMount() {
        var func = function() {
            //获取当前时间
            var date = new Date()
            var minutes = date.getMinutes()
            var seconds = date.getSeconds()
            //计算旋转角度，并实时改变this.state的值
            this.setState({
                hour: (date.getHours()) % 12 * (360 / 12) + (360 / 12) * (minutes / 60),
                minute: minutes * (360 / 60) + (360 / 60) * (seconds / 60),
                second: seconds * (360 / 60)
            })
        }.bind(this)
        func()
        //每间隔1s执行一次func()方法
        setInterval(func, 1000)
    }
    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container}>
                    <Text style={{position: 'absolute',top:6,fontSize:25,color:'white'}}>12</Text>
                    <Text style={{position: 'absolute',bottom:6,fontSize:25,color:'white'}}>6</Text>
                    <Text style={{position: 'absolute',right:6,fontSize:25,color:'white'}}>3</Text>
                    <Text style={{position: 'absolute',left:6,fontSize:25,color:'white'}}>9</Text>
                    <View  style={[styles.clockSecondLine,{transform: [{rotateZ:`${this.state.second}deg`}]}]}>
                        <View style={styles.left}/>
                        <View style={styles.right}/>
                    </View>
                    <View  style={[styles.clockHourLine,{transform: [{rotateZ:`${this.state.hour}deg`}]}]}>
                        <View style={styles.left}/>
                        <View style={styles.right}/>
                    </View>
                    <View  style={[styles.clockMinuteLine,{transform: [{rotateZ:`${this.state.minute}deg`}]}]}>
                        <View style={styles.left}/>
                        <View style={styles.right}/>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: 200,//Dimensions.get('window').width,
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'white',
        borderWidth:3,
        borderRadius:100,
        },
    container1:{
        width: Dimensions.get('window').width,
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
    },
clockMinuteLine:{
    flex:1,
    width: 4,
    height:90,

    position: 'absolute',
},
    clockSecondLine:{
        flex:1,
        width: 4,
        height:120,

        position: 'absolute',
},
    left:{
        flex:1/2,
        backgroundColor:'white'
    },
    right:{
        flex:1/2,
        backgroundColor:'transparent'
    },
    clockHourLine:{
        flex:1,
        width: 4,
        height:58,
        position: 'absolute',

    }
})
