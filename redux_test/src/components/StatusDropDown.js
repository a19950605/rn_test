import React from 'react';
import {View, Text} from 'react-native';
import {Menu} from 'react-native-paper';
import {styles} from '../constants/styles';

//props
export const DropDown = ({
  close,
  setForm,
  form,
  setDisplay,
  keyVal,
  options,
}) => {
  /**
   * 
   *   function
 LOG  function
 LOG  object
 LOG  string
 LOG  object
   */
  console.log('status drop down');
  console.log(typeof close);
  console.log(typeof setForm);
  console.log(typeof form);
  console.log(typeof keyVal);
  console.log(typeof options);
  console.log(form);
  console.log('after drop');
  return (
    <View style={styles.dropDownContainer}>
      {options.map((option, i) => {
        return (
          <Menu.Item
            key={i}
            onPress={() => {
              form[keyVal] = option.formVal;
              setDisplay(option.displayName);
              setForm({...form});
              close(false);
            }}
            title={option.displayName}
          />
        );
      })}
    </View>
  );
};
