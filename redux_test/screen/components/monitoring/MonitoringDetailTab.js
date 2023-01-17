import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const MonitoringDetailTab = props => {
  console.log('inside monitor tab');

  return (
    <View style={{padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="monitor"
          size={24}
          color="black"
          style={{padding: 10, justifyContent: 'center'}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Controller ID"
          value={props?.data?.device?.controllerCode || ''}
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
          name="hash"
          size={24}
          color="black"
          type="feather"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Device ID"
          value={JSON.stringify(props?.data?.device?.controllerDeviceId) || ''}
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
          name="location-pin"
          size={24}
          color="black"
          type="material"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="RFL"
          value={props?.data?.device?.code || ''}
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
          name="call-split"
          size={24}
          color="black"
          type="material"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Relay Channel Index"
          value={
            JSON.stringify(props?.data?.device?.relayChannel?.channelIdx) ||
            'no'
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
          name="play"
          size={24}
          color="black"
          type="fontisto"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Status"
          value={props?.data?.device?.status || ''}
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default MonitoringDetailTab;
