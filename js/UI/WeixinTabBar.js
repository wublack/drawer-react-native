'use strict';

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
const PropTypes = require('prop-types');
const deviceW = Dimensions.get('window').width

class WeixinTabBar extends Component {

  propTypes: {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合

    tabNames: PropTypes.array, // 保存Tab名称
    tabIconNames: PropTypes.array, // 保存Tab图标
    leftClick: PropTypes.func, //左边点击方法
    rightClick: PropTypes.func,//右边点击方法
    rightTitle: PropTypes.string,//右标题
  }

  setAnimationValue({value}) {
    // console.log(value);
  }

  componentDidMount() {
    // Animated.Value监听范围 [0, tab数量-1]
    this.props.scrollValue.addListener(this.setAnimationValue);
  }

  renderTabOption(tab, i) {
    let color = this.props.activeTab == i ? "#313131" : "#313131"; // 判断i是否是当前选中的tab，设置不同的颜色
    let tabStyle = this.props.activeTab == i ? styles.tabSelected : styles.tab;
    return (
      <TouchableOpacity activeOpacity={1} key={i} onPress={() => this.props.goToPage(i)} style={tabStyle} opacity="0">
        <View style={styles.tabItem}>
          <Text style={{color: color}}>
            {this.props.tabNames[i]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  state = {
    animated: true,
    hidden: false,
    backgroundColor:'white',
    translucent:false,
    barStyle:'dark-content',
    networkActivityIndicatorVisible:false,
  }

  render() {
    return (
      <View style={styles.main}>
        <StatusBar
          animated={this.state.animated}
          hidden={this.state.hidden}
          backgroundColor={this.state.backgroundColor}
          translucent={this.state.translucent}
          barStyle={this.state.barStyle}
          networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
          showHideTransition={this.state.showHideTransition}
        />
        <TouchableOpacity style={styles.leftTitle} onPress={() => {
          this.props.leftClick()
        }}>
          <Image source={{uri: 'icon_me'}} style={styles.drawer}/>
        </TouchableOpacity>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <TouchableOpacity style={styles.rightTitle} onPress={() => {
          this.props.rightClick()
        }}>
          <Text>{this.props.rightTitle}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftTitle: {
    width: 50,
    alignSelf: 'center',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginLeft: 80,
    marginRight: 80
  },
  drawer: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'transparent',
    borderBottomWidth:0.5
  },
  tabSelected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'#851b25',
    borderBottomWidth:0.5
  },
  rightTitle: {
    alignSelf: 'center',
    width: 50
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',

  },
});


export default WeixinTabBar;