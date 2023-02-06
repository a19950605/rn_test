import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const StatusTab = props => {
  // console.log('inside status tab');
  // console.log(props);

  // console.log(props?.data?.device?.activeAlarms); //health status ==alarm
  // console.log(props?.data?.device?.connectionStatus); //
  // console.log(props?.data?.device?.dtKeepalive);
  // console.log(props?.data?.device?.dtPrevLampStatus);
  // console.log(props?.data?.device?.prevLampStatus);
  // console.log(props?.data?.device?.relayChannel);
  // console.log(props?.data?.device?.status);
  return (
    <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={{padding: 10, justifyContent: 'center'}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Health Status"
          value="Alarm("
          onChangeText={text => setText(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Controller Connection Status"
          value={props?.data?.device?.connectionStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="power-plug"
          size={24}
          color="green"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Power Status"
          value={props?.data?.device?.batteryStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="question"
          size={24}
          color="black"
          type="octicon"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Lamp Status"
          value={
            props?.data?.device?.lampStatus == 'OFF'
              ? 'UNKNOWN'
              : props?.data?.device?.lampStatus
          }
          onChangeText={text => setText(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="lightbulb"
          size={24}
          color="gray"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Previous Lamp Status"
          value={props?.data?.device?.prevLampStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: props?.islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="Relay Channel Status"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default StatusTab;
