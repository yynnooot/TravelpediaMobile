import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class ErrorPage extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sorry, Could Not Recognize Landmark Within Image</Text>
        <TouchableHighlight>
          <Text>Retake Photo</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>Go Back</Text>
        </TouchableHighlight>
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
  }
})
