import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useWindowDimensions, View} from 'react-native';

const OutstandingDetailScreen = props => {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');

  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  console.log('inside tab');
  console.log(props.route.params);
  return (
    <>
      <Tab
        value={index}
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
          titleStyle={active => ({
            color: active ? '#7a2210' : 'black',
            fontSize: 12,
          })}
          icon={active => ({
            name: 'clipboard-text',
            color: 'black',
            type: 'material-community',
            color: active ? '#7a2210' : 'black',
          })}
        />
        <Tab.Item
          title="Acknowledgement"
          titleStyle={active => ({
            color: active ? '#7a2210' : 'black',
            fontSize: 12,
          })}
          icon={active => ({
            name: 'pencil',
            color: 'black',
            type: 'material-community',
            color: active ? '#7a2210' : 'black',
          })}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
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
                style={{width: isLandscapeMode ? '95%' : '85%'}}
                label="Triggered Time"
                value={JSON.stringify(props.route.params.dtCreate)}
                onChangeText={text => setText(text)}
              />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <AcknowledgementTab />
        </TabView.Item>
      </TabView>
    </>
  );
};

const AcknowledgementTab = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="alarm"
          size={26}
          color="red"
          type="material-community"
          style={{padding: 10}}
        />
        <View
          style={{
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            width: isLandscapeMode ? '95%' : '85%',
            backgroundColor: '#faf9f7',
          }}>
          <Text style={{fontWeight: 'bold'}}>
            Occurred@ 2023-01-02 22:48:50
          </Text>
          <Text>Type: Connection Lost</Text>
          <Text>RFL: HEHE/99</Text>
        </View>
      </View>
    </View>
  );
};
export default OutstandingDetailScreen;
