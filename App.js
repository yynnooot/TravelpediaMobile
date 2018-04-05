import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Album from './Components/Album';
import Cam from './Components/Cam';
import History from './Components/History';
import Home from './Components/Home';
import Photo from './Components/Photo';
import Result from './Components/Result';
import Loading from './Components/Loading';


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
          <Scene
            key='photo'
            component={Photo}
            title='photo'
          />
          <Scene
            key='result'
            component={Result}
            title='result'
          />
          <Scene
            key='loading'
            component={Loading}
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
