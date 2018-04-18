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
            <Text>CONFIRM</Text>
          </TouchableHighlight>
        </View>
        
      </View>
    )
  }
}
// const newTextArray = ['hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','hlasjhdflaksjhd','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf','flkahsdflaslkjdf', 'alksdhf lkasdhf lkasdflka skjldfh', 'laksdhf lkajshdf lkajhsdlkf ah', 'jsldf', 'akljsdf,', 'lkajhsd', 'lkfhjaslk' , 'dfhla sdlfjkasldfh laksdjhf lasdf lkashdflkashdlk fhashdf lasjhdf lasjdhf laskjhdf lasdhfl askjdhf lashjdfl askjdhf', 'lkasdjhflaskdhfkashdfl asdhlf asdhf asldhf lashdf lkashd', 'flasjhdf', 'lajshdf', 'lajkshdf lajshd']
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
  button: {
    backgroundColor: '#00cc00',
    padding: 15
  }
})