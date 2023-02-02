import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const CreateButton = ({navLoc, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
        flexDirection: 'row',
        marginRight: 5,
        alignItems: 'center',
      }}
      onPress={() => {
        navigation.navigate(navLoc);
      }}>
      <Icon
        name="add-box"
        size={24}
        color="blue"
        type="material"
        style={{paddingRight: 5}}
      />
      <Text style={{color: 'blue'}}>Add</Text>
    </TouchableOpacity>
  );
};

export default CreateButton;
