import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//monitoring
import {TouchableOpacity} from 'react-native-gesture-handler';

const OutstandingAlarmCard = props => {
  //green card
  //console.log(props.item);

  return (
    <View>
      <View
        style={{
          backgroundColor: 'green',
          marginLeft: 5,
          marginRight: 5,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Alarm ID: </Text>
          <Text>{props.item.id || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Type: </Text>
          <Text>{props.item.alarmType || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Controller ID:{' '}
          </Text>
          <Text>{props.item.controllerCode || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>RFL: </Text>
          <Text>1</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Triggered Datetime:{' '}
          </Text>
          <Text>{props.item.dtCreate || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Status: </Text>
          <Text>{props.item.status || ''}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 5,
          marginRight: 5,
          justifyContent: 'space-around',
          backgroundColor: 'lightgreen',
          marginBottom: 2,
        }}>
        <View>
          <Text
            style={{padding: 10, color: 'blue'}}
            onPress={() => {
              props.navigation.navigate('OutstandingDetailTab', props.item);
            }}>
            Details
          </Text>
        </View>
        <View>
          <Text
            style={{padding: 10, color: 'blue'}}
            onPress={() => {
              alert(props.item.id);
            }}>
            ACK
          </Text>
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
export default OutstandingAlarmCard;
