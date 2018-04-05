import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeIcon from './HomeIcon';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      icons: [
        { icon: 'icon1', key: 'album' },
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
  },
  header: {
    justifyContent: 'center',
    marginTop: 200,
    flex: 3
  },
  title: {
    //justifyContent: 'center',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 25,
  },
  body: {
    marginTop: 20,
    textAlign: 'center', // <-- the magic
    fontSize: 18,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 250,
    alignItems: 'flex-end'
  },
  icon: {
    width: '33%',
    // alignItems: 'flex-end',
    // paddingLeft: 30,
    // paddingRight: 30
  }
})