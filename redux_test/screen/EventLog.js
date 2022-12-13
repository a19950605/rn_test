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
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwODM1ODY4NzE4In0.lqGUbA9zVGVCnH3CB_v_cYR06OuM8A0Z-kVmBAEnwdZP25pDJNPa9mI0DBNBMsAysEKTyS_bX3kHY1OI2HfaBA';
    var formdata = new FormData();
    formdata.append('userName', 'wilson2022');
    formdata.append('funcName', 'funcName');
    formdata.append('fromTime', '20221212');
    formdata.append('toTime', '20221212');

    let result1 = '';
    setEventLogData(result1);
    console.log('event log data test');
    console.log(eventLogData);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{}111</Text>
    </View>
  );
}

const EventLogCard = () => {};

export default EventLog;
