import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import wiki from '../utils/wiki';

export default class WikiList extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <View>
        <Text>Please Choose Landmark From List</Text>
        { this.props.list.map((landmark, index) => {
          return (
            <TouchableHighlight 
              key={index}
              style={styles.button} 
              onPress={()=>wiki(landmark)}
              >
              <Text key={index}>{landmark}</Text>
            </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#568bc1',
    alignItems: 'center',
    padding: 15
  }
})