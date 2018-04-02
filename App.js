import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Album from './Album';
import Cam from './Camera';
import History from './History';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='home'
            component={Home}
            title='home'
            hideNavBar={true}
            initial
          />
          <Scene
            key='album'
            component={Album}
            title='album'
          />
          <Scene
            key='cam'
            component={Cam}
            title='cam'
          />
          <Scene
            key='history'
            component={History}
            title='history'
          />
        </Scene>
      </Router>
    );
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
