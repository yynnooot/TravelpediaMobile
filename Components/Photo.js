import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Photo extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  confirm = () => {
    Actions['loading']({photoURI: this.props.photoURI})
    console.log('AFTER CONFIRM')
  }
  
  render(){
    console.log('photo props:', this.props.photoURI)
    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: this.props.photoURI }} style={styles.image} />
        </View>
        <View style={{flex: 1}}>
          <TouchableHighlight style={styles.button} onPress={this.confirm}>
            <Text>CONFIRM</Text>
          </TouchableHighlight>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 8,
    
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    alignSelf : 'stretch',
    // overflow : 'visible',
    width: 400,
    height: 500
  },
  button: {

  }
})