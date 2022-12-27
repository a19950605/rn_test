import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
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
    formdata.append('userName', 'wilson2022');
    formdata.append('funcName', 'Userloginlog');
    formdata.append('fromTime', '20221227');
    formdata.append('toTime', '20221227');

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
    <View style={{flex: 1}}>
      <Text>{}export current result to csv</Text>
      <FlatList data={data} renderItem={props => <EventLogCard {...props} />} />
    </View>
  );
}

const EventLogCard = props => {
  console.log(props);

  return (
    <View style={{borderColor: 'gray', borderWidth: 0.2, padding: 10}}>
      <Text>User {props?.item?.username}</Text>
      <Text>Datetime {props?.item?.dt}</Text>
      <Text>Function {props?.item?.func}</Text>
      <Text>Type {props?.item?.type}</Text>
      <Text>Data </Text>
    </View>
  );
};

export default EventLog;
