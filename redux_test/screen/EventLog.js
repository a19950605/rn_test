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

function EventLog() {
  const [eventLogData, setEventLogData] = useState([]);
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
    formdata.append('funcName', 'funcName');
    formdata.append('fromTime', '20221212');
    formdata.append('toTime', '20221212');

    //listEventLog(body_obj, token);
    // .then(res => {
    //   console.log('json');
    //   console.log(res);
    // });
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
      // body: formdata,
    };
    // fetch('https://gis2.ectrak.com.hk:8900/api/data/eventlog', requestOptions)
    //   .then(response => {
    //     console.log('response');
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log('result');
    //     console.log(result);
    //     return result;
    //   })
    //   .catch(error => console.log('error', error));

    fetch(
      'https://gis2.ectrak.com.hk:8900/api/v2/options/usernameAsOptions',
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{}111</Text>
    </View>
  );
}

const EventLogCard = () => {};

export default EventLog;
