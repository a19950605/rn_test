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

const Assignment = () => {
  const navigation = useNavigation();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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

export default Assignment;
