import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Pressable, Text} from 'react-native';
import {TextInput, Button, Menu, Divider, Provider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MonitoringCreateTab = ({setForm, form}) => {
  const [controllerId, setControllerId] = useState(); // T002
  const [deviceId, setDeviceId] = useState(); // Eg 1-4
  const [rfl, setRfl] = useState(); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(); //0-3
  const [status, setStatus] = useState(); //active maintenanace
  const [menu1, setMenu1] = useState(false);
  return (
    <Provider>
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Controller ID"
            value={controllerId}
            onChangeText={controllerId => {
              setControllerId(controllerId);
              setForm({...form, controllerId: controllerId});
            }}
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Device ID"
            value={deviceId}
            onChangeText={deviceId => {
              setDeviceId(deviceId);
              setForm({...form, deviceId: deviceId});
            }}
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
            selectTextOnFocus={false}
            editable={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="RFL"
            value={rfl}
            onChangeText={rfl => {
              setRfl(rfl);
              setForm({...form, rfl: rfl});
            }}
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
          <Pressable
            style={{width: '100%'}}
            onPress={() => {
              setMenu1(!menu1);
            }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Relay Channel Index"
              value={relayChannelIdx}
              onChangeText={relayChannelIdx => {
                setRelayChannelIdx(relayChannelIdx);
                setForm({...form, relayChannelIdx: relayChannelIdx});
              }}
            />
          </Pressable>
        </View>
        <View>{menu1 && <MyComponent close={setMenu1} />}</View>
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
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Status"
            value={status}
            onChangeText={status => {
              setStatus(status);
              setForm({...form, status: status});
            }}
          />
        </View>
      </View>
    </Provider>
  );
};

const MyComponent = ({close}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        backgroundColor: 'green',
        position: 'absolute',
        zIndex: 999,
        width: '86%',
        left: 41,
        top: -20,
      }}>
      <Menu.Item
        leadingIcon="redo"
        onPress={() => {
          close(false);
        }}
        title="Redo"
      />
      <Menu.Item
        leadingIcon="undo"
        onPress={() => {
          close(false);
        }}
        title="Undo"
      />
      <Menu.Item
        leadingIcon="content-cut"
        onPress={() => {
          close(false);
        }}
        title="Cut"
        disabled
      />
      <Menu.Item
        leadingIcon="content-copy"
        onPress={() => {
          close(false);
        }}
        title="Copy"
        disabled
      />
      <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
    </View>
  );
};

export default MonitoringCreateTab;
