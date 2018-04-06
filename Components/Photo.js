import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import googleAPI from '../utils/goog';

export default class Photo extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  confirm = () => {
    Actions['loading']();
    googleAPI(this.props.photoURI, this.props.base64)
    console.log('AFTER CONFIRM and google')
  }

  render(){
    
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
  },
  image: {
    alignSelf : 'stretch',
    width: 400,
    height: 500
  },
  button: {

  }
})