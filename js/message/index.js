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

import Banner from './banner';
const deviceH = Dimensions.get('window').height;

class MessageIndex extends Component {

  constructor() {
    super();
    console.log('message index')
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner style={{height: 130}}/>
        <View style={styles.content}>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {},
  content: {
    backgroundColor: 'red',
    height: deviceH - 130,
  }

});
module.exports = MessageIndex;