import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

//import Moment from 'react-moment';
//import 'moment-timezone';

import {useSelector} from 'react-redux';
import {MainDrawer} from './src/navigation/MainDrawer';
import Login from './src/screen/login/Login';

export default function App() {
  const userToken = useSelector(state => state.login.userToken?.Token);

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
