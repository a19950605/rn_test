import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button, Icon} from '@rneui/themed';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import UserAccountTableItem from './UserAccountTableItem';
import {styles} from '../../../constants/styles';

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
    <DataTable style={styles.ph0}>
      <DataTable.Header style={styles.ph0}>
        <DataTable.Title
          style={styles.tableCell1}
          sortDirection={
            filterField == 'id' ? (filterDesc ? 'ascending' : 'descending') : ''
          }
          onPress={() => {
            setFilterField('id');
            setFilterDesc(!filterDesc);
            setLoading(true);
          }}>
          <Text style={styles.tableTitle}>Account ID</Text>
        </DataTable.Title>
        <DataTable.Title
          style={styles.tableCell1}
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
          <Text style={styles.tableTitle}>Display name</Text>
        </DataTable.Title>
        <DataTable.Title
          style={styles.tableCell1}
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
          <Text style={styles.tableTitle}>Username</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableCell1}>
          <Text style={styles.tableTitle}>Role</Text>
        </DataTable.Title>
        <DataTable.Title
          style={styles.tableArr}
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
          <Text style={styles.tableBtn2}>Status</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableArr}>
          <Text style={styles.tableBtn2}>Action</Text>
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
