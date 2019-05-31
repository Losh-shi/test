
import React, {Component} from 'react';
import {StyleSheet, Text, View,Animated,Image,Easing} from 'react-native';

export default class Screen extends Component{
//使用 Animated.Value 声明了一个 spinValue 变量，并传了一个 0 作为初始值。
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }

//创建了一个名为 spin 的方法，并在 componentDidMount 中调用它，目的是在 app 加载之后运行动画：
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }



  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
            source={require('./sun2.jpg')}
        />
        <View style={{paddingTop:2,alignContent:'center'}}>
          <Text style={{fontSize:50}}>
            sunny
          </Text>
        </View>
      </View>
    )
          }  


        }

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'white'
          }
        })