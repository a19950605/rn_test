import React from 'react';

export const FormValidatorMsg = ({input, lengthChk, length, confirmPw, pw}) => {
  //length,others,space

  if (input == '') {
    return 'Required!';
  }
  if (lengthChk == true) {
    if (length > input.length) {
      return `At least ${length} characters`;
    }
  }
  console.log('pwchk');
  if (input != pw) {
    // if (pw != input) {
    return 'Password must match';
    // }
  }

  return '';
};
