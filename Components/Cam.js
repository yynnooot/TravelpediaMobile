import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';


export default class Cam extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async function() {
    if (this.camera) {
      await this.camera.takePictureAsync({base64: true})
        .then(data=>{
          this.props.takePictureAsync(data.uri, data.base64);
          Actions['photo']();
        })
    }
  };

  renderCamera(){
    const { hasCameraPermission } = this.state;
    
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
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
                <Ionicons name='ios-reverse-camera-outline' size={25} color='white' />
              </TouchableOpacity>
             
              <TouchableOpacity 
                onPress={this.snap.bind(this)}
                style={{
                  flex: 0.9,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                >
                <Ionicons name='md-camera' size={32} color='white' />
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

