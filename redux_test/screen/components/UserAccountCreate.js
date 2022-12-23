import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import {TextInput, Menu} from 'react-native-paper';
const UserAccountCreate = () => {
  //user name
  //displayname
  //staffid
  //role (dropdown) default text first password, password confirmation remarks
  //status  active disabled
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Controller ID"
            value={''}
            onChangeText={''}
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Device ID"
            value={''}
            onChangeText={''}
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Relay Channel Index"
            value={''}
            onChangeText={''}
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Status"
            value={''}
            onChangeText={''}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 20,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => {
              alert('hello');
            }}>
            <Icon
              name="md-save-sharp"
              type="ionicon"
              size={24}
              color="green"
              style={{justifyContent: 'center', paddingRight: 5}}
            />
            <Text style={{color: 'green'}}> Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserAccountCreate;
