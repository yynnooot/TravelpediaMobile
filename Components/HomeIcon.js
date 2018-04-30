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
        <View style={styles.container}>
          <View style={styles.circle}>
            <Ionicons style={styles.icon} name={icon} size={32} color='white' onPress={() => Actions[key]()} />
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
      )
    
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  icon: {
    color: '#FFFFA1'
  },
  text: {
    color: 'white',
    shadowOpacity: .7,
    shadowOffset: {width: 0, height: 33},
    shadowRadius: 8,
    shadowColor: '#1A1C51',
    fontSize: 18
  },
  circle: {
    borderRadius: 40,
    width: 50,
    height: 50,
    backgroundColor: 'rgba(69,85,117,0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})