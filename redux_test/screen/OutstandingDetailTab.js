import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {View} from 'react-native';

const OutstandingDetailTab = props => {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');

  console.log('inside tab');
  console.log(props.route.params);
  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Details"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing', color: 'white'}}
        />
        <Tab.Item
          title="Acknowledgement"
          titleStyle={{fontSize: 12}}
          icon={{name: 'rowing', color: 'white'}}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="Alarm ID"
                value={JSON.stringify(props.route.params.id)}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="Types"
                value={props.route.params.alarmType}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="Controller ID"
                value={JSON.stringify(props.route.params.controllerDeviceId)}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="RFL"
                value={JSON.stringify(props.route.params.controllerDeviceId)}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="Status"
                value={JSON.stringify(props.route.params.status)}
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
                name="heartbeat"
                size={24}
                color="black"
                type="font-awesome"
                style={{padding: 10}}
              />

              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{width: '85%'}}
                label="Triggered Time"
                value={JSON.stringify(props.route.params.dtCreate)}
                onChangeText={text => setText(text)}
              />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

const AcknowledgementTab = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
export default OutstandingDetailTab;
