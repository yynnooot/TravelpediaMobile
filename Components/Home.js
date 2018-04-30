import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { Font, AppLoading, LinearGradient } from "expo";
// import LinearGradient from 'react-native-linear-gradient';

import HomeIcon from './HomeIcon';
import AlbumIconContainer from './AlbumIconContainer';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      icons: [
        { icon: 'md-camera', key: 'cam', text: 'Camera' },
        { icon: 'ios-list-box', key: 'history', text: 'History' }
      ],
      loading: true
    }
  }
  componentDidMount(){
    this.loadFont();
  }

  async loadFont(){
    await Font.loadAsync({
      'lobster': require('../assets/fonts/Lobster-Regular.ttf')
    });
    this.setState({loading: false})
  }
  
  render(){
    if(this.state.loading){
      return (
        <AppLoading />
      )
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/pisa.jpeg')} style={StyleSheet.absoluteFillObject}>
          <LinearGradient
            colors={['rgba(79, 206, 249,0.5)', 'rgba(114, 110, 248,0.5)', 'rgba(77,6,131,0.8)']} 
            style={styles.gradientContainer}
          >
            <View style={styles.header}>
              <Text style={styles.title}>Travelpedia</Text>
              <Text style={styles.body}>Learn While You Travel</Text>
            </View>
            <View style={styles.icons}>

              <AlbumIconContainer/>

              { this.state.icons.length > 0 ? this.state.icons.map(obj => {
                return <HomeIcon style={styles.icon} icon={obj.icon} keytitle={obj.key} key={obj.key} text={obj.text}/>
            }): null}
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // backgroundColor: '#568bc1',
    flex: 1
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: null,
    height: null
  },
  gradientContainer: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  },
  header: {
    justifyContent: 'center',
    marginTop: 100,
    flex: 3,
  },
  title: {
    fontFamily: 'lobster',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 55,
    color: '#FFFFA1',
    
  },
  body: {
    marginTop: 20,
    textAlign: 'center', // <-- the magic
    fontSize: 20,
    letterSpacing: 3,
    color: 'white'
  },
  icons: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 45,
    marginRight: 45,
  }
})