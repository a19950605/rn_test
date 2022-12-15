import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import StatusTab from './components/monitoring/StatusTab';

const MonitoringTab = () => {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
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
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Icon
                name="monitor"
                size={24}
                color="black"
                style={{padding: 10, justifyContent: 'center'}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="Controller ID"
                value=""
                onChangeText={text => setText(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Icon
                name="hash"
                size={24}
                color="black"
                type="feather"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="Device ID"
                value=""
                onChangeText={text => setText(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Icon
                name="location-pin"
                size={24}
                color="black"
                type="material"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="RFL"
                value=""
                onChangeText={text => setText(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Icon
                name="call-split"
                size={24}
                color="black"
                type="material"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="Relay Channel Index"
                value=""
                onChangeText={text => setText(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Icon
                name="play"
                size={24}
                color="black"
                type="fontisto"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="Status"
                value=""
                onChangeText={text => setText(text)}
              />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <StatusTab />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Assignment</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Last Control</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Location</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>History</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default MonitoringTab;
