import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const LastControlDetail = props => {
  console.log(props?.data?.lastCmd);
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
          name="person"
          size={24}
          color="black"
          type="material"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Last Control By"
          value={''}
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
          name="power"
          size={24}
          color="black"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Last Control Action"
          value={''}
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
          name="calendar-range"
          size={24}
          color="black"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Last Control Datetime"
          value={''}
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default LastControlDetail;
