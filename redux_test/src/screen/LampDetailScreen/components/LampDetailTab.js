import React, {useEffect, useState} from 'react';
import {Text} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button, TouchableWithoutFeedback} from 'react-native';
import {Menu, Provider, TextInput, HelperText} from 'react-native-paper';
import {Pressable} from 'react-native';
import {styles} from '../../../constants/styles';
import {DropDown} from '../../../components/StatusDropDown';
const LampDetailTab = ({setForm, form, data, islandscapemode, isSubmit}) => {
  console.log('inside monitor tab');
  console.log(data);
  console.log('tab controller tab');
  console.log(data?.controllerCode);
  const [controllerId, setControllerId] = useState(''); // T002
  const [deviceId, setDeviceId] = useState(''); // Eg 1-4
  const [rfl, setRfl] = useState(''); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(''); //0-3
  const [status, setStatus] = useState(''); //active maintenanace
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setControllerId(data?.controllerCode || '');
    setDeviceId(JSON.stringify(data?.controllerDeviceId) || '');
    setRfl(data?.code);
    setRelayChannelIdx(JSON.stringify(data?.relayChannel?.channelIdx));
    setStatus(data?.status);
    setLoading(false);
  }, []);

  const StatusDropDown = ({close}) => {
    return (
      <View style={styles.dropDownContainer}>
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
      <TouchableWithoutFeedback
        onPress={() => {
          setMenu1(false);
          setMenu2(false);
        }}>
        {loading ? (
          <View style={styles.p10}>
            <Text>loading</Text>
          </View>
        ) : (
          <View style={styles.lampCreateContainer}>
            <View style={styles.inputRow}>
              <Icon
                name="monitor"
                size={24}
                color="black"
                style={styles.rowIcon}
              />
              <TextInput
                editable={true}
                selectTextOnFocus={false}
                style={
                  islandscapemode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                label="Controller ID"
                value={controllerId}
                onChangeText={controllerId => {
                  setControllerId(controllerId);
                  setForm({...form, controllerId: controllerId});
                }}
              />
            </View>
            <View>
              <HelperText
                type="error"
                visible={controllerId == '' && isSubmit}
                style={{
                  marginTop: controllerId == '' && isSubmit ? -15 : -30,
                  marginLeft: 30,
                }}>
                Controller ID is invalid!
              </HelperText>
            </View>
            <View style={styles.inputRow}>
              <Icon
                name="hash"
                size={24}
                color="black"
                type="feather"
                style={styles.p10}
              />
              <TextInput
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                editable={true}
                selectTextOnFocus={false}
                style={
                  islandscapemode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label="Device ID"
                value={deviceId}
                onChangeText={deviceId => {
                  setDeviceId(parseInt(deviceId));
                  setForm({...form, deviceId: deviceId});
                }}
              />
            </View>
            <View>
              <HelperText
                type="error"
                visible={deviceId == '' && isSubmit}
                style={
                  deviceId == '' && isSubmit
                    ? styles.errorTxtShow
                    : styles.errorTxtHide
                }>
                Device ID is missing
              </HelperText>
            </View>
            <View style={styles.inputRow}>
              <Icon
                name="location-pin"
                size={24}
                color="black"
                type="material"
                style={styles.p10}
              />
              <TextInput
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                editable={true}
                selectTextOnFocus={false}
                style={
                  islandscapemode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label="RFL"
                value={rfl}
                onChangeText={rfl => {
                  setRfl(rfl);
                  setForm({...form, rfl: rfl});
                }}
              />
            </View>
            <View>
              <HelperText
                type="error"
                visible={rfl == '' && isSubmit}
                style={
                  rfl == '' && isSubmit
                    ? styles.errorTxtShow
                    : styles.errorTxtHide
                }>
                RFL is missing
              </HelperText>
            </View>
            <View style={styles.inputRow}>
              <Icon
                name="call-split"
                size={24}
                color="black"
                type="material"
                style={styles.p10}
              />
              <Pressable
                style={styles.width100}
                onPress={() => {
                  setMenu1(!menu1);
                  setMenu2(false);
                }}>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={
                    islandscapemode
                      ? styles.textInputTablet
                      : styles.textInputMobile
                  }
                  label="Relay Channel Index"
                  value={relayChannelIdx?.toString()}
                  onChangeText={relayChannelIdx => {
                    setRelayChannelIdx(relayChannelIdx);
                    setForm({...form, relayChannelIdx: relayChannelIdx});
                  }}
                />
                <View style={styles.inputArrowIconV2}>
                  <Icon
                    name="angle-down"
                    size={24}
                    color="black"
                    type="font-awesome"
                  />
                </View>
              </Pressable>
            </View>
            <HelperText
              type="error"
              visible={
                relayChannelIdx == '' && relayChannelIdx != 0 && isSubmit
              }
              style={
                relayChannelIdx == '' && isSubmit
                  ? styles.errorTxtShow
                  : styles.errorTxtHide
              }>
              relayChannel Index is missing
            </HelperText>
            <View>
              {menu1 && (
                <View style={styles.dropDownContainer}>
                  <Menu.Item
                    onPress={() => {
                      setRelayChannelIdx(0);
                      setForm({...form, relayChannelIdx: 0});
                      setMenu1(false);
                    }}
                    title="0"
                  />
                  <Menu.Item
                    onPress={() => {
                      setRelayChannelIdx(1);
                      setForm({...form, relayChannelIdx: 1});
                      setMenu1(false);
                    }}
                    title="1"
                  />
                  <Menu.Item
                    onPress={() => {
                      setRelayChannelIdx(2);
                      setForm({...form, relayChannelIdx: 2});
                      setMenu1(false);
                    }}
                    title="2"
                  />
                  <Menu.Item
                    onPress={() => {
                      setRelayChannelIdx(3);
                      setForm({...form, relayChannelIdx: 3});
                      setMenu1(false);
                    }}
                    title="3"
                  />
                </View>
              )}
            </View>
            <Pressable
              style={styles.width100}
              onPress={() => {
                setMenu2(!menu2);
                setMenu1(false);
              }}>
              <View style={styles.inputRow}>
                <Icon
                  name="play"
                  size={24}
                  color="black"
                  type="fontisto"
                  style={styles.p10}
                />
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={
                    islandscapemode
                      ? styles.textInputTablet
                      : styles.textInputMobile
                  }
                  label="Status"
                  value={status}
                  onChangeText={status => {
                    setStatus(status);
                    setForm({...form, status: status});
                  }}
                />
                <View style={styles.inputArrowIcon}>
                  <Icon
                    name="angle-down"
                    size={24}
                    color="black"
                    type="font-awesome"
                  />
                </View>
              </View>
            </Pressable>

            <View>
              {menu2 && (
                <DropDown
                  close={setMenu2}
                  setForm={setForm}
                  form={form}
                  setDisplay={setStatus}
                  keyVal={'status'}
                  options={[
                    {displayName: 'Active', formVal: 'ACTiVE'},
                    {displayName: 'Maintenance', formVal: 'DISABLED'},
                    {displayName: 'Isolated', formVal: 'ISOLATED'},
                  ]}
                />
              )}
            </View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </Provider>
  );
};

export default LampDetailTab;
