import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import StatusTab from './components/monitoring/StatusTab';
import Assignment from './Assignment';
import AssignmentDetail from './components/monitoring/AssignmentDetail';
import LastControlDetail from './components/monitoring/LastControlDetail';
import HistoryTab from './components/monitoring/HistoryTab';
import Alarm from './components/monitoring/Alarm';
import MonitoringDetailTab from './components/monitoring/MonitoringDetailTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MonitoringTab = () => {
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
      fetch(`https://gis2.ectrak.com.hk:8900/api/v2/device/1`, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;
          //   setData(result);
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
          icon={{name: 'rowing'}}
        />
        <Tab.Item
          title="Assignment"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
        <Tab.Item
          title="Last Control"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
        <Tab.Item
          title="Location"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
        <Tab.Item
          title="History"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
        <Tab.Item
          title="Alarm"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing'}}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <MonitoringDetailTab data={data} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <StatusTab />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <AssignmentDetail />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <LastControlDetail data={data} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Location</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <HistoryTab deviceID={1} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Alarm />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default MonitoringTab;
