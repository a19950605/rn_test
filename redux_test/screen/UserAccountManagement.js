import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserAccountManagement = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');

  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      setToken(res);
      return res;
    });
  }
  useEffect(() => {
    getData().then(res => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
      };
      //   fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
      //     .then(response => {
      //       return response.json();
      //     })
      //     .then(result => {
      //       console.log(result);
      //       // return result;
      //       setData(result);
      //     })
      //     .catch(error => console.log('error1', error));
    });
  }, []);
  const createUser = () => {
    var formdata = new FormData();
    formdata.append('status', 'ACTIVE');
    formdata.append('username', 'wilson2022t');
    formdata.append('displayName', 'wilson test');
    formdata.append('password', 'R4QB10DD');
    formdata.append('staffNo', '12222');

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
      fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          // return result;
          //setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  };

  const userDetail = id => {
    getData().then(res => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
      };
      fetch(
        `https://gis2.ectrak.com.hk:8900/api/system/user/${id}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          // return result;
          //setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>3 route details(2tab details permission), add ,home </Text>

      <TouchableOpacity
        onPress={() => {
          userDetail(21);
        }}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserAccountManagement;
