import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class History extends React.Component {
  constructor(props){
    super()
    this.state = {
      
    }
    this.click = this.click.bind(this)
  }
  click = function(landmark){
    this.props.addToCurrent(landmark)
    Actions['result']();
  }
  render() {
    if(this.props.history.length > 0){
      return (
        <View>
          { this.props.history.map((landmark, index) => {
              return (
                <TouchableHighlight key={index} onPress={()=>this.click(landmark)}>
                  <View style={styles.itemContainer} key={index}>
                    {/* <Image source={{ uri: landmark.uri }} style={styles.image} /> */}
                    <Text key={index}>IMAGE HERE</Text>
                    <Text key={{index} + '_title'}>{landmark.title}</Text>
                  </View>
                </TouchableHighlight>)  
            })
          }
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#ffffff',
  },
  image: {

  },
});
