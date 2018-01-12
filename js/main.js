/**
 * Created by admin on 2018/1/11.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import DraftsScreen from '../MyApp'
import InboxScreen from './home/drawerleft'
import Drawer from 'react-native-drawer';

class Dermer extends Component {
  constructor(props) {
    super(props);
  }

  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this.drawer.close()
  };
  openDrawer = () => {
    this.drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={ref => this.drawer = ref}
        type="overlay"
        content={
          <InboxScreen closeDrawer={this.closeDrawer} bg={'white'}/>
        }
        tapToClose={true}
        panOpenMask={0.2}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={0}
        tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
      >
        <DraftsScreen
          openDrawer={this.openDrawer.bind(this)}/>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})


export default Dermer;