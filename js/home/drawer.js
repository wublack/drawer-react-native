/**
 * Created by admin on 2018/1/2.
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class DrawerIndex extends Component{

  static navigationOptions = ({navigation})=>({
    drawerLabel: 'DrawerMain',
  })

  constructor(){
    super();
  }

  render(){
    return (
      <View>
        <Text>Drawer index</Text>
      </View>
    );
  }

}
