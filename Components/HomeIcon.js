import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
// import pickImage from './Album.js'
export default class HomeIcon extends Component{
  constructor(props){
    super(props);
    this.state = {
      key: this.props.keytitle,
      icon: this.props.icon,
    }
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (!result.cancelled) {
      //this.setState({ photoURI: result.uri, base64: result.base64 });
      Actions['photo']({ photoURI: result.uri, base64: result.base64 })
    }
  };

  render(){
    const keyName = this.state.key
    if(keyName === 'album'){
      return (
        <View>
          {/* <Text onPress={()=> Actions[keyName]()} */}
          <Text onPress={this._pickImage.bind(this)}
            >{this.state.icon}</Text>
          <Text>{this.state.key}</Text>
        </View>
      )
    } else {
      return (
        <View>
            {/* <Text onPress={()=> Actions[keyName]()} */}
            <Text onPress={()=> Actions[keyName]()}
              >{this.state.icon}</Text>
            <Text>{this.state.key}</Text>
          </View>
      )
    }
  }
}