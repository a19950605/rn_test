import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from '@rneui/themed';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const TableTest2 = ({data}) => {
  console.log('current in table');
  console.log(data);
  const navigation = useNavigation();

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Alarm ID</DataTable.Title>
        <DataTable.Title>Type</DataTable.Title>
        <DataTable.Title>Controller ID</DataTable.Title>
        <DataTable.Title>RFL</DataTable.Title>
        <DataTable.Title>Trigger Datetime</DataTable.Title>
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
  return (
    <DataTable.Row style={{backgroundColor: 'green', marginBottom: 1}}>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.id}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.alarmType}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.controllerCode}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.code}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.dtCreate || ''}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{color: 'white'}}>{rowData?.item?.status}</Text>
      </DataTable.Cell>

      <DataTable.Cell style={{backgroundColor: 'lightgreen', marginRight: -15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              rowData.navigation.navigate(
                'OutstandingDetailTab',
                rowData?.item,
              );
            }}>
            <Text>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>ACK</Text>
          </TouchableOpacity>
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default TableTest2;
