import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class Album extends React.Component {
  state = {
    photoURI: null,
  };

  render() {
    //let { photoURI } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an photoURI from camera roll"
          onPress={this._pickImage}
        />
        {/* {photoURI &&
          <Image source={{ uri: photoURI }} style={{ width: 200, height: 200 }} />} */}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    console.log('is base64?:', result.base64.length > 100)
    if (!result.cancelled) {
      //this.setState({ photoURI: result.uri, base64: result.base64 });
      Actions['photo']({ photoURI: result.uri, base64: result.base64 })
    }
  };
}