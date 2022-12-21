import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from '@rneui/themed';

const TableTest2 = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Alarm ID</DataTable.Title>
        <DataTable.Title>Type</DataTable.Title>
        <DataTable.Title>Controller ID</DataTable.Title>
        <DataTable.Title>RFL</DataTable.Title>
        <DataTable.Title>Trigger Datetime</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row style={{backgroundColor: 'green'}}>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>414</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>Conntection Lost</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>C001</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>KT/RT/001</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>2022-12-13 15:34:49</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>Active</Text>
        </DataTable.Cell>
      </DataTable.Row>
      i forgot
      <DataTable.Row style={{backgroundColor: 'red'}}>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>237</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>Lamp Fault</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>C001</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>KT/RT/001</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>2022-12-13 15:34:49</Text>
        </DataTable.Cell>
        <DataTable.Cell>
          <Text style={{color: 'white'}}>Resumed</Text>
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableTest2;
