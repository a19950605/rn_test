import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import {styles} from '../../../constants/styles';

const RoleManagementTableItem = rowData => {
  console.log('current in table row');
  console.log(rowData);

  return (
    <DataTable.Row style={styles.ph0}>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.id}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.code}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.displayName}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.status}
      </DataTable.Cell>

      <DataTable.Cell style={styles.tableBtn}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            rowData.navigation.navigate('RoleDetail', rowData?.item);
          }}>
          <Text style={styles.blue}>Details</Text>
        </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default RoleManagementTableItem;
