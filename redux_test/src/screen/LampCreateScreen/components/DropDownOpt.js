import React from 'react';
import {View} from 'react-native';
import {Menu} from 'react-native-paper';
import {styles} from '../../../constants/styles';

export const DropDownOpt = ({setSelectedOption, setForm, form, setVal}) => {
  return (
    <View style={styles.dropDownContainer}>
      <Menu.Item
        onPress={() => {
          setSelectedOption(0);
          setForm({...form, setVal: 0});
          setMenu1(false);
        }}
        title="0"
      />
      <Menu.Item
        onPress={() => {
          setSelectedOption(1);
          setForm({...form, setVal: 1});
          setMenu1(false);
        }}
        title="1"
      />
      <Menu.Item
        onPress={() => {
          setSelectedOption(2);
          setForm({...form, setVal: 2});
          setMenu1(false);
        }}
        title="2"
      />
      <Menu.Item
        onPress={() => {
          setRelayChannelIdx(3);
          setForm({...form, setVal: 3});
          setMenu1(false);
        }}
        title="3"
      />
    </View>
  );
};
