import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeIcon from './HomeIcon';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      icons: [
        {icon: 'icon1', key: 'album' },
        {icon: 'icon2', key: 'camera' },
        {icon: 'icon3', key: 'history' }
      ]
    }
  }
  render(){
    return (
      <View>
        <Text>Home Screen</Text>
        <View style={styles.container}>
        { this.state.icons.length > 0 ? this.state.icons.map(obj => {
          return <HomeIcon style={styles.icon} icon={obj.icon} keytitle={obj.key} key={obj.key}/>
        }): null}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    width: '33%'
  }
}