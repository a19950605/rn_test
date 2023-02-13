import {Icon} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

export const StatusBubble = ({title, mode, status, t}) => {
  let iconColor = 'black';
  let iconCode = 'question';
  //#case lamp icon1
  //ConnectionStatus

  switch (mode) {
    case 'lamp':
      switch (status) {
        case 'ON':
          iconCode = 'light-bulb';
          iconColor = 'green';
          break;
        case 'OFF':
          iconCode = 'light-bulb';
          iconColor = 'gray';
          break;
        case 'OFFLINE':
          iconCode = 'light-bulb';
          iconColor = 'gray';
          break;
        case 'UNKNOWN':
          iconCode = 'question';
          iconColor = 'black';
          break;
        default:
          break;
      }
      break;
    case 'health':
      iconCode = 'alert';
      iconColor = 'red';
      break;
    case 'conn':
      switch (status) {
        case 'NORMAL':
          iconCode = 'device-desktop';
          iconColor = 'green';
          break;
        case 'CONNLOST':
          iconCode = 'alert';
          iconColor = 'red';
          break;
        case 'UNKNOWN':
          iconCode = 'question';
          iconColor = 'black';
          break;
        default:
          break;
      }
      break;
    case 'power':
      switch (status) {
        case 'NORMAL':
          iconCode = 'plug';
          iconColor = 'green';
          break;
        case 'CONNLOST':
          iconCode = 'alert';
          iconColor = 'red';
          break;
        case 'UNKNOWN':
          iconCode = 'question';
          iconColor = 'black';
          break;
        default:
          break;
      }
      break;

    default:
      iconCode = 'question';
      iconColor = 'black';
      break;
  }

  return (
    <View
      style={{
        backgroundColor: '#f7f7f7',
        borderRadius: 100,
        marginLeft: 5,
        paddingTop: 10,
        paddingBottom: 0,
        paddingLeft: 13,
        paddingRight: 13,
      }}>
      <Icon name={iconCode} size={24} color={iconColor} type="octicon" />
      <Text style={{fontSize: 11, textAlign: 'center'}}>{t(title)}</Text>
    </View>
  );
};
