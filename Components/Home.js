import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeIcon from './HomeIcon';
import AlbumIconContainer from './AlbumIconContainer';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      icons: [
        { icon: 'icon2', key: 'cam' },
        { icon: 'icon3', key: 'history' }
      ]
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Travelpedia</Text>
          <Text style={styles.body}>Learn While You Travel</Text>
        </View>
        <View style={styles.icons}>

          <AlbumIconContainer/>

          { this.state.icons.length > 0 ? this.state.icons.map(obj => {
            return <HomeIcon style={styles.icon} icon={obj.icon} keytitle={obj.key} key={obj.key}/>
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
    flex: 2,
  },
  title: {
    //justifyContent: 'center',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 45,
    fontFamily: 'Marker Felt',
    color: 'white'
  },
  body: {
    marginTop: 20,
    textAlign: 'center', // <-- the magic
    fontSize: 18,
    color: 'white'
  },
  icons: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
  },
  icon: {
    width: '33%',
    // alignItems: 'flex-end',
    // paddingLeft: 30,
    // paddingRight: 30
  }
})