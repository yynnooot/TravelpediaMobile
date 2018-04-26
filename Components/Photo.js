import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import googleAPI from '../utils/goog';

export default class Photo extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  confirm = () => {
    Actions['loading']();
    this.props.googleThunkAPI(this.props.base64)
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: this.props.uri }} style={styles.image} />
        </View>
        <View style={{flex: 1}}>
          <TouchableHighlight style={styles.button} onPress={this.confirm}>
            <Text style={styles.text}>CONFIRM</Text>
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
    alignSelf: 'stretch',
    width: 400,
    height: 500
  },
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: '#568bc1',
    padding: 15,
    borderRadius: 5
  }
})