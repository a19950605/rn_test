import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button, Icon} from '@rneui/themed';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MonitoringTableItem from './LampTableItem';

const optionsPerPage = [2, 3, 4];

const TableTest = ({
  data,
  navigation,
  filterDesc,
  filterField,
  setFilterDesc,
  setFilterField,
  setLoading,
}) => {
  console.log('current in table');

  const sortOption = [
    {displayValue: 'RFL ID', apiValue: 'rflid'},
    {displayValue: 'RFL', apiValue: 'rfl'},
    {displayValue: 'EPIC', apiValue: 'epic'},
    {displayValue: 'Group', apiValue: 'Group'},
    {displayValue: 'Status As Of', apiValue: 'statusasof'},
  ];
  return (
    <DataTable style={{paddingHorizontal: 0}}>
      <DataTable.Header style={{paddingHorizontal: 0}}>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'rflid'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('rflid');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            RFL ID
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 2, justifyContent: 'center'}}
          sortDirection={
            filterField == 'rfl'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('rfl');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            RFL
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'epic'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('epic');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            EPIC
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'Group'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('Group');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Group
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 2, justifyContent: 'center', flexDirection: 'row'}}
          sortDirection={
            filterField == 'statusasof'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('statusasof');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            Status As Of
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            eRFL Readliness
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 4, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            Status
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 2.5, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            Action
          </Text>
        </DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={data}
        renderItem={props => (
          <LampTableItem {...props} navigation={navigation} />
        )}
      />
    </DataTable>
  );
};

export default TableTest;
