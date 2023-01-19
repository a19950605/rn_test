import React from 'react';

import {Text, View, StyleSheet, Button} from 'react-native';
//monitoring
const OutstandingAlarmCard2 = props => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'red',
          marginLeft: 5,
          marginRight: 5,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Alarm ID: </Text>
          <Text>{props.id}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Type: </Text>
          <Text>Lamp Fault</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Controller ID:
          </Text>
          <Text>C001</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>RFL: </Text>
          <Text>KT/R1/001</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Triggered Datetime:
          </Text>
          <Text>2022-12-06 11:35:44</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Status: </Text>
          <Text>Active</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 5,
          marginRight: 5,
          justifyContent: 'space-around',
          backgroundColor: 'pink',
          marginBottom: 2,
        }}>
        <View>
          <Text style={{padding: 10, color: 'blue'}}>Details</Text>
        </View>
        <View>
          <Text style={{padding: 10, color: 'blue'}}>ACK</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'green',
    width: '100%',
  },
  btn: {
    width: '100%',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btns: {
    alignItems: 'center',
    padding: '20',
    color: 'blue',
    backgroundColor: 'lightgreen',
  },
});
export default OutstandingAlarmCard2;
