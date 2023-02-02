import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {FlatList} from 'react-native';
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
        <DataTable.Title style={{flex: 1.5, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            User
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1.5, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Datetime
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1.5, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Function
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1.5, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Type
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 4, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Data
          </Text>
        </DataTable.Title>
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
      <DataTable.Cell style={{flex: 1.5, justifyContent: 'center'}}>
        {rowData?.item?.username}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1.5, justifyContent: 'center'}}>
        {rowData?.item?.time?.split('.')[0]}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1.5, justifyContent: 'center'}}>
        {rowData?.item?.func}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1.5, justifyContent: 'center'}}>
        {rowData?.item?.type}
      </DataTable.Cell>
      <DataTable.Cell
        style={{flex: 4, justifyContent: 'center'}}
        numberOfLines={8}>
        <View>
          <Text>
            {rowData?.item?.dest.split(' ')[0] +
              rowData?.item?.dest.split(' ')[1]}
          </Text>
          <Text>
            {rowData?.item?.dest.split(' ')[2] +
              rowData?.item?.dest.split(' ')[3]}
          </Text>
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default EventLogTable;
