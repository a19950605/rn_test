import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import StatusTab from './components/monitoring/StatusTab';
import AssignmentDetail from './components/monitoring/AssignmentDetail';
import LastControlDetail from './components/monitoring/LastControlDetail';
import HistoryTab from './components/monitoring/HistoryTab';
import Alarm from './components/monitoring/Alarm';
import MonitoringDetailTab from './components/monitoring/MonitoringDetailTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageDetailMon from './components/monitoring/ImageDetailMon';

const MonitoringTab = props => {
  console.log('monitoring tab1');
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        setToken(res);
        return res;
      });
    }
    getData().then(token => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': token,
        },
      };
      //hardcode the id at this moment
      fetch(
        `https://gis2.ectrak.com.hk:8900/api/v2/device/${props.route.params.id}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;
          //   setData(result);
          console.log('device tst121');
          console.log(result);
          setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  }, []);

  return (
    <>
      <Tab
        value={index}
        scrollable={true}
        onChange={e => setIndex(e)}
        containerStyle={{
          backgroundColor: 'white',
          color: 'black',
        }}
        indicatorStyle={{
          backgroundColor: 'red',
          height: 3,
        }}
        variant="default">
        <Tab.Item
          title="Details"
          titleStyle={{fontSize: 12}}
          icon={{name: 'clipboard-text', type: 'material-community'}}
        />
        <Tab.Item
          title="Status"
          titleStyle={{fontSize: 12}}
          icon={{name: 'insert-chart', type: 'material'}}
        />
        <Tab.Item
          title="Assignment"
          titleStyle={{fontSize: 12}}
          icon={{name: 'clipboard-text', type: 'material-community'}}
        />
        <Tab.Item
          title="Last Control"
          titleStyle={{fontSize: 12}}
          icon={{name: 'toggle-switch-off', type: 'material-community'}}
        />
        <Tab.Item
          title="Location"
          titleStyle={{fontSize: 12}}
          icon={{name: 'map', type: 'material'}}
        />
        <Tab.Item
          title="History"
          titleStyle={{fontSize: 12}}
          icon={{name: 'history'}}
        />
        <Tab.Item
          title="Alarm"
          titleStyle={{fontSize: 12}}
          icon={{name: 'alert', type: 'material-community'}}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <MonitoringDetailTab data={data} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <StatusTab data={data} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <AssignmentDetail />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <LastControlDetail data={data} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <ImageDetailMon />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <HistoryTab deviceID={1} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Alarm />
        </TabView.Item>
      </TabView>

      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginRight: 5,
          }}
          onPress={() => {
            alert('hello' + JSON.stringify(form));
            createNewRecord();
          }}>
          <Icon
            name="md-save-sharp"
            type="ionicon"
            size={24}
            color="red"
            style={{justifyContent: 'center', paddingRight: 5}}
          />
          <Text style={{color: 'red'}}> Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => {
            alert('hello' + JSON.stringify(form));
            createNewRecord();
          }}>
          <Icon
            name="md-save-sharp"
            type="ionicon"
            size={24}
            color="green"
            style={{justifyContent: 'center', paddingRight: 5}}
          />
          <Text style={{color: 'green'}}> Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MonitoringTab;
