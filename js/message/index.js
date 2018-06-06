/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';


class MessageIndex extends Component {

  constructor() {
    super();
    console.log('message index')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MESSAGE</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {},
  content: {
    backgroundColor: 'red',
  }

});
module.exports = MessageIndex;