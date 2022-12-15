import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Monitoring from './Monitoring';
import MonitoringCard from './MonitoringCard';
import {useNavigation} from '@react-navigation/native';

const MonitoringTest = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  /**
   *refresh every 30 S OR CLICK
   *RFL ID=>DEVICE ID
   *RFL = CODE
   *EPIC
   *GROUP
    status as of:time
   erfl readliness:  two status
   status (lamp,health, conn, power ,relay)

   click detail
   detail tab 
   (details) controller id, device id(1-4), rfl ,relay channel index(dropdown 0-3)
   status (ACTIVE MAINTENANC ISOLATED)
   
   status tab (show icon status in detail)(health status, controller conn status,
    power status, lamp status,prev lamp statuss, relay channel status)
    
    assignment tab  (GROUP,EPIC,CP,ASSIGNED DATE, ETMS START TIME, ETMS FIN TIME)
    LAST CONTROL TAB (LAST CONTROL BY:sysadmin , LAST CONtRoL ACtiON: Off(Success), Last Control Datetime: 2022-12-06 XXX)
   
    location TAB (image location add pin)
    history TAB(SHOW COMMAND ID,USER,action,datetime)
    ALARM (show outstanding alarm by rfl: same as outstanding alarm)

    ADD BUTTON ->RFL NEW (DETAILS, LOCATION)
    -Controller ID, Device ID, RFL, Relay Channel Index

    */

  useEffect(() => {
    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        return res;
      });
    }
    getData()
      .then(token => {
        var requestOptions = {
          method: 'GET',
          headers: {
            // Accept: '*',
            // 'Content-Type': 'application/json',
            'X-Token': token,
          },
        };
        fetch(
          'https://gis2.ectrak.com.hk:8900/api/v2/options/devices?showOnlyActive=1',
          requestOptions,
        )
          .then(response => {
            return response.json();
          })
          .then(result => {
            //  console.log(result);
            // return result;
            setData(result);
          })
          .catch(error => console.log('error1', error));
      })
      .catch(e => {
        console.log('getdata error', e);
      });
  }, []);
  console.log('monitoring test data');
  console.log(data);
  return (
    <View style={{flex: 1, padding: 5}}>
      <FlatList
        data={data}
        renderItem={props => (
          <MonitoringCard {...props} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default MonitoringTest;
