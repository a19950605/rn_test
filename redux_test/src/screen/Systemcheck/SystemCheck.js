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
import {useSelector} from 'react-redux';
import {getUserFunc} from '../../redux/features/roleUserFunc/roleUserFuncSlice';

const SystemCheck = () => {
  const [data, setData] = useEffect([1, 2, 3]);
  return (
    <View style={{flex: 1}}>
      <Text>11</Text>
      {/* <FlatList
        data={data}
        renderItem={props => <SystemCheckCard {...props} />}
      /> */}
    </View>
  );
};
const SystemCheckCard = () => {
  return (
    <View style={{padding: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>Name</Text>
        <Text>Last Completed Assignment</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>Type</Text>
        <Text>Task status</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>Value</Text>
        <Text>2022-12-06</Text>
      </View>
    </View>
  );
};

export default SystemCheck;
