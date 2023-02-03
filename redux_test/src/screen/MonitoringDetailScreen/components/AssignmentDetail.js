import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const AssignmentDetail = ({islandscapemode}) => {
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
          name="md-reader-outline"
          size={24}
          color="black"
          type="ionicon"
          style={{padding: 10, justifyContent: 'center'}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
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
          name="person"
          size={24}
          color="black"
          type="material"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="EPIC"
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
          name="person"
          size={24}
          color="black"
          type="material"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="CP"
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
          name="calendar-range"
          size={24}
          color="black"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="ASSIGNED DATE"
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
          name="calendar-range"
          size={24}
          color="black"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="ETMS START TIME"
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
          name="calendar-range"
          size={24}
          color="black"
          type="material-community"
          style={{padding: 10}}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={{
            width: islandscapemode ? '95%' : '85%',
            backgroundColor: '#f5f6f7',
          }}
          label="ETMS FINISH TIME"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default AssignmentDetail;
