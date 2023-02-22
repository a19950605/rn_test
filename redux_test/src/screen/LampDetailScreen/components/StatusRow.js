import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';
import {statusInfo} from '../../../utils/statusInfo';

export const StatusRow = ({islandscapeMode, label, data}) => {
  const [rowStr, setRowStr] = useState('');
  const [iconColor, setIconColor] = useState('black');
  const [icon, setIcon] = useState('question');
  const [iconType, setIconType] = useState('octicon');
  useEffect(() => {
    const {statusStr, statusIcon, statusColor, statusIconType} = statusInfo({
      condStr: label,
      data,
    });
    setRowStr(statusStr);
    setIconColor(statusColor);
    setIcon(statusIcon);
    setIconType(statusIconType);
  }, []);
  return (
    <View style={styles.inputRow}>
      <Icon
        name={icon}
        size={24}
        color={iconColor}
        type={iconType}
        style={styles.rowIcon}
      />
      <TextInput
        editable={false}
        selectTextOnFocus={false}
        style={
          islandscapeMode ? styles.textInputTablet : styles.textInputMobile
        }
        label={label}
        value={rowStr}
        onChangeText={''}
      />
    </View>
  );
};
