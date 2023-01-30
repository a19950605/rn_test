import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DrawerActions,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {setTokenHelper} from './helper';
import AlarmHistory from './screen/AlarmHistory/AlarmHistory';
import EventLog from './screen/EventLog';
import OutstandingAlarm from './screen/OutstandingAlarm/OutstandingAlarm';

import Login from './screen/Login';
import PasswordSetting from './screen/SettingScreen/PasswordSetting';

//import Moment from 'react-moment';
//import 'moment-timezone';
import {Icon} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import UserAccountManagement from './screen/UserAccountManagement';
import RoleManagement from './screen/RoleManagement';

import {useSelector, useDispatch} from 'react-redux';
import {signout} from './features/login/loginSlice';
import {Alert} from 'react-native';
import SysParams from './screen/SystemParams/SysParams';
import {MonitoringNav} from './navigation/MonitoringNav';
import {UserDrawer} from './navigation/UserDrawer';
import {MainDrawer} from './navigation/MainDrawer';

export default function App() {
  const [token, setToken] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    if (token?.Token) {
      setTokenHelper(token?.Token);
    }
  }, [token]);
  return (
    <NavigationContainer>
      {userToken ? <MainDrawer /> : <Login />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    alignItems: 'flex-start',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
