import React,{Component} from 'react';
import{View,Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class comein extends React.Component{
    render()
    {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>come in</Text>  
          <Icon name='soundcloud'size={67} color='black'/>    
<Button
 title="come in"

onPress={()=>this.props.navigation.navigate('TabNavigator1')}
/>
        </View>
        )
    }
}