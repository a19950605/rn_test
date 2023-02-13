import React from 'react';
import {View} from 'react-native';
import {Menu} from 'react-native-paper';

export const DropDownOpt = ({setSelectedOption, setForm, form, setVal}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 999,
        width: '86%',
        left: 41,
        top: -10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
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
