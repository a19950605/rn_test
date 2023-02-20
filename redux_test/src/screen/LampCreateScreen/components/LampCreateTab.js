import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {View, Pressable, useWindowDimensions, Keyboard} from 'react-native';
import {TextInput, Menu, Provider} from 'react-native-paper';
import {TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../../constants/styles';
import {FormValidationError} from '../../../components/formValidationError';
import {DropDown} from '../../../components/StatusDropDown';

const LampCreateTab = ({
  setForm,
  form,
  isSubmit,
  t,
  controllerList,
  controllerIdError,
  deviceIdError,
  rflError,
  relayChannelIdxError,
}) => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const [controllerId, setControllerId] = useState(''); // T002
  const [deviceId, setDeviceId] = useState(''); // Eg 1-4
  const [rfl, setRfl] = useState(''); // TE/ST/123
  const [relayChannelIdx, setRelayChannelIdx] = useState(''); //0-3
  const [status, setStatus] = useState('ACTIVE'); //active maintenanace
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  console.log('hello create tab');
  console.log(controllerList);
  return (
    <Provider>
      <TouchableWithoutFeedback
        onPress={() => {
          setMenu1(false);
          setMenu2(false);
          setMenu3(false);
          setMenu4(false);
        }}>
        <View style={styles.lampCreateContainer}>
          <View style={styles.inputRow}>
            <Icon
              name="monitor"
              size={24}
              color="black"
              style={styles.rowIcon}
            />
            <Pressable
              style={styles.width100}
              onPress={() => {
                setMenu2(false);
                setMenu1(false);
                setMenu3(!menu3);
                setMenu4(false);
                Keyboard.dismiss();
              }}>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={
                  isLandscapeMode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label={t('lamp.controllerId')}
                value={controllerId}
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                onChangeText={controllerId => {
                  setControllerId(controllerId);
                  setForm({...form, controllerId: controllerId});
                }}
              />
            </Pressable>
          </View>
          <View>
            {menu3 && (
              <View style={styles.dropDownContainer}>
                {controllerList.map(c => {
                  return (
                    <Menu.Item
                      key={c.controllerCode}
                      onPress={() => {
                        setControllerId(c.controllerCode);
                        setForm({...form, controllerId: c.controllerCode});
                        setMenu3(false);
                      }}
                      title={c.controllerCode}
                    />
                  );
                })}
              </View>
            )}
          </View>
          <View>
            <FormValidationError
              value={controllerIdError}
              isSubmit={isSubmit}
            />
          </View>

          <View style={styles.inputRow}>
            <Icon
              name="hash"
              size={24}
              color="black"
              type="feather"
              style={styles.p10}
            />
            <Pressable
              style={styles.width100}
              onPress={() => {
                setMenu2(false);
                setMenu1(false);
                setMenu3(false);
                setMenu4(!menu4);
                Keyboard.dismiss();
              }}>
              <TextInput
                editable={false}
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                selectTextOnFocus={false}
                style={
                  isLandscapeMode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label={t('lamp.deviceId')}
                value={deviceId?.toString()}
                onChangeText={deviceId => {
                  setDeviceId(parseInt(deviceId));
                  setForm({...form, deviceId: deviceId});
                }}
              />
            </Pressable>
          </View>
          <View>
            <FormValidationError value={deviceIdError} isSubmit={isSubmit} />
          </View>
          <View>
            {menu4 && (
              <View style={styles.dropDownContainer}>
                <Menu.Item
                  onPress={() => {
                    setDeviceId(parseInt(1));
                    setForm({...form, deviceId: parseInt(1)});
                    setMenu4(false);
                  }}
                  title="1"
                />
                <Menu.Item
                  onPress={() => {
                    setDeviceId(2);
                    setForm({...form, deviceId: parseInt(2)});
                    setMenu4(false);
                  }}
                  title="2"
                />
                <Menu.Item
                  onPress={() => {
                    setDeviceId(3);
                    setForm({...form, deviceId: parseInt(3)});
                    setMenu1(false);
                  }}
                  title="3"
                />
                <Menu.Item
                  onPress={() => {
                    setDeviceId(4);
                    setForm({...form, deviceId: parseInt(4)});
                    setMenu4(false);
                  }}
                  title="4"
                />
              </View>
            )}
          </View>
          <View style={styles.inputRow}>
            <Icon
              name="location-pin"
              size={24}
              color="black"
              type="material"
              style={styles.p10}
            />
            <View style={styles.width100}>
              <TextInput
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                selectTextOnFocus={false}
                style={
                  isLandscapeMode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label={t('lamp.rfl')}
                value={rfl}
                onChangeText={rfl => {
                  setRfl(rfl);
                  setForm({...form, rfl: rfl});
                }}
              />
            </View>
          </View>
          <View>
            <FormValidationError
              value={rflError}
              isSubmit={isSubmit}
              message={'RFL is missing'}
            />
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
                setMenu3(false);
                setMenu4(false);
                Keyboard.dismiss();
              }}>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={
                  isLandscapeMode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label={t('lamp.relaychannelIdx')}
                value={relayChannelIdx?.toString()}
                onChangeText={relayChannelIdx => {
                  setRelayChannelIdx(relayChannelIdx);
                  setForm({...form, relayChannelIdx: relayChannelIdx});
                }}
              />

              <View style={{position: 'absolute', left: '78%', top: '30%'}}>
                <Icon
                  name="angle-down"
                  size={24}
                  color="black"
                  type="font-awesome"
                />
              </View>
            </Pressable>
          </View>
          <FormValidationError
            value={relayChannelIdxError}
            isSubmit={isSubmit}
          />
          <View>
            {menu1 && (
              <DropDown
                close={setMenu1}
                setForm={setForm}
                form={form}
                setDisplay={setRelayChannelIdx}
                keyVal={'relayChannelIdx'}
                options={[
                  {displayName: '0', formVal: 0},
                  {displayName: '1', formVal: 1},
                  {displayName: '2', formVal: 2},
                  {displayName: '3', formVal: 3},
                ]}
              />
            )}
          </View>
          <Pressable
            style={styles.width100}
            onPress={() => {
              setMenu2(!menu2);
              setMenu1(false);
              setMenu3(false);
              setMenu4(false);
              Keyboard.dismiss();
            }}>
            <View style={styles.inputRow}>
              <Icon
                name="insert-chart"
                size={24}
                color="gray"
                type="material"
                style={styles.createIconPadd}
              />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={
                  isLandscapeMode
                    ? styles.textInputTablet
                    : styles.textInputMobile
                }
                label={t('lamp.status')}
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
                ]}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

export default LampCreateTab;
