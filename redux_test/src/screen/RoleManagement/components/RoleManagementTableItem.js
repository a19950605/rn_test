import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

const RoleManagementTableItem = rowData => {
  console.log('current in table row');
  console.log(rowData);

  return (
    <DataTable.Row style={{paddingHorizontal: 0}}>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        {rowData?.item?.id}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        {rowData?.item?.code}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        {rowData?.item?.displayName}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        {rowData?.item?.status}
      </DataTable.Cell>

      <DataTable.Cell
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#e6f9fa',
          borderColor: 'lightgray',
          borderWidth: 0.3,
          borderRadius: 0,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            rowData.navigation.navigate('RoleDetail', rowData?.item);
          }}>
          <Text style={{color: 'blue'}}>Details</Text>
        </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default RoleManagementTableItem;
