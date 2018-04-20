import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';


export default class HomeIcon extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    const key = this.props.keytitle
    const icon = this.props.icon
    const text = this.props.text
    
      return (
        <View>
          <Ionicons name={icon} size={32} color='white' onPress={() => Actions[key]()} />
          <Text style={{color: 'white'}}>{text}</Text>
        </View>
      )
    
  }
}