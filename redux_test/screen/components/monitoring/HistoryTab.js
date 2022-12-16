import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'react-moment';

const HistoryTab = ({deviceID}) => {
  console.log(deviceID);
  const [token, setToken] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        setToken(res);
        return res;
      });
    }

    getData().then(token => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': token,
        },
      };

      fetch(
        `https://gis2.ectrak.com.hk:8900/api/v2/device/${deviceID}/cmdHistory`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          // console.log(result);
          // return result;

          setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  }, []);
  return (
    <View style={{flex: 1, padding: 10}}>
      <View>
        <Text>GET:: /api/v2/device/deviceID/cmdHistory</Text>
        <Text>command id = id/assignmentId</Text>
        <Text>user= usernameCreate</Text>
        <Text>action :lampcmd</Text>
        <Text>date time =Dtcreate</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Last 30 Day record</Text>
        </View>
        <View>
          <Text>filter</Text>
        </View>
      </View>
      {/** History list */}
      <FlatList style={{padding: 10}} data={data} renderItem={HistoryItem} />
    </View>
  );
};
const HistoryItem = props => {
  // console.log(props);
  return (
    <View style={{padding: 10, borderWidth: 0.5, borderColor: 'gray'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Command ID</Text>
        </View>
        <View>
          <Text>{props?.item.id || ''}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>User</Text>
        </View>
        <View>
          <Text>{props?.item.usernameCreate || ''}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Action</Text>
        </View>
        <View>
          <Text>{props?.item.lampCmd || ''}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Datetime</Text>
        </View>
        <View>
          <Text>{props?.item.dtCreate} </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryTab;
