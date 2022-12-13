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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Monitoring from './screen/Monitoring';
import AlarmHistory from './screen/AlarmHistory';
import Assignment from './screen/Assignment';
import EventLog from './screen/EventLog';
import OutstandingAlarm from './screen/OutstandingAlarm';

import Form from './screen/Form';
import {auth, listEventLog} from './apiList';
import Login from './screen/Login';
import Dummy from './screen/dummy';

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

export function MyDrawer() {
  console.log('init');
  //auth("wilson2022","R4QB10DD");
  //  listEventLog({username:'wilson2022',funcName:'Userloginlog',fromTime:'20221212',toTime:'20221212'},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwODM1ODY4NzE4In0.lqGUbA9zVGVCnH3CB_v_cYR06OuM8A0Z-kVmBAEnwdZP25pDJNPa9mI0DBNBMsAysEKTyS_bX3kHY1OI2HfaBA"
  //  )
  const [loginToken, setLoginToken] = useState('');

  //   useEffect(()=>{
  //     var formdata = new FormData();
  // formdata.append("username", "wilson2022");
  // formdata.append("password", "R4QB10DD");

  // var requestOptions = {
  //   method: 'POST',
  //   body: formdata,
  //   redirect: 'follow'
  // };

  // fetch("https://gis2.ectrak.com.hk:8900/api/auth", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  // /*
  //   RNFetchBlob.fetch('POST', 'https://gis2.ectrak.com.hk:8900/api/auth', {
  //     'Content-Type' : 'multipart/form-data',
  //   }, [
  //     // element with property `filename` will be transformed into `file` in form data
  //     { username : 'wilson2022', password : 'R4QB10DD'},
  //    ,
  //   ]).then((resp) => {
  //     console.log(resp)
  //   }).catch((err) => {
  //     console.log(err)
  //   })*/
  //   {/*
  //     axios.post('https://gis2.ectrak.com.hk:8900/api/auth',{
  //     username:'wilson2022',
  //     password:'R4QB10DD'
  //     }).then(data=>console.log(data)).catch(e=>{console.log(e.toJSON())})*/}
  //   },[])
  return (
    <>
      {/* style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}*/}
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#000000', //Set Header color
          },
          drawerActiveTintColor: 'red',
          activeBackgroundColor: 'white',
          inactiveTintColor: 'black',
          inactiveBackgroundColor: 'white',
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
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Form" component={Form} />
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <Login />
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
