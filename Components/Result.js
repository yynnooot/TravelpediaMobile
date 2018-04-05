import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Result extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   imageURI: this.props.imageURI
    // }
  }
  render(){
    console.log('photo props:', this.props.photoURI)
    return(
      <View style={styles.container}>

        <View style={styles.imageContainer}>
         <Image source={{ uri: this.props.photoURI }} style={styles.image}/>
        </View>
        <View style={styles.textContainer}>
          
            <Text>RESULTS DESCRIPTION</Text>
          
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
    flex: 2,
    width: '100%',
    backgroundColor: 'black'
  },
  image: {
    // alignSelf : 'stretch',
    // overflow : 'visible',
    width: '100%',
    height: '100%'
  },
  textContainer: {
    flex: 3,
  }
})