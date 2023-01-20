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
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {useWindowDimensions} from 'react-native';
import EventLogTable from './EventLogTable';

import {useGetEventLogMutation} from '../features/api/apiSlice';

function EventLog() {
  const userToken = useSelector(state => state.login.userToken?.Token);

  const [eventLogData, setEventLogData] = useState([]);
  const [data, setData] = useState();

  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;

  let formdata = new FormData();
  formdata.append('userName', '');
  formdata.append('funcName', '');
  formdata.append('fromTime', '20230118');
  formdata.append('toTime', '20230118');

  const [getEventLog, response, isLoading] = useGetEventLogMutation();
  const [loading, setLoading] = useState(true);

  if (loading) {
    getEventLog({userToken, formdata})
      .unwrap()
      .then(data => {
        console.log('get alarm');
        consosle.log(data);
        console.log(response);
      })
      .then(error => {
        console.log(error);
        console.log(response);
      });
    setLoading(false);
  }

  useEffect(() => {
    //listEventLog(body_obj, token);
    // .then(res => {
    //   console.log('json');
    //   console.log(res);
    // });
    // var requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     // Accept: '*',
    //     // 'Content-Type': 'application/json',
    //     'X-Token': userToken,
    //   },
    //   body: formdata,
    // };
    // fetch('https://gis2.ectrak.com.hk:8900/api/data/eventlog', requestOptions)
    //   .then(response => {
    //     console.log('response');
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log('result');
    //     console.log(result);
    //     setData(result);
    //     return result;
    //   })
    //   .catch(error => console.log('error', error));
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

        <TouchableOpacity>
          <Icon
            name="filter"
            size={24}
            color="black"
            type="ionicon"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
      {isLandscapeMode ? (
        <EventLogTable data={data} />
      ) : (
        <FlatList
          data={data}
          renderItem={props => <EventLogCard {...props} />}
        />
      )}
    </View>
  );
}

const EventLogCard = props => {
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
