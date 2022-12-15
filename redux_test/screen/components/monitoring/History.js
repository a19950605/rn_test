import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const History = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text>Last 30 Day record</Text>
        <Text>filter</Text>

        <FlatList />
      </View>
    </View>
  );
};

const HistoryItem = () => {
  return (
    <View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

export default History;
