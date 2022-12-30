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
import Monitoring from './Monitoring';
import MonitoringCard from './MonitoringCard';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MonitoringDetail from './components/monitoring/MonitoringDetail';
import MonitoringTab from './MonitoringTab';
import MonitoringCreate from './MonitoringCreate';
import {Icon} from '@rneui/themed';

const MonitoringTest = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={MonitoringTestSub} />
      <Stack.Screen name="MonitoringDetail" component={MonitoringTab} />
      <Stack.Screen name="Create Monitoring" component={MonitoringCreate} />
    </Stack.Navigator>
  );
};
const MonitoringTestSub = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  useEffect(() => {
    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        return res;
      });
    }
    getData()
      .then(token => {
        var requestOptions = {
          method: 'GET',
          headers: {
            // Accept: '*',
            // 'Content-Type': 'application/json',
            'X-Token': token,
          },
        };
        fetch(
          'https://gis2.ectrak.com.hk:8900/api/v2/options/devices?showOnlyActive=1',
          requestOptions,
        )
          .then(response => {
            return response.json();
          })
          .then(result => {
            //  console.log(result);
            // return result;
            setData(result);
          })
          .catch(error => console.log('error1', error));
      })
      .catch(e => {
        console.log('getdata error', e);
      });
  }, []);
  console.log('monitoring test data');
  console.log(data);
  return (
    <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
            marginRight: 5,
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Create Monitoring');
          }}>
          <Icon
            name="add-box"
            size={24}
            color="blue"
            type="material"
            style={{paddingRight: 5}}
          />
          <Text style={{color: 'blue'}}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: 'blue'}}>2022-12-06 12:26:43</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 5}}></View>
      <FlatList
        data={data}
        renderItem={props => (
          <MonitoringCard {...props} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default MonitoringTest;
