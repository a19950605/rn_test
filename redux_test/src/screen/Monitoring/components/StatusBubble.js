import {Icon} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

export const StatusBubble = ({title, status, t}) => {
  let iconColor = 'black';
  let iconCode = 'alert';
  //#case lamp icon1
  //ConnectionStatus
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
