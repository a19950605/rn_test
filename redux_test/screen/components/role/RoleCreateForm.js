import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import {TextInput, Button, Menu, Divider, Provider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData() {
  return await AsyncStorage.getItem('@token').then(res => {
    console.log('tokentest');
    console.log(res);
    return res;
  });
}

const createUser = () => {
  var formdata = new FormData();
  let formStatus = 'ACTIVE';
  if (status == 'Active') {
    formStatus = 'ACTIVE';
  } else {
    formStatus = 'DISABLE';
  }
  formdata.append('status', 'formStatus');
  formdata.append('username', 'username');
  formdata.append('displayName', 'displayName');
  formdata.append('password', 'password');
  formdata.append('staffNo', 'staffNo');

  getData().then(res => {
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': res,
      },
      body: formdata,
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        //   console.log(result);
        // return result;
        console.log('create user test');
        console.log(result);
      })
      .catch(error => console.log('error1', error));
  });
};
const RoleCreateForm = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [status, setStatus] = useState('Active');
  const [displayName, setDisplayName] = useState();
  const [code, setCode] = useState();
  const [remarks, setRemarks] = useState();
  const StatusDropDown = ({close, setStatus}) => {
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
            setStatus('Active');
            close(false);
          }}
          title="Active"
        />
        <Menu.Item
          onPress={() => {
            setStatus('Disabled');
            close(false);
          }}
          title="Disabled"
        />
      </View>
    );
  };

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
              name="hash"
              size={24}
              color="black"
              type="feather"
              style={{padding: 10}}
            />

            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Display name"
              value={displayName}
              onChangeText={displayName => setDisplayName(displayName)}
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
              label="Code"
              value={''}
              onChangeText={''}
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
              label="Remarks"
              value={''}
              onChangeText={''}
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
                onChangeText={''}
              />
            </View>
          </Pressable>
          <View style={{zIndex: 999}}>
            {menu2 && <StatusDropDown close={setMenu2} setStatus={setStatus} />}
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default RoleCreateForm;
