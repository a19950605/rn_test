import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {styles} from '../../../constants/styles';
//import Moment from 'react-moment';

const HistoryTab = ({deviceID}) => {
  console.log(deviceID);
  const [token, setToken] = useState('');
  const [data, setData] = useState('');
  /*
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
        .catch(error => console.log('error17', error));
        
    });
  }, [deviceID]);*/
  return (
    <View style={styles.screenInit}>
      <View style={styles.spaceBetween}>
        <View>
          <Text>Last 30 Day record</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="filter"
              size={24}
              color="black"
              type="ionicon"
              style={styles.p10}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/** History list */}
      <FlatList style={styles.p10} data={data} renderItem={HistoryItem} />
    </View>
  );
};
const HistoryItem = props => {
  // console.log(props);
  return (
    <View style={{padding: 10, borderWidth: 0.5, borderColor: 'gray'}}>
      <View style={styles.row}>
        <View>
          <Text>Command ID</Text>
        </View>
        <View>
          <Text>{props?.item.id || ''}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text>User</Text>
        </View>
        <View>
          <Text>{props?.item.usernameCreate || ''}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text>Action</Text>
        </View>
        <View>
          <Text>{props?.item.lampCmd || ''}</Text>
        </View>
      </View>
      <View style={styles.row}>
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
