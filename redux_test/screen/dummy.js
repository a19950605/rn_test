import React, {useEffect, useState} from 'react';

import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

const Dummy = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>dummy</Text>
      <Demo bgColor="red" title="Hello" />
    </View>
  );
};

const Demo = props => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: props.bgColor || 'green',
      }}>
      <Text>{props.title}</Text>
    </View>
  );
};
export default Dummy;
