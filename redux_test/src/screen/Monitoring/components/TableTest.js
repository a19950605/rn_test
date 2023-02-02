import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button, Icon} from '@rneui/themed';
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
        <DataTable.Title style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            RFL ID
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            RFL
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            EPIC
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Group
          </Text>
        </DataTable.Title>
        <DataTable.Title
          style={{flex: 2, justifyContent: 'center', flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            Status As Of
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            eRFL Readliness
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 4, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              flexShrink: 1,
            }}>
            Status
          </Text>
        </DataTable.Title>
        <DataTable.Title style={{flex: 2.5, justifyContent: 'center'}}>
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
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        {rowData?.item?.id}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 2, justifyContent: 'center'}}>
        {rowData?.item?.code}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        -
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
        -
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 2, justifyContent: 'center'}}>
        -
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 2, justifyContent: 'center'}}>
        {rowData?.item?.status}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 4, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginLeft: 5,
            paddingTop: 10,
            paddingBottom: 0,
            paddingLeft: 13,
            paddingRight: 13,
          }}>
          <Icon name="question" size={24} color="black" type="octicon" />
          <Text style={{fontSize: 11}}>Lamp</Text>
        </View>
        <View
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginLeft: 5,
            paddingTop: 10,
            paddingBottom: 0,
            paddingLeft: 13,
            paddingRight: 13,
          }}>
          <Icon name="alert" size={24} color="red" type="octicon" />
          <Text style={{fontSize: 11}}>Health</Text>
        </View>
        <View
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginLeft: 5,
            paddingTop: 10,
            paddingBottom: 0,
            paddingLeft: 13,
            paddingRight: 13,
          }}>
          <Icon
            name={
              rowData?.item?.connectionStatus == 'CONNLOST'
                ? 'alert'
                : rowData?.item?.connectionStatus == 'NORMAL'
                ? 'device-desktop'
                : 'question'
            }
            size={24}
            color={
              rowData?.item?.connectionStatus == 'CONNLOST'
                ? 'red'
                : rowData?.item?.connectionStatus == 'NORMAL'
                ? 'green'
                : 'black'
            }
            type="octicon"
          />
          <Text style={{fontSize: 11}}>CONN</Text>
        </View>

        <View
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginLeft: 5,
            paddingTop: 10,
            paddingBottom: 0,
            paddingLeft: 13,
            paddingRight: 13,
          }}>
          <Icon
            name={
              rowData?.item?.batteryStatus == 'NORMAL' ? 'plug' : 'question'
            }
            size={24}
            color={rowData?.item?.batteryStatus == 'NORMAL' ? 'green' : 'black'}
            type="octicon"
          />
          <Text style={{fontSize: 11}}>Power</Text>
        </View>
        <View
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginLeft: 5,
            paddingTop: 10,
            paddingBottom: 5,
            paddingLeft: 13,
            paddingRight: 13,
          }}>
          <Icon
            name={
              rowData?.item?.relayChannelStatus == 'ERROR'
                ? 'alert'
                : 'question'
            }
            size={24}
            color={
              rowData?.item?.relayChannelStatus == 'ERROR' ? 'red' : 'black'
            }
            type="octicon"
          />
          <Text style={{fontSize: 11}}>Relay</Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          flex: 2.5,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{}}
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
