import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
} from 'react-native';
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  HelperText,
} from 'react-native-paper';

const MonitoringCreateTab = ({setForm, form, isSubmit}) => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const [controllerId, setControllerId] = useState(); // T002
  const [deviceId, setDeviceId] = useState(); // Eg 1-4
  const [rfl, setRfl] = useState(); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(); //0-3
  const [status, setStatus] = useState(); //active maintenanace
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
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
          <View style={{width: '100%'}}>
            <TextInput
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode ? '95%' : '85%',
                backgroundColor: '#f5f6f7',
              }}
              label="Controller ID"
              value={controllerId}
              onChangeText={controllerId => {
                setControllerId(controllerId);
                setForm({...form, controllerId: controllerId});
              }}
            />
            <HelperText
              type="error"
              visible={controllerId == null && isSubmit}
              style={{marginBottom: -30}}>
              Controller ID is invalid!
            </HelperText>
          </View>
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
          <View style={{width: '100%'}}>
            <TextInput
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode ? '95%' : '85%',
                backgroundColor: '#f5f6f7',
              }}
              label="Device ID"
              value={deviceId}
              onChangeText={deviceId => {
                setDeviceId(parseInt(deviceId));
                setForm({...form, deviceId: deviceId});
              }}
            />
            <HelperText
              type="error"
              visible={deviceId == null && isSubmit}
              style={{marginBottom: -30}}>
              Device ID is missing
            </HelperText>
          </View>
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
          <View style={{width: '100%'}}>
            <TextInput
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode ? '95%' : '85%',
                backgroundColor: '#f5f6f7',
              }}
              label="RFL"
              value={rfl}
              onChangeText={rfl => {
                setRfl(rfl);
                setForm({...form, rfl: rfl});
              }}
            />

            <HelperText
              type="error"
              visible={rfl == null && isSubmit}
              style={{marginBottom: -30}}>
              RFL is missing
            </HelperText>
          </View>
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
              style={{
                width: isLandscapeMode ? '95%' : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
                  setMenu1(false);
                }}
                title="0"
              />
              <Menu.Item
                onPress={() => {
                  setRelayChannelIdx(1);
                  setForm({...form, relayChannelIdx: relayChannelIdx});
                  setMenu1(false);
                }}
                title="1"
              />
              <Menu.Item
                onPress={() => {
                  setRelayChannelIdx(2);
                  setForm({...form, relayChannelIdx: relayChannelIdx});
                  setMenu1(false);
                }}
                title="2"
              />
              <Menu.Item
                onPress={() => {
                  setRelayChannelIdx(3);
                  setForm({...form, relayChannelIdx: relayChannelIdx});
                  setMenu1(false);
                }}
                title="3"
              />
            </View>
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
              name="insert-chart"
              size={24}
              color="gray"
              type="material"
              style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}
            />
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode ? '95%' : '85%',
                backgroundColor: '#f5f6f7',
              }}
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

export default MonitoringCreateTab;
