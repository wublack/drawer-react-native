/**
 * Created by admin on 2018/6/6.
 */
import React, {Component} from "react";
import {StyleSheet, Image} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import DesignPage from "./design/index";
import MessagePage from "./message/index";
import HomePage from './home/index';

const SELECTED_TAG = 'design';
const SELECTED_TITLE = '首页';
const SELECTED_NORMAL = require('../imgs/design/first_tab_img_normal.png');
const SELECTED_FOCUS = require('../imgs/design/first_tab_img_press.png');

const EXPLORE_TAG = 'message';
const EXPLORE_TITLE = '消息';
const EXPLORE_NORMAL = require('../imgs/message/message_tab_img_normal.png');
const EXPLORE_FOCUS = require('../imgs/message/message_tab_img_press.png');

const FOLLOW_TAG = 'home';
const FOLLOW_TITLE = '我的';
const FOLLOW_NORMAL = require('../imgs/home/me_tab_img_normal.png');
const FOLLOW_FOCUS = require('../imgs/home/me_tab_img_press.png');

class MainPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedTab: SELECTED_TAG
    }
  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={MainPageStyle.tab_container}
        tabBarShadowStyle={{height: 0}}>
        {this._renderTabItem(SELECTED_TAG, SELECTED_TITLE, SELECTED_NORMAL, SELECTED_FOCUS)}
        {this._renderTabItem(EXPLORE_TAG, EXPLORE_TITLE, EXPLORE_NORMAL, EXPLORE_FOCUS)}
        {this._renderTabItem(FOLLOW_TAG, FOLLOW_TITLE, FOLLOW_NORMAL, FOLLOW_FOCUS)}
      </TabNavigator>
    )
  }

  /**
   * 渲染tab中的item
   * @param tag
   * @param title
   * @param iconNormal
   * @param iconFocus
   * @param pageView
   * @returns {XML}
   * @private
   */
  _renderTabItem(tag, title, iconNormal, iconFocus) {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        title={title}
        titleStyle={MainPageStyle.tab_title}
        selectedTitleStyle={MainPageStyle.tab_title_selected}
        renderIcon={() => <Image source={iconNormal} style={MainPageStyle.tab_icon}/>}
        renderSelectedIcon={() => <Image source={iconFocus} style={MainPageStyle.tab_icon}/>}
        onPress={() => this.setState({selectedTab: tag})}>
        {this._createContentPage(tag)}
      </TabNavigator.Item>
    )
  }

  /**
   * 渲染tab对应的内容页面
   * @param tag
   * @returns {XML}
   * @private
   */
  _createContentPage(tag) {
    switch (tag) {
      case SELECTED_TAG:
        return (<DesignPage {...this.props}/>);
      case EXPLORE_TAG:
        return (<MessagePage {...this.props}/>);
      case FOLLOW_TAG:
        return (<HomePage {...this.props}/>);
    }
  }


}

const MainPageStyle = StyleSheet.create(
  {
    tab_container: {
      height: 42,
    },
    tab_icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    tab_title: {
      color: "#929292",
      fontSize: 8,
      marginTop:4,
    },
    tab_title_selected: {
      color: "#333333",
      fontSize: 8,
      marginTop:4,
    }
  }
)

export default MainPage;