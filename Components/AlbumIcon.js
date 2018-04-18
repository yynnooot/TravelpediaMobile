import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class AlbumIcon extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (!result.cancelled) {
      this.props.selectPictureAsync(result.uri, result.base64)
      Actions['photo']()
    }
  };
  
  render(){
      return (
        <View>
          {/* <Text onPress={()=> Actions[keyName]()} */}
          <Text onPress={this.pickImage.bind(this)}
            >ICON</Text>
          <Text>Album</Text>
        </View>
      )
  }
}