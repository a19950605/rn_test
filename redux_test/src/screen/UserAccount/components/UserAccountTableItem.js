import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const UserAccountTableItem = rowData => {
  console.log('current in table row');
  console.log(rowData);

  return (
    <DataTable.Row style={styles.ph0}>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.id}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.displayName}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.username}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.roles[0]?.code || '--'}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1}>
        {rowData?.item?.status}
      </DataTable.Cell>

      <DataTable.Cell style={styles.tableBtn}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            rowData.navigation.navigate('UserAccountDetail', rowData?.item);
          }}>
          <Text style={{color: 'blue'}}>Details</Text>
        </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default UserAccountTableItem;
