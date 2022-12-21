import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TableTest from '../TableTest';
import TableTest2 from './TableTest2';

const TableView = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 10}}>
      <Text>test</Text>
      <TableTest2 />
    </View>
  );
};

export default TableView;
