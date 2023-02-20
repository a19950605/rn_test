import React from 'react';

export const FormValidatorMsg = ({input, lengthChk, length, pw, setValue}) => {
  //length,others,space

  //null check
  if (input == '') {
    return 'Required!';
  }
  //lenght check
  if (lengthChk == true) {
    if (length > input.length) {
      return `At least ${length} characters`;
    }
  }
  //password confirmation check
  if (pw != undefined)
    if (input != pw) {
      // if (pw != input) {
      return 'Password must match';
      // }
    }

  return '';
};
