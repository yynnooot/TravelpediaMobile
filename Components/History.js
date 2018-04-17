import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class History extends React.Component {
  constructor(props){
    super()
    this.state = {
      history: [
        {
          uri: '',
          title: 'Title 1',
        },
        {
          uri: '',
          title: 'Title 2',
        },
        {
          uri: '',
          title: 'Title 3',
        },
      ]
    }
  }
  render() {
    if(this.state.history.length > 0){
      return (
        <View>
          { this.state.history.map((obj,index) => {
              return (
                <TouchableHighlight key={index}>
                  <View style={styles.itemContainer} key={index}>
                    {/* <Image source={{ uri: obj.uri }} style={styles.image} /> */}
                    <Text key={index}>IMAGE HERE</Text>
                    <Text key={{index} + '_title'}>{obj.title}</Text>
                  </View>
                </TouchableHighlight>)  
            })
          }
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>History</Text>
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#ffffff',
  },
  image: {

  },
});
