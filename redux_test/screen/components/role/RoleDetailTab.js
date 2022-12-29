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
import {Tab, TabView} from '@rneui/themed';
import RoleDetailPermission from './RoleDetailPermisson';

const RoleDetailTab = props => {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getOneRolePermission(props?.route?.params?.id);
  }, []);

  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }

  const getOneRolePermission = id => {
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
        `https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission/${id}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log('getOneRolePermission');

          // return result;
          setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  };
  return (
    <>
      <Tab
        value={index}
        scrollable={true}
        onChange={e => setIndex(e)}
        containerStyle={{
          backgroundColor: 'white',
          color: 'black',
        }}
        indicatorStyle={{
          backgroundColor: 'red',
          height: 3,
        }}
        variant="default">
        <Tab.Item
          title="Details"
          titleStyle={{fontSize: 12}}
          icon={{name: 'clipboard-text', type: 'material-community'}}
        />
        <Tab.Item
          title="Permission"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text>Detail</Text>
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          <RoleDetailPermission data={data} />
        </TabView.Item>
      </TabView>
    </>
  );
};
export default RoleDetailTab;
