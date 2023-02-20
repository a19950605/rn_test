import React from 'react';

export const FormValidator = ({
  input,
  lengthChk,
  length,
  pw,
  setValue,
  setIsError,
}) => {
  //length,others,space

  //null check
  if (input == '') {
    setValue('Required!');
    setIsError(true);
    return '';
  }
  //lenght check
  if (lengthChk == true) {
    if (length > input.length) {
      setValue(`At least ${length} characters`);
      setIsError(true);

      return '';
    }
  }

  if (pw != undefined)
    if (input != pw) {
      //password confirmation check
      // if (pw != input) {
      setValue('Password must match');
      setIsError(true);

      return '';

      // }
    }

  return '';
};
