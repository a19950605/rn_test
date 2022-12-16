import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const Alarm = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Outstandingn alarm</Text>
        </View>
        <View>
          <Text>filter</Text>
        </View>
      </View>
      {/** History list */}

      <View style={{marginTop: 10}}>
        <Text>get list here</Text>
      </View>
    </View>
  );
};

const HistoryItem = () => {
  return (
    <View style={{padding: 10, borderWidth: 0.5, borderColor: 'gray'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Command ID</Text>
        </View>
        <View>
          <Text>483</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>User</Text>
        </View>
        <View>
          <Text>sysadmin</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Action</Text>
        </View>
        <View>
          <Text>Off</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Datetime</Text>
        </View>
        <View>
          <Text>2022-12-06 18:19:57</Text>
        </View>
      </View>
    </View>
  );
};

export default Alarm;
