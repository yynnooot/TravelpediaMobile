import React, { Component } from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Result extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   imageURI: this.props.imageURI
    // }
  }
  componentDidMount(){
    console.log('____:',this.props)
  }
  render(){
    //console.log("THIS IS STATE IN RESULT:",this.props)
    return(
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        <Image source={{ uri: this.props.uri }} style={styles.image}/>
        
        <Text>{this.props.title}</Text>

        { this.props.summary.map((paragraph, index) => {
          return <Text style={styles.p} key={index}>{paragraph}</Text>
        })}
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // imageContainer: {
  //   flex: 2,
  //   width: '100%',
  //   backgroundColor: 'black'
  // },
  image: {
    // alignSelf : 'stretch',
    // overflow : 'visible',
    width: 300,
    height: 300
  },
  // textContainer: {
  //   flex: 3,
  //   padding: 5,
  // }
})