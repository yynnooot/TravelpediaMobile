import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class Cam extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      // loading: false,
    }
    //this.renderCamera = this.renderCamera.bind(this)
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
    this.setState({ hasCameraPermission: status === 'granted' });
    console.log("should be granted now")
  }

  snap = async function() {
    if (this.camera) {
      await this.camera.takePictureAsync({base64: true})
        .then(data=>{
          console.log('datauri from camera:', data.uri)
          Actions['photo']({photoURI: data.uri, base64: data.base64 });
        })
    }
  };

  renderCamera(){
    const { hasCameraPermission } = this.state;
    // if (hasCameraPermission === null) {
    //   console.log("CAMERA IS NULL")
    //   return <View />;
    // } else 
    if (hasCameraPermission === false) {
      console.log("CAMERA NO PERMISSION")
      return <Text>No access to camera</Text>;
    } else {
      console.log("CAMERA SHOULD BE RENDERING")
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
             
              <TouchableOpacity 
                onPress={this.snap.bind(this)}
                style={{
                  flex: 0.9,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                >
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>CAMERA</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
  }

   render() {
    if(this.state.hasCameraPermission !== null){
      return this.renderCamera() 
    } else {
      return (<Text>waiting</Text>)
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

