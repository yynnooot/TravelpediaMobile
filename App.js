import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import store from './store';

import CamContainer from './Components/CamContainer';
import History from './Components/History';
import Home from './Components/Home';
import PhotoContainer from './Components/PhotoContainer';
import ResultContainer from './Components/ResultContainer';
import Loading from './Components/Loading';
import ErrorPage from './Components/ErrorPage';
import WikiList from './Components/WikiList';

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
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
              key='cam'
              component={CamContainer}
              title='cam'
            />
            <Scene
              key='history'
              component={History}
              title='history'
            />
            <Scene
              key='photo'
              component={PhotoContainer}
              title='photo'
            />
            <Scene
              key='result'
              component={ResultContainer}
              title='result'
            />
            <Scene
              key='wikilist'
              component={WikiList}
            />
            <Scene
              key='loading'
              component={Loading}
            />
            <Scene
              key='error'
              component={ErrorPage}
            />
          </Scene>
        </Router>
      </Provider>
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
