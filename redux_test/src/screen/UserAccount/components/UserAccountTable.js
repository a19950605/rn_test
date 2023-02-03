import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button, Icon} from '@rneui/themed';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import UserAccountTableItem from './UserAccountTableItem';

const optionsPerPage = [2, 3, 4];

const UserAccountTable = ({
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
    {displayValue: 'Account ID', apiValue: 'id'},
    {displayValue: 'Display Name', apiValue: 'displayName'},
    {displayValue: 'Username', apiValue: 'username'},

    {displayValue: 'Status', apiValue: 'status'},
  ];
  return (
    <DataTable style={{paddingHorizontal: 0}}>
      <DataTable.Header style={{paddingHorizontal: 0}}>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'id' ? (filterDesc ? 'ascending' : 'descending') : ''
          }
          onPress={() => {
            setFilterField('id');
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
            Account ID
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'displayName'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('displayName');
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
            Display name
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'username'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('username');
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
            Username
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Role
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}
          sortDirection={
            filterField == 'status'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('status');
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
            Status
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
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
          <UserAccountTableItem {...props} navigation={navigation} />
        )}
      />
    </DataTable>
  );
};

export default UserAccountTable;
