import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {Menu, Provider, TextInput} from 'react-native-paper';
import {Pressable} from 'react-native';

const MonitoringDetailTab = ({setForm, form, data}) => {
  console.log('inside monitor tab');
  console.log(data);
  const [controllerId, setControllerId] = useState(); // T002
  const [deviceId, setDeviceId] = useState(); // Eg 1-4
  const [rfl, setRfl] = useState(); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(); //0-3
  const [status, setStatus] = useState(); //active maintenanace
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  useEffect(() => {
    setControllerId(data?.device?.controllerCode || '');
    setDeviceId(JSON.stringify(data?.device?.controllerDeviceId) || '');
    setRfl(data?.device?.code);
    setRelayChannelIdx(JSON.stringify(data?.device?.relayChannel?.channelIdx));
    setStatus(data?.device?.status);
  }, []);

  const StatusDropDown = ({close}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 999,
          width: '86%',
          left: 41,
          top: -10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Menu.Item
          onPress={() => {
            setStatus('ACTIVE');
            setForm({...form, status: status});
            close(false);
          }}
          title="Active"
        />
        <Menu.Item
          onPress={() => {
            setStatus('DISABLED');
            setForm({...form, status: status});
            close(false);
          }}
          title="Maintenance"
        />
      </View>
    );
  };

  const MyComponent = ({
    close,
    relayChannelIdx,
    setRelayChannelIdx,
    setForm,
  }) => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 999,
          width: '86%',
          left: 41,
          top: -10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Menu.Item
          onPress={() => {
            setRelayChannelIdx(0);
            setForm({...form, relayChannelIdx: relayChannelIdx});
            close(false);
          }}
          title="0"
        />
        <Menu.Item
          onPress={() => {
            setRelayChannelIdx(1);
            setForm({...form, relayChannelIdx: relayChannelIdx});
            close(false);
          }}
          title="1"
        />
        <Menu.Item
          onPress={() => {
            setRelayChannelIdx(2);
            setForm({...form, relayChannelIdx: relayChannelIdx});
            close(false);
          }}
          title="2"
        />
        <Menu.Item
          onPress={() => {
            setRelayChannelIdx(3);
            setForm({...form, relayChannelIdx: relayChannelIdx});
            close(false);
          }}
          title="3"
        />
      </View>
    );
  };

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
            editable={true}
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
            editable={true}
            selectTextOnFocus={false}
            style={{width: '85%', backgroundColor: 'transparent'}}
            label="Device ID"
            value={deviceId}
            onChangeText={deviceId => {
              setDeviceId(parseInt(deviceId));
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
            editable={true}
            selectTextOnFocus={false}
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
              setMenu2(false);
            }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Relay Channel Index"
              value={relayChannelIdx?.toString()}
              onChangeText={relayChannelIdx => {
                setRelayChannelIdx(relayChannelIdx);
                setForm({...form, relayChannelIdx: relayChannelIdx});
              }}
            />
          </Pressable>
        </View>
        <View>
          {menu1 && (
            <MyComponent
              close={setMenu1}
              relayChannelIdx={relayChannelIdx}
              setRelayChannelIdx={setRelayChannelIdx}
              setForm={setForm}
              form={form}
            />
          )}
        </View>
        <Pressable
          style={{width: '100%'}}
          onPress={() => {
            setMenu2(!menu2);
            setMenu1(false);
          }}>
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
              value={status}
              onChangeText={status => {
                setStatus(status);
                setForm({...form, status: status});
              }}
            />
          </View>
        </Pressable>

        <View>{menu2 && <StatusDropDown close={setMenu2} />}</View>
      </View>
    </Provider>
  );
};

export default MonitoringDetailTab;
