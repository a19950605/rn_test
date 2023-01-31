import React, {useState, useEffect} from 'react';

import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  DrawerActions,
  useRoute,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import SysParams from '../screen/SystemParams/SysParams';
import PasswordSetting from '../screen/SettingScreen/PasswordSetting';
import RoleManagement from '../screen/RoleManagement';
import UserAccountManagement from '../screen/UserAccountManagement';
import AlarmHistory from '../screen/AlarmHistory/AlarmHistory';
import MonitoringTest from '../screen/Monitoring/MonitoringTest';
import EventLog from '../screen/EventLog';
import OutstandingAlarm from '../screen/OutstandingAlarm/OutstandingAlarm';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signout} from '../features/login/loginSlice';
import {Icon} from '@rneui/themed';
import {UserDrawer} from './UserDrawer';
import {MonitoringNav} from './MonitoringNav';
import Relay from '../screen/Relay/Relay';
import Assignment from '../screen/Assignment/Assignment';

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  const navigation = useNavigation();
  console.log('init');
  //auth("wilson2022","R4QB10DD");
  //  listEventLog({username:'wilson2022',funcName:'Userloginlog',fromTime:'20221212',toTime:'20221212'},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwODM1ODY4NzE4In0.lqGUbA9zVGVCnH3CB_v_cYR06OuM8A0Z-kVmBAEnwdZP25pDJNPa9mI0DBNBMsAysEKTyS_bX3kHY1OI2HfaBA"
  //  )
  return (
    <>
      {/* style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}*/}
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route);

          console.log('route name');
          console.log(routeName);
          let headerTitle;
          let isDetail = false;
          switch (routeName) {
            case 'OutstandingAlarmSub':
              headerTitle = 'Outandstanding Alarm';
              isDetail = false;
              break;
            case 'OutstandingDetailTab':
              headerTitle = 'Detail.';
              isDetail = true;
              break;
            case 'MonitoringDetail':
              headerTitle = 'Monitoring Detail';
              isDetail = true;
              break;
            case 'Create Monitoring':
              headerTitle = 'Create Monitoring';
              isDetail = true;
              break;
            case 'UserAccountDetail':
              headerTitle = 'User Account Detail';
              isDetail = true;
              break;
            case 'Create user':
              headerTitle = 'Account new';
              isDetail = true;
              break;
            case 'RoleDetail':
              headerTitle = 'Role Detail';
              isDetail = true;
              break;
            case 'RoleCreate':
              headerTitle = '';
              isDetail = true;
              break;
          }

          console.log('header title');
          console.log(headerTitle);
          console.log(headerTitle == 'OutstandingDetailTab');
          return {
            headerTitle,
            headerShown: true,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  {
                    !isDetail
                      ? navigation.dispatch(DrawerActions.openDrawer())
                      : navigation.goBack();
                  }
                }}>
                {!isDetail ? (
                  <Icon
                    name="menu"
                    size={24}
                    color="white"
                    type="material-community"
                    style={{padding: 10}}
                  />
                ) : (
                  <Icon
                    name="arrow-back"
                    size={24}
                    color="white"
                    type="material"
                    style={{padding: 10}}
                  />
                )}
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  {
                    console.log('hello');
                    // alert('hello');
                  }
                }}>
                <Icon
                  name="search"
                  size={24}
                  color="white"
                  type="material"
                  style={{padding: 10}}
                />
              </TouchableOpacity>
            ),
            drawerActiveTintColor: 'black',
            drawerActiveBackgroundColor: 'white',
            drawerInactiveTintColor: 'black',
            drawerInactiveBackgroundColor: 'white',
          };
        }}
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* <Drawer.Screen name="eRFL MonitoringT" component={Monitoring} /> */}
        <Drawer.Screen
          name="eRFL Monitoring"
          component={MonitoringNav}
          options={{
            title: 'eRFL Monitoring',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="monitor"
                type="material-community"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="eRFL Assignment"
          component={Assignment}
          options={{
            title: 'eRFL Assignment',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="clipboard-text"
                type="material-community"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Event Log"
          component={EventLog}
          options={{
            title: 'Event Log',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="calendar-text"
                type="material-community"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Outstanding Alarm"
          component={OutstandingAlarm}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="Alarm History"
          component={AlarmHistory}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="User Account Management"
          component={UserDrawer}
          options={{
            title: 'User Account Management',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="users"
                type="feather"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Role management"
          component={RoleManagement}
          options={{
            title: 'Role management',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="shield-check"
                type="material-community"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Relay"
          component={Relay}
          options={{
            title: 'Relay',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="electric-switch"
                type="material-community"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Change Password"
          component={PasswordSetting}
          options={{
            drawerItemStyle: {display: 'none'},

            title: 'Change Password',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="md-save-sharp"
                type="ionicon"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="System Parameters"
          component={SysParams}
          options={{
            drawerItemStyle: {display: 'none'},
            title: 'System Parameters',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="md-save-sharp"
                type="ionicon"
                size={24}
                color="gray"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
            ),
          }}
        />
        {/* <Drawer.Screen name="Table View" component={TableView} /> */}
        {/* <Drawer.Screen name="Form" component={Form} /> */}
      </Drawer.Navigator>
    </>
  );
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  console.log('custom navigtaion');
  const logoutConfirm = () => {
    return Alert.alert('Logout', 'Confirm to logout?', [
      // The "Yes" button
      {
        text: 'Confirm',
        onPress: () => {
          dispatch(signout());
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: 'Cancel',
      },
    ]);
  };
  const [open, setOpen] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'black', padding: 10}}>
        <Image
          source={{
            uri: 'https://static.wikia.nocookie.net/logopedia/images/1/16/120724090720-MTR-Corporation-logo.png',
          }}
          style={styles.sideMenuProfileIcon}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentOptions={{
          activeTintColor: '#fd9c12',
          activeBackgroundColor: '#000000',
        }}>
        <DrawerItemList
          {...props}
          contentOptions={{
            activeTintColor: '#fd9c12',
            activeBackgroundColor: '#000000',
          }}
        />
        {/* <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
          /> */}

        <DrawerItem
          label="False alarm"
          style={{backgroundColor: '#ffffff'}}
          labelStyle={{color: open ? 'red' : '#000000'}}
          onPress={() => setOpen(!open)}
          icon={({focused, color, size}) => (
            <Icon
              name="access-alarm"
              type="material"
              size={24}
              color={open ? 'red' : 'gray'}
              style={{justifyContent: 'center', paddingRight: 5}}
            />
          )}
        />
        {open && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="Outstanding alarm"
            onPress={() => {
              setOpen(false);
              props.navigation.navigate('Outstanding Alarm');
            }}
          />
        )}
        {open && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="Alarm History"
            onPress={() => {
              setOpen(false);
              props.navigation.navigate('Alarm History');
            }}
          />
        )}

        <DrawerItem
          label="Setting"
          style={{backgroundColor: '#ffffff'}}
          labelStyle={{color: openSetting ? 'red' : '#000000'}}
          onPress={() => setOpenSetting(!openSetting)}
          icon={({focused, color, size}) => (
            <Icon
              name="settings"
              type="material"
              size={24}
              color={openSetting ? 'red' : 'gray'}
              style={{justifyContent: 'center', paddingRight: 5}}
            />
          )}
        />
        {openSetting && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="Password"
            onPress={() => {
              props.navigation.navigate('Change Password');
              setOpenSetting(false);
            }}
          />
        )}
        {openSetting && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="Language"
            onPress={() => {
              setOpenSetting(false);
            }}
          />
        )}
        {openSetting && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="System Check"
            onPress={() => {
              setOpenSetting(false);
            }}
          />
        )}
        {openSetting && (
          <DrawerItem
            style={{backgroundColor: '#ffffff', marginLeft: 70}}
            labelStyle={{color: '#000000'}}
            label="System Parameters"
            onPress={() => {
              setOpenSetting(false);
            }}
          />
        )}
        <DrawerItem
          style={{backgroundColor: '#ffffff'}}
          labelStyle={{color: '#000000'}}
          label="Log out"
          onPress={() => logoutConfirm()}
          icon={({focused, color, size}) => (
            <Icon
              name="logout"
              type="material-community"
              size={24}
              color="gray"
              style={{justifyContent: 'center', paddingRight: 5}}
            />
          )}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
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
