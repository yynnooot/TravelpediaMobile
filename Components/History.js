import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {LinearGradient} from 'expo'

export default class History extends React.Component {
  constructor(props){
    super()
    this.state = {
      
    }
    // this.click = this.click.bind(this)
  }
  click = function(landmark){
    this.props.addToCurrent(landmark)
    Actions['result']();
  }
  render() {
    if(this.props.history.length > 0){
      return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/pisa.jpeg')} style={StyleSheet.absoluteFillObject}>
          <LinearGradient
              colors={['rgba(79, 206, 249,0.5)', 'rgba(114, 110, 248,0.5)', 'rgba(77,6,131,0.8)']} 
              style={styles.gradientContainer}
            >
            { this.props.history.map((landmark, index) => {
                return (
                  <TouchableHighlight key={index} onPress={()=>this.click(landmark)}>
                    <View style={styles.itemContainer} key={index}>
                      <Image source={{uri: landmark.uri}} key={index} style={styles.image}/>
                      <Text style={styles.text} key={index + '_title'}>{landmark.title}</Text>
                    </View>
                  </TouchableHighlight>)  
              })
            }
            </LinearGradient>
          </ImageBackground>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>There is no history.</Text>
          <Text>Return to home to take photos of landmarks!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#568bc1',
    margin: 15
  },
  image: {
    height: 70,
    width: 80,
    padding: 10
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    paddingLeft: 20
  },
  gradientContainer: {
    flex: 1
  }
});
