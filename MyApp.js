/**
 * Created by admin on 2018/1/11.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import WeixinTabBar from './js/UI/WeixinTabBar'
const PropTypes = require('prop-types');
import Message from './js/message/index';

class MainScroll extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }
  constructor(props) {
    super(props);
    this.state = {
      tabNames: ['消息', '订单'],
    }
  }


  render() {
    const tabNames = this.state.tabNames;
    return (
      <ScrollableTabView renderTabBar={() =>
        <WeixinTabBar tabNames={tabNames}
                      leftClick={
                        this.props.openDrawer
                        // this.props. navigation.navigate('DrawerOpen')
                      }
                      rightClick={() => {
                        console.log('d')
                      }}
        />
      } locked={true}>
        <View ><Text>sadfa</Text></View>
        <Message style={{backgroundColor:'red',flex:1}}/>
      </ScrollableTabView>
    );
  }

}

module.exports = MainScroll;
