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
    <Stack.Navigator
      screenOptions={{headerTitle: 'OutstandingAlarmSub', headerShown: false}}>
      <Stack.Screen
        name="OutstandingAlarmSub"
        component={OutstandingAlarmSub}
      />
      <Stack.Screen
        name="OutstandingDetailTab"
        component={OutstandingDetailTab}
      />
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
          setData(result?.reverse());
        })
        .catch(error => console.log('error1', error));
    });
  }, []);

  // console.log('outStandand alarm');
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
