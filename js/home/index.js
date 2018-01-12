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
  ScrollView
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
// import DrawerMain from 'drawer';
// import DrawerLeft from 'drawerleft';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
class HomeIndex extends Component {

  static navigationOptions = ({navigation}) => ({
    tabBarLabel: '订单',
  })

  constructor() {
    super();
  }

  render() {
    return (
      <ScrollableTabView renderTabBar={() => <DefaultTabBar/>} tabBarPosition="bottom" onScroll={(postion) => {
        alert(this.props.navigation.navigate('Home'));
      }
      }>
        <View tabLabel="view1"><Text>dstf</Text></View>
        <View tabLabel="view2"><Text>dstf</Text></View>
      </ScrollableTabView>
    );
  }

  testGotoNext = () => {
    this.props.navigation.navigate('');
  }

}

/*const DrawerApp = DrawerNavigator({
  DrawerMain: {
    screen: DrawerMain,
  },
  Notifications: {
    screen: DrawerLeft,
  }
}, {
  drawerWidth: 200, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
  contentOptions: {
    initialRouteName: 'DrawerMain', // 默认页面组件
    activeItemKey: 'Notifications',
    labelStyle: {//标签样式
      // color : 'red',
      height: 30,
    },
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
      marginVertical: 0,
    },
    //没有作用
    onItemPress: (route) => {
      console.log('-------->' + JSON.stringify(route))
    },
  }
});*/


module.exports = HomeIndex;