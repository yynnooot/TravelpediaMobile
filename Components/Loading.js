import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please Wait While Image Recognition Processes</Text>
        <ActivityIndicator size="large" color="#0000ff" />
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
});
