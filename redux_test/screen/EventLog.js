import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {listEventLog} from '../apiList';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EventLog() {
  const [eventLogData, setEventLogData] = useState([]);
  const [data, setData] = useState();
  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }
  useEffect(() => {
    //let mounted = true;
    let body_obj = {
      username: 'wilson2022',
      funcName: 'Userloginlog',
      fromTime: '20221212',
      toTime: '20221212',
    };
    let token =
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwOTA1MDU1MTc0In0.kK_-WJ-yoaGYmqSbR5od8d-JDN0XP57CDyUSTVrokadN0n5CnAVFHqHA5zGDwF0KryRXJdP4kxULoCt9MNYOxg';
    var formdata = new FormData();
    formdata.append('userName', '');
    formdata.append('funcName', '');
    formdata.append('fromTime', '20230101');
    formdata.append('toTime', '20230101');

    //listEventLog(body_obj, token);
    // .then(res => {
    //   console.log('json');
    //   console.log(res);
    // });
    getData().then(res => {
      var requestOptions = {
        method: 'POST',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
        body: formdata,
      };
      fetch('https://gis2.ectrak.com.hk:8900/api/data/eventlog', requestOptions)
        .then(response => {
          console.log('response');

          return response.json();
        })
        .then(result => {
          console.log('result');
          console.log(result);
          setData(result);
          return result;
        })
        .catch(error => console.log('error', error));

      // fetch(
      //   'https://gis2.ectrak.com.hk:8900/api/v2/options/usernameAsOptions',
      //   requestOptions,
      // )
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(result => {
      //     console.log(result);
      //     return result;
      //   })
      //   .catch(error => console.log('error', error));
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 2}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 5,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
            marginRight: 5,
            alignItems: 'center',
          }}>
          <Text style={{color: 'blue'}}>export current result to csv</Text>
        </TouchableOpacity>

        <Text>filter</Text>
      </View>
      <FlatList data={data} renderItem={props => <EventLogCard {...props} />} />
    </View>
  );
}

const EventLogCard = props => {
  console.log(props);

  return (
    <View style={{borderColor: 'gray', borderWidth: 0.2, padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>User: </Text>

        <Text style={{color: 'black'}}> {props?.item?.username}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Datetime: </Text>
        <Text style={{color: 'black'}}> {props?.item?.time}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Function: </Text>
        <Text style={{color: 'black'}}> {props?.item?.func}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
        <View>
          <Text style={{color: 'black'}}> {props?.item?.type}</Text>

          <Text style={{color: 'black', width: '70%'}}>
            {props?.item?.dest.split(' ')[0] +
              props?.item?.dest.split(' ')[1] +
              props?.item?.dest.split(' ')[2] +
              props?.item?.dest.split(' ')[3]}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Data: </Text>
        <View>
          <Text style={{color: 'black', width: '70%'}}>
            {props?.item?.dest.split(' ')[4] +
              props?.item?.dest.split(' ')[5] +
              props?.item?.dest.split(' ')[6] +
              props?.item?.dest.split(' ')[7] +
              props?.item?.dest.split(' ')[8] +
              props?.item?.dest.split(' ')[9]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventLog;
