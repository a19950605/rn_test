import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const SysParams = () => {
  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/data/alarms/csv', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        //   console.log(result);
        // return result;
        console.log('sysparams');
        console.log(result);
      })
      .catch(error => console.log('error1', error));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>123</Text>
    </View>
  );
};

export default SysParams;
