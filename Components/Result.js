import React, { Component } from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Result extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   imageURI: this.props.imageURI
    // }
  }
  render(){
    //console.log('textArr',this.props.textArr)
    return(
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* <View style={styles.container}>
        <View style={styles.imageContainer}> */}
         <Image source={{ uri: this.props.photoURI }} style={styles.image}/>
        {/* </View>
        <View style={styles.textContainer}> */}
            <Text>{this.props.title}</Text>
            {this.props.textArr.map((paragraph, index) => {
              return <Text style={styles.p} key={index}>{paragraph}</Text>
            })}
        {/* </View>
        </View> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // imageContainer: {
  //   flex: 2,
  //   width: '100%',
  //   backgroundColor: 'black'
  // },
  image: {
    // alignSelf : 'stretch',
    // overflow : 'visible',
    width: 300,
    height: 300
  },
  // textContainer: {
  //   flex: 3,
  //   padding: 5,
  // }
})