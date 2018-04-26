import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, ScrollView, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Result extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    for(landmark of this.props.history){
      if(landmark.title === this.props.title){
        return
      }
    } 
    this.props.addToHistory();
  }

  render(){
    if(this.props.uri){
      return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        <Image source={{ uri: this.props.uri }} style={styles.image}/>
        
        <Text style={styles.title}>{this.props.title}</Text>

        { this.props.summary.map((paragraph, index) => {
          return <Text style={styles.p} key={index}>{paragraph}</Text>
        })}
        
        <TouchableHighlight  onPress={()=> Actions['home']() }>
          <Text style={styles.returnHome}>Return to Home</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10
  },
  image: {
    width: 300,
    height: 300
  },
  p: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    fontSize: 18
  },
  returnHome: {
    paddingTop: 10,
    color: '#568bc1',
    paddingBottom: 10
  }
})