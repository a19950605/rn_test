import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from '@rneui/themed';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const optionsPerPage = [2, 3, 4];

const TableTest = ({data}) => {
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
          <Text>RFL ID</Text>
        </DataTable.Title>
        <DataTable.Title>RFL</DataTable.Title>
        <DataTable.Title>EPIC</DataTable.Title>
        <DataTable.Title>Group</DataTable.Title>
        <DataTable.Title>Status As Of</DataTable.Title>
        <DataTable.Title>eRFL Readliness</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
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
      <DataTable.Cell>{rowData?.item?.id}</DataTable.Cell>
      <DataTable.Cell>{rowData?.item?.code}</DataTable.Cell>
      <DataTable.Cell>-</DataTable.Cell>
      <DataTable.Cell>-</DataTable.Cell>
      <DataTable.Cell>-</DataTable.Cell>
      <DataTable.Cell>{rowData?.item?.status}</DataTable.Cell>
      <DataTable.Cell>icon1 icon2 icon3 icon4 icon5</DataTable.Cell>
      <DataTable.Cell>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => {
              rowData.navigation.navigate('MonitoringDetail', rowData?.item);
            }}>
            <Text>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Control</Text>
          </TouchableOpacity>
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
};
export default TableTest;
