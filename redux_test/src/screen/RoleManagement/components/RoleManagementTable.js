import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button, Icon} from '@rneui/themed';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import RoleManagementTableItem from './RoleManagementTableItem';

const optionsPerPage = [2, 3, 4];

const RoleManagementTable = ({
  data,
  navigation,
  filterDesc,
  filterField,
  setFilterDesc,
  setFilterField,
  setLoading,
}) => {
  console.log('current in table');
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
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
            Role ID
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
          sortDirection={
            filterField == 'code'
              ? filterDesc
                ? 'ascending'
                : 'descending'
              : ''
          }
          onPress={() => {
            setFilterField('code');
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
            Code
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
            Display Name
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 1, justifyContent: 'center'}}
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
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
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
          <RoleManagementTableItem {...props} navigation={navigation} />
        )}
      />
    </DataTable>
  );
};

export default RoleManagementTable;
