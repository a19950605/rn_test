import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const StatusTab = ({data, islandscapeMode}) => {
  // console.log('inside status tab');
  // console.log(props);

  // console.log(data?.device?.activeAlarms); //health status ==alarm
  // console.log(data?.device?.connectionStatus); //
  // console.log(data?.device?.dtKeepalive);
  // console.log(data?.device?.dtPrevLampStatus);
  // console.log(data?.device?.prevLampStatus);
  // console.log(data?.device?.relayChannel);
  // console.log(data?.device?.status);
  return (
    <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
      <View style={styles.inputRow}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={styles.rowIcon}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Health Status"
          value="Alarm("
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Controller Connection Status"
          value={data?.device?.connectionStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="power-plug"
          size={24}
          color="green"
          type="material-community"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Power Status"
          value={data?.device?.batteryStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="question"
          size={24}
          color="black"
          type="octicon"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Lamp Status"
          value={
            data?.device?.lampStatus == 'OFF'
              ? 'UNKNOWN'
              : data?.device?.lampStatus
          }
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="lightbulb"
          size={24}
          color="gray"
          type="material-community"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Previous Lamp Status"
          value={data?.device?.prevLampStatus || ''}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.inputRow}>
        <Icon
          name="warning"
          size={24}
          color="red"
          type="antdesign"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapeMode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Relay Channel Status"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default StatusTab;
