import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';
import {StatusRow} from './StatusRow';
import moment from 'moment';

const StatusTab = ({data, islandscapeMode}) => {
  console.log('inside status tab');
  console.log(data);

  // console.log(data?.device?.activeAlarms); //health status ==alarm
  // console.log(data?.device?.connectionStatus); //
  // console.log(data?.device?.dtKeepalive);
  // console.log(data?.device?.dtPrevLampStatus);
  // console.log(data?.device?.prevLampStatus);
  // console.log(data?.device?.relayChannel);
  // console.log(data?.device?.status);
  return (
    <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Health Status'}
        data={data}
      />
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Controller Connection Status'}
        data={data}
      />
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Power Status'}
        data={data}
      />
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Lamp Status'}
        data={data}
      />
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Previous Lamp Status'}
        data={data}
      />
      <StatusRow
        islandscapeMode={islandscapeMode}
        label={'Relay Channel Status'}
        data={data}
      />
    </View>
  );
};

export default StatusTab;
