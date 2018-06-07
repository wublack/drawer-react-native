/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
class HomeIndex extends Component {

  static navigationOptions = ({navigation}) => ({
    tabBarLabel: '订单',
  })

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>我的</Text>
      </View>
    );
  }


}

const styles=StyleSheet.create({
    header:{

    }
});

module.exports = HomeIndex;