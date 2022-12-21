import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const MonitoringCreateTab = ({setForm, form}) => {
  const [controllerId, setControllerId] = useState(); // T002
  const [deviceId, setDeviceId] = useState(); // Eg 1-4
  const [rfl, setRfl] = useState(); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(); //0-3
  const [status, setStatus] = useState(); //active maintenanace
  return (
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
        <TextInput
          selectTextOnFocus={false}
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="Relay Channel Index"
          value={relayChannelIdx}
          onChangeText={relayChannelIdx => {
            setRelayChannelIdx(relayChannelIdx);
            setForm({...form, relayChannelIdx: relayChannelIdx});
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
  );
};

export default MonitoringCreateTab;
