import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ErrorPage extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  goHome(){
    Actions['home']()
  }
  goCam(){
    Actions['cam']()
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sorry, Could Not Recognize Landmark Within Image</Text>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.buttonLeft} onPress={this.goCam}>
            <Text>Retake Photo</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonRight} onPress={this.goHome}>
            <Text>Back to Home</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  buttonLeft: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginRight: 5
  },
  buttonRight: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 5
  }
})
