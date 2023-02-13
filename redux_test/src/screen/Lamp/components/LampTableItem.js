import {Icon} from '@rneui/themed';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';
import {convertDate} from '../../../utils/getDate';

const LampTableItem = rowData => {
  console.log('current in table row');
  console.log(rowData);
  return (
    <DataTable.Row style={{paddingHorizontal: 0}}>
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
        {convertDate(rowData?.item?.dtKeepalive) || '-'}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 2, justifyContent: 'center'}}>
        {rowData?.item?.status}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 4, justifyContent: 'center', marginTop: 5}}>
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
            paddingBottom: 0,
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
          flex: 1.25,
          justifyContent: 'center',
          backgroundColor: '#e6f9fa',
          borderColor: 'lightgray',
          borderWidth: 0.3,
          borderRadius: 0,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            rowData.navigation.navigate('MonitoringDetail', rowData?.item);
          }}>
          <Text style={{color: 'blue'}}>Details</Text>
        </TouchableOpacity>
      </DataTable.Cell>

      <DataTable.Cell
        style={{
          flex: 1.25,
          justifyContent: 'center',
          borderColor: 'lightgray',
          borderWidth: 0.3,
          borderRadius: 0,
          backgroundColor: '#e6f9fa',
        }}>
        <TouchableOpacity>
          <Text style={{color: 'blue'}}>Control</Text>
        </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default LampTableItem;
