/**
 * Created by admin on 2018/1/2.
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MessageIndex extends Component{

  static navigationOptions = {
    tabBarLabel:'消息',
  }

  constructor(){
    super();
  }

  render(){
    return (
      <View>
        <Text>Message index</Text>
      </View>
    );
  }

}

module.exports= MessageIndex;