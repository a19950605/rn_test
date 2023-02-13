import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OutstandingAlarmMonCard from '../../OutstandingAlarm/components/OutstandingAlarmMonCard';
import {useSelector} from 'react-redux';

const Alarm = ({deviceId}) => {
  const [data, setData] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  console.log('arlarm deviceid');
  console.log(deviceId);
  //KT/R1/002
  var formdata = new FormData();
  formdata.append('deviceId', deviceId);
  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/v2/alarm/search?deviceId=`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('result123');
        console.log(result);
        setData(result?.content);
      })
      .catch(error => console.log('error16', error));
  }, []);
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Outstandingn alarm</Text>
        </View>
        <View>
          <Text>filter</Text>
        </View>
      </View>
      {/** History list */}

      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={props => <OutstandingAlarmMonCard {...props} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const HistoryItem = () => {
  return (
    <View style={{padding: 10, borderWidth: 0.5, borderColor: 'gray'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Command ID</Text>
        </View>
        <View>
          <Text>483</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>User</Text>
        </View>
        <View>
          <Text>sysadmin</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Action</Text>
        </View>
        <View>
          <Text>Off</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Datetime</Text>
        </View>
        <View>
          <Text>2022-12-06 18:19:57</Text>
        </View>
      </View>
    </View>
  );
};

export default Alarm;
