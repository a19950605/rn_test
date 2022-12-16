import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const StatusTab = () => {
  return (
    <View style={{padding: 10}}>
      <View>
        <Text>
          health status:"healthStatus", controller connection status:"", power
          status:"batteryStatus", lamp status:"lampstatus",previous lamp
          status:prevLampStatus, relay channel
          status:'relaychannel.channelstatus'
        </Text>
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
          style={{padding: 10, justifyContent: 'center'}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Health Status"
          value="Alarm(2022-12-13 15:29:03)"
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Device ID"
          value=""
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="RFL"
          value=""
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Relay Channel Index"
          value=""
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Status"
          value=""
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Relay Channel Status"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default StatusTab;
