import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const AssignmentDetail = () => {
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
          label="Group"
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

export default AssignmentDetail;
