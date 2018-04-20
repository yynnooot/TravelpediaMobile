import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, ScrollView, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Result extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   imageURI: this.props.imageURI
    // }
  }
  componentDidMount(){
    this.props.addToHistory();
  }

  render(){
    if(this.props.uri){
      return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        <Image source={{ uri: this.props.uri }} style={styles.image}/>
        
        <Text>{this.props.title}</Text>

        { this.props.summary.map((paragraph, index) => {
          return <Text style={styles.p} key={index}>{paragraph}</Text>
        })}
        
        <TouchableHighlight onPress={()=> Actions['home']() }>
          <Text>Return to Home</Text>
        </TouchableHighlight>
      </ScrollView>
      )
    } else {
      return (
        <Text>Hello</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300
  }
})