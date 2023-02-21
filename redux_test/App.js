import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

//import Moment from 'react-moment';
//import 'moment-timezone';

import {useDispatch, useSelector} from 'react-redux';
import {MainDrawer} from './src/navigation/MainDrawer';
import {getUserInfo} from './src/redux/features/userInfo/userInfoSlice';
import Login from './src/screen/Login/Login';
import {getUserFunc} from './src/redux/features/roleUserFunc/roleUserFuncSlice';
import {getRoleFunc} from './src/redux/features/roleFunc/roleFuncSlice';

export default function App() {
  const userToken = useSelector(state => state.login.userToken?.Token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userToken != undefined) {
      dispatch(getUserInfo(userToken));
      dispatch(getUserFunc(userToken));
      dispatch(getRoleFunc(userToken));
    } else {
      console.log('dispatch userinfo faileld*****');
    }
  }, [userToken]);
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
