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
import {setTokenHelper, getToken, removeToken} from './helper';
import Monitoring from './screen/Monitoring';
import AlarmHistory from './screen/AlarmHistory';
import Assignment from './screen/Assignment';
import EventLog from './screen/EventLog';
import OutstandingAlarm from './screen/OutstandingAlarm';

import Form from './screen/Form';
import {auth, listEventLog} from './apiList';
import Login from './screen/Login';
import Dummy from './screen/dummy';
import OutstandingDetailTab from './screen/OutstandingDetailTab';
import PasswordSetting from './screen/SettingScreen/PasswordSetting';
import MonitoringTest from './screen/MonitoringTest';
import MonitoringTab from './screen/MonitoringTab';

import Moment from 'react-moment';
import 'moment-timezone';
import ImageUploadTest from './screen/ImageUploadTest';
import {Icon} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import TableView from './screen/components/TableView';

//import RNFetchBlob from "rn-fetch-blob";

function Feed({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  const BASE_PATH = 'https://upload.wikimedia.org/wikipedia/en/b/b9/';
  const proileImage = 'HK_MTR_logo.svg';

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
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function MyDrawer() {
  const navigation = useNavigation();
  console.log('init');
  //auth("wilson2022","R4QB10DD");
  //  listEventLog({username:'wilson2022',funcName:'Userloginlog',fromTime:'20221212',toTime:'20221212'},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwODM1ODY4NzE4In0.lqGUbA9zVGVCnH3CB_v_cYR06OuM8A0Z-kVmBAEnwdZP25pDJNPa9mI0DBNBMsAysEKTyS_bX3kHY1OI2HfaBA"
  //  )
  const [loginToken, setLoginToken] = useState('');

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
            drawerActiveTintColor: 'red',
            activeBackgroundColor: 'white',
            inactiveTintColor: 'black',
            inactiveBackgroundColor: 'white',
          };
        }}
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="eRFL Monitoring" component={Monitoring} />
        <Drawer.Screen name="eRFL Assignment" component={Assignment} />
        <Drawer.Screen name="Event Log" component={EventLog} />
        <Drawer.Screen name="Outstanding Alarm" component={OutstandingAlarm} />
        <Drawer.Screen name="Alarm History" component={AlarmHistory} />
        <Drawer.Screen name="Change Password" component={PasswordSetting} />
        <Drawer.Screen name="Monitoring test" component={MonitoringTest} />
        <Drawer.Screen name="mon tab" component={MonitoringTab} />
        <Drawer.Screen name="image upload test" component={ImageUploadTest} />
        <Drawer.Screen name="Table View" component={TableView} />
        <Drawer.Screen name="Form" component={Form} />
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    if (token?.Token) {
      setTokenHelper(token?.Token);
    }
  }, [token]);
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      {/* <OutstandingDetailTab /> */}
      {/* <Login />? */}
      {/* <Dummy /> */}
      {token?.Token ? <MyDrawer /> : <Login tokenRecord={setToken} />}
    </NavigationContainer>
    // <Login />
    // <Dummy/>
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
