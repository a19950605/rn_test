import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useGetUsersQuery} from '../features/api/userApiSlice';

const Relay = () => {
  const navigation = useNavigation();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  //relay
  //   const {
  //     data: users,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error,
  //   } = useGetUsersQuery(userToken);

  //   if (isLoading) {
  //     console.log('redux event log loading');
  //   } else if (isSuccess) {
  //     // setData(eventLogs);
  //     console.log('loading success123');
  //     console.log(users);
  //   } else if (isError) {
  //     console.log('get event log error');
  //     console.log(error);
  //   }

  useEffect(() => {
    // var requestOptions = {
    //   method: 'GET',
    //   headers: {
    //     // Accept: '*',
    //     // 'Content-Type': 'application/json',
    //     'X-Token': userToken,
    //   },
    // };
    // fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(result => {
    //     //   console.log(result);
    //     // return result;
    //     setData(result?.content);
    //   })
    //   .catch(error => console.log('error1', error));
  }, []);

  //   console.log('data test');
  //   console.log(data);
  return (
    <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            //  navigation.navigate('Create user');
          }}>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              flexDirection: 'row',
              marginRight: 5,
              alignItems: 'center',
            }}>
            <Icon
              name="add-box"
              size={24}
              color="blue"
              type="material"
              style={{paddingRight: 5}}
            />
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
    </View>
  );
};

export default Relay;
