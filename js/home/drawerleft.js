/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const PropTypes = require('prop-types');
export default class DrawerLeft extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }


  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.drawerLeft}>
        <TouchableOpacity  onPress={this.props.closeDrawer}>
          <Text>Drawer left</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  drawerLeft:{
    backgroundColor:'white',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});
