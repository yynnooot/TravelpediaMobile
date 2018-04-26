import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';
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
      this.props.selectPictureAsync(result.uri)
      console.log(result.uri)
      Actions['photo']({base64: result.base64})
    }
  };
  
  render(){
      return (
        <View style={styles.container}>
          <Ionicons style={styles.icon} name="md-photos" size={32} color="white" onPress={this.pickImage.bind(this)}/>
          <Text style={styles.text}>My Album</Text>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  icon: {
    color: '#FFFFA1'
  },
  text: {
    color: 'white',
    shadowOpacity: .7,
    shadowOffset: {width: 0, height: 33},
    shadowRadius: 8,
    shadowColor: '#1A1C51',
    fontSize: 18
  }
})