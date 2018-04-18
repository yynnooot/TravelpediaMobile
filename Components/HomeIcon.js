import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';


export default class HomeIcon extends Component{
  constructor(props){
    super(props);
    this.state = {
      key: this.props.keytitle,
      icon: this.props.icon,
    }
  }

  render(){
    const keyName = this.state.key
    
      return (
        <View>
            {/* <Text onPress={()=> Actions[keyName]()} */}
            <Text onPress={()=> Actions[keyName]()}
              >{this.state.icon}</Text>
            <Text>{this.state.key}</Text>
          </View>
      )
    
  }
}