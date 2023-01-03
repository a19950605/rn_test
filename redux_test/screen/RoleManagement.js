import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoleListItem from './components/role/RoleListItem';
import {createStackNavigator} from '@react-navigation/stack';
import RoleDetailTab from './components/role/RoleDetailTab';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import RoleCreateTab from './components/role/RoleCreateTab';

const RoleManagement = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'Role Management', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={RoleManagementTest} />
      <Stack.Screen name="RoleDetail" component={RoleDetailTab} />
      <Stack.Screen name="RoleCreate" component={RoleCreateTab} />

      {/* <Stack.Screen name="Create user" component={UserAccountCreate} /> */}
    </Stack.Navigator>
  );
};
function RoleManagementTest() {
  const navigation = useNavigation();

  const [data, setData] = useState();
  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
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
      fetch(
        'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission',
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          // return result;
          // setData(result);
          console.log('role management');
          // console.log(result);
          setData(result?.content);
        })
        .catch(error => console.log('error1', error));
    });
  }, []);

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
          console.log(result);
          // return result;
          // setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  };
  //list row

  //create display name,code remarks status permission
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Create user');
            navigation.navigate('RoleCreate');
          }}>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              flexDirection: 'row',
              marginRight: 5,
            }}>
            <Text style={{color: 'blue'}}>Add</Text>
          </View>
        </TouchableOpacity>
        <Icon
          name="filter"
          size={24}
          color="black"
          type="ionicon"
          style={{padding: 10}}
        />
      </View>
      <FlatList
        data={data}
        renderItem={props => (
          <RoleListItem {...props} navigation={navigation} />
        )}
      />
    </View>
  );
}

export default RoleManagement;
