// import { View, Text, Button ,SafeAreaView,Image,StyleSheet} from 'react-native';
// import MonitoringCard from './MonitoringCard';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Constants from 'expo-constants';
// import { MaterialIcons } from '@expo/vector-icons';
// import OutstandingAlarmCard from './OutstandingAlarmCard'

// function OutstandingAlarm() {
//   return (
//     <View style={styles.container}>

//       <View style={{alignSelf:'flex-start',flex:1,flexDirection:'row', flexDirection:'row'}}>
//       {/*<MaterialIcons name="add-box" size={24} color="blue" /> */}
//       <Text title="test" style={styles.button}>2022-12-06 12:24:19</Text>
//       <Ionicons name="filter" size={32} style={{paddingLeft:120}} />
//   </View>

//       <OutstandingAlarmCard/>
//       <OutstandingAlarmCard/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {

//     paddingTop: Constants.statusBarHeight+5,
//     alignItems:'flex-start'
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button:{borderColor:'blue',color:'blue', borderWidth: 1,borderRadius:2,padding:10, alignSelf:'flex-start',marginRight:5},
//   right:{
//     paddingLeft:'50'
//   }
// });

// export default OutstandingAlarm;

import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import {ScrollView} from 'react-native-gesture-handler';
import {getToken} from '../helper';
import OutstandingAlarmCard from './OutstandingAlarmCard';
import OutstandingAlarmCard2 from './OutstandingAlarmCard2';
import OutstandingDetailTab from './OutstandingDetailTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OutstandingAlarm = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OuterStanding Alarm"
        component={OutstandingAlarmSub}
      />
      <Stack.Screen name="Details" component={OutstandingDetailTab} />
    </Stack.Navigator>
  );
};
const OutstandingAlarmSub = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  useEffect(() => {
    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        setToken(res);
        return res;
      });
    }
    getData().then(res => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
      };
      fetch('https://gis2.ectrak.com.hk:8900/api/v2/alarms', requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;
          setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  }, []);

  console.log('outStandand alarm');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'blue'}}>2022-12-06 12:26:43</Text>
        </View>
        <View style={{padding: 5}}></View>
      </View>
      <View style={{marginBottom: 60}}>
        <FlatList
          data={data}
          renderItem={props => (
            <OutstandingAlarmCard {...props} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />

        {/* <OutstandingAlarmCard />
        <OutstandingAlarmCard2 />
      */}
      </View>
    </View>
  );
};

export default OutstandingAlarm;
