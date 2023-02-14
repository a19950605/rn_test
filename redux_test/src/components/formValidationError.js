import React from 'react';
import {} from 'react-native';
import {HelperText} from 'react-native-paper';
import {styles} from '../constants/styles';
import {FormValidatorMsg} from '../utils/formValidatorMsg';

export const FormValidationError = ({
  value,
  isSubmit,
  lengthChk,
  length,
  confirmPw,
  pw,
}) => {
  let chkLogic = value == '' && isSubmit;
  if (lengthChk) {
    chkLogic = (value == '' || value.length < length) && isSubmit;
  }
  let pwChk = false;

  if (confirmPw == true) {
    if (chkLogic == false && isSubmit == true) {
      chkLogic = pw != value;
    }
  }
  return (
    //update, check null and invalid
    <HelperText
      type="error"
      visible={chkLogic}
      style={chkLogic ? styles.errorTxtShow : styles.errorTxtHide}>
      {FormValidatorMsg({
        input: value,
        lengthChk,
        length: length,
        confirmPw: pwChk,
        pw: pw,
      })}
    </HelperText>
  );
};
