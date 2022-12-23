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
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import UserAccountCard from './components/UserAccountCard';
import {createStackNavigator} from '@react-navigation/stack';
import UserAccountDetailTab from './components/UserAccountDetailTab';
import UserAccountCreate from './components/UserAccountCreate';

const UserAccountManagement = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="UserAccount" component={UserAccountManagementTest} />
      <Stack.Screen name="UserAccountDetail" component={UserAccountDetailTab} />
      <Stack.Screen name="Create user" component={UserAccountCreate} />
    </Stack.Navigator>
  );
};

const UserAccountManagementTest = () => {
  const navigation = useNavigation();
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
      fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          //   console.log(result);
          // return result;
          setData(result?.content);
        })
        .catch(error => console.log('error1', error));
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
          //   console.log(result);
          // return result;
          setData(result);
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
  //   console.log('data test');
  //   console.log(data);
  return (
    <View style={{flex: 1, padding: 5}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create user');
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

      <TouchableOpacity
        onPress={() => {
          userDetail(21);
        }}>
        <Text>test</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={props => (
          <UserAccountCard {...props} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
//this component should be move mou

export default UserAccountManagement;
