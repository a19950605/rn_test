import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import {TextInput, Button, Menu, Divider, Provider} from 'react-native-paper';
import {useSelector} from 'react-redux';

const RoleDetailForm = ({setForm, form, data}) => {
  const userToken = useSelector(state => state.login.userToken?.Token);
  //permission,status,code,rmks,displayName
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [status, setStatus] = useState('ACTIVE');
  const [displayName, setDisplayName] = useState();
  const [code, setCode] = useState();
  const [rmks, setRmks] = useState('');

  useEffect(() => {
    setStatus(data?.route?.params?.status);
    setDisplayName(data?.route?.params?.displayName);
    setCode(data?.route?.params?.code);
    setRmks(data?.route?.params?.rmks);
    setForm({
      code: data?.route?.params?.code,
      displayName: data?.route?.params?.displayName,
      rmks: data?.route?.params?.rmks,
      status: data?.route?.params?.status,
    });
  }, []);
  return (
    <Provider>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <Icon
              name="user-circle"
              size={24}
              color="gray"
              type="font-awesome"
              style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}
            />

            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Display name"
              value={displayName}
              onChangeText={displayName => {
                setDisplayName(displayName);
                setForm({...form, displayName: displayName});
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
              name="flag"
              size={24}
              color="gray"
              type="material"
              style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Code"
              value={code}
              onChangeText={code => {
                setCode(code);

                setForm({...form, code: code});
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
              name="pencil"
              size={24}
              color="gray"
              type="material-community"
              style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Remarks"
              value={rmks}
              onChangeText={rmks => {
                setRmks(rmks);
                setForm({...form, rmks: rmks});
              }}
            />
          </View>
          <Pressable
            onPress={() => {
              setMenu2(!menu2);
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
                style={{width: '85%', backgroundColor: 'transparent'}}
                label="Status"
                value={status}
                onChangeText={status => setStatus(status)}
              />
            </View>
          </Pressable>
          <View style={{zIndex: 999}}>
            {menu2 && (
              <View
                style={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  zIndex: 999,
                  width: '86%',
                  left: 41,
                  bottom: -40,
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
                    setMenu2(false);
                  }}
                  title="Active"
                />
                <Menu.Item
                  onPress={() => {
                    setStatus('DISABLED');
                    setForm({...form, status: status});
                    setMenu2(false);
                  }}
                  title="Disabled"
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default RoleDetailForm;
