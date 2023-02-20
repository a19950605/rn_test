import React from 'react';
import {} from 'react-native';
import {HelperText} from 'react-native-paper';
import {styles} from '../constants/styles';

export const FormValidationError = ({value}) => {
  return (
    <HelperText
      type="error"
      visible={value}
      style={value ? styles.errorTxtShow : styles.errorTxtHide}>
      {value}
    </HelperText>
  );
};
