import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../constants/styles';

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
        <DataTable.Title style={styles.tableCell1_5}>
          <Text style={styles.eventLogTableText}>User</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableCell1_5}>
          <Text style={styles.eventLogTableText}>Datetime</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableCell1_5}>
          <Text style={styles.eventLogTableText}>Function</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableCell1_5}>
          <Text style={styles.eventLogTableText}>Type</Text>
        </DataTable.Title>
        <DataTable.Title style={styles.tableCell4}>
          <Text style={styles.eventLogTableText}>Data</Text>
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
      <DataTable.Cell style={styles.tableCell1_5}>
        {rowData?.item?.username}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1_5}>
        {rowData?.item?.time?.split('.')[0]}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1_5}>
        {rowData?.item?.func}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell1_5}>
        {rowData?.item?.type}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell4} numberOfLines={8}>
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
