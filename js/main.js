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

  /**
   * acceptDoubleTap: PropTypes.bool,响应区域双击
   acceptPan: PropTypes.bool,
   acceptTap: PropTypes.bool,单击
   acceptPanOnDrawer: PropTypes.bool,
   captureGestures: PropTypes.oneOf([true, false, 'open', 'closed']),
   children: PropTypes.node,
   closedDrawerOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
   content: PropTypes.node,
   disabled: PropTypes.bool,
   elevation: PropTypes.number,
   initializeOpen: PropTypes.bool,
   open: PropTypes.bool,
   negotiatePan: PropTypes.bool,
   onClose: PropTypes.func,
   onCloseStart: PropTypes.func,
   onOpen: PropTypes.func,
   onOpenStart: PropTypes.func,
   openDrawerOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
   panThreshold: PropTypes.number,
   panCloseMask: PropTypes.number,右边
   panOpenMask: PropTypes.number,
   side: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
   styles: PropTypes.object,
   tapToClose: PropTypes.bool,
   tweenDuration: PropTypes.number,
   tweenEasing: PropTypes.string,
   tweenHandler: PropTypes.func,
   type: PropTypes.oneOf(['overlay', 'static', 'displace']),
   useInteractionManager: PropTypes.bool,

   // deprecated
   panStartCompensation: PropTypes.bool,
   openDrawerThreshold: PropTypes.any,
   * @returns {XML}
   */
  render() {
    return (
      <Drawer
        ref={ref => this.drawer = ref}
        type="overlay"
        content={
          <InboxScreen closeDrawer={this.closeDrawer} bg={'white'}/>
        }
        acceptPan={true}
        acceptDoubleTap={true}
        tapToClose={true}
        panOpenMask={0.2}
        openDrawerOffset={0.25} // 20% gap on the right side of drawer
        panCloseMask={0.25}
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