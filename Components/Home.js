import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Font, AppLoading } from "expo";
import HomeIcon from './HomeIcon';
import AlbumIconContainer from './AlbumIconContainer';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      icons: [
        { icon: 'md-camera', key: 'cam', text: 'Camera' },
        { icon: 'ios-list', key: 'history', text: 'History' }
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#568bc1',
    flex: 1
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
    fontSize: 18,
    color: 'white'
  },
  icons: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 45,
    marginRight: 45,
  },
  icon: {
    width: '33%',
    // alignItems: 'flex-end',
    // paddingLeft: 30,
    // paddingRight: 30
  }
})