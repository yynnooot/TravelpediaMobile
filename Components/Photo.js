import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Photo extends Component{
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
        <Image source={{ uri: this.props.photoURI }} style={{ flex: 1, zIndex: 5}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})