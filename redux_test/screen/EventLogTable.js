import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const optionsPerPage = [2, 3, 4];

const EventLogTable = ({data}) => {
  console.log('current in table');
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const navigation = useNavigation();

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text>User</Text>
        </DataTable.Title>
        <DataTable.Title>Datetime</DataTable.Title>
        <DataTable.Title>Function</DataTable.Title>
        <DataTable.Title>Type</DataTable.Title>
        <DataTable.Title>Data</DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={data}
        renderItem={props => <TableRow {...props} navigation={navigation} />}
      />
    </DataTable>
  );
};

const TableRow = rowData => {
  console.log('current in table row');
  console.log(rowData);
  return (
    <DataTable.Row>
      <DataTable.Cell>{rowData?.item?.username}</DataTable.Cell>
      <DataTable.Cell>{rowData?.item?.time}</DataTable.Cell>
      <DataTable.Cell>{rowData?.item?.func}</DataTable.Cell>
      <DataTable.Cell>{rowData?.item?.type}</DataTable.Cell>
      <DataTable.Cell>
        {rowData?.item?.dest.split(' ')[0] +
          rowData?.item?.dest.split(' ')[1] +
          rowData?.item?.dest.split(' ')[2] +
          rowData?.item?.dest.split(' ')[3]}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default EventLogTable;
