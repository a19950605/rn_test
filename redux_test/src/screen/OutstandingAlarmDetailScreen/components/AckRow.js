import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../constants/styles';
import moment from 'moment';
import {capitalizeWords} from '../../../utils/capitalizeWords';
export const AckRow = ({alarmDetail, isLandscapeMode, content}) => {
  const [iconColor, setIconColor] = useState('red');
  const [iconName, setIconName] = useState('alarm');
  const [iconType, setIconType] = useState('material-community');
  useEffect(() => {
    switch (content) {
      case 'alarm':
        setIconColor('red');
        setIconName('alarm');
        break;
      case 'ack':
        setIconName('check');
        setIconColor('blue');

        break;
      case 'resumed':
        setIconColor('green');
        setIconName('alarm');
        break;
      default:
        setIconColor('red');
        setIconName('alarm');
    }
  }, []);
  return (
    <View style={styles.rowCenter}>
      {content == 'resumed' && (
        <View
          style={{
            height: '65%',
            width: 1.5,
            backgroundColor: '#909090',
            position: 'absolute',
            left: '6%',
            top: '-35%',
          }}></View>
      )}
      {content == 'ack' && (
        <View
          style={{
            height: '75%',
            width: 1.5,
            backgroundColor: '#909090',
            position: 'absolute',
            left: '6%',
            top: '-50%',
          }}></View>
      )}
      <Icon
        name={iconName}
        size={26}
        color={iconColor}
        type={iconType}
        style={styles.p10}
      />
      <View
        style={{
          padding: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: isLandscapeMode ? '95%' : '85%',
          backgroundColor: '#faf9f7',
        }}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          {content == 'alarm' &&
            `Occurred @${moment(alarmDetail.dtCreate)
              .utcOffset(8)
              .format('YYYY-MM-DD HH:mm:ss')}`}
          {content == 'ack'
            ? alarmDetail.status != 'RESUMED'
              ? `Acknowledged @${moment(alarmDetail.dtModify)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')}`
              : `Acknowledged @Nil`
            : ''}
          {content == 'resumed' &&
            `Resumed @${moment(alarmDetail.dtModify)
              .utcOffset(8)
              .format('YYYY-MM-DD HH:mm:ss')}`}
        </Text>
        {content == 'alarm' && (
          <>
            <Text style={{color: 'black'}}>
              Type: {capitalizeWords(alarmDetail.alarmType?.replace('_', ' '))}
            </Text>
            <Text style={{color: 'black'}}>RFL: {alarmDetail.deviceCode}</Text>
          </>
        )}

        {content == 'ack' && (
          <>
            <Text style={{color: 'black'}}>
              User: {alarmDetail.usernameAck || 'Nil'}
            </Text>
          </>
        )}

        {content == 'resumed' && (
          <>
            <Text style={{color: 'black'}}>
              Type: {capitalizeWords(alarmDetail.alarmType?.replace('_', ' '))}
            </Text>
            <Text style={{color: 'black'}}>RFL: {alarmDetail.deviceCode}</Text>
          </>
        )}
      </View>
    </View>
  );
};
