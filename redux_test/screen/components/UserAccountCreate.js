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

const UserAccountCreate = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [role, setRole] = useState();
  //user name
  //displayname
  //staffid
  //role (dropdown) default text first password, password confirmation remarks
  //status  active disabled

  //role
  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }
  const [status, setStatus] = useState();
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState();
  const [staffNo, setStaffNo] = useState();
  const createUser = () => {
    var formdata = new FormData();
    let formStatus = 'ACTIVE';
    if (status == 'Active') {
      formStatus = 'ACTIVE';
    } else {
      formStatus = 'DISABLE';
    }
    formdata.append('status', formStatus);
    formdata.append('username', username);
    formdata.append('displayName', displayName);
    formdata.append('password', password);
    formdata.append('staffNo', staffNo);

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

  const RoleDropDown = ({close, setRole}) => {
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
            setRole('System Admin(SYSADM)');
            close(false);
          }}
          title="System Admin(SYSADM)"
        />
        <Menu.Item
          onPress={() => {
            setRole('RFL Control (CU)');

            close(false);
          }}
          title="RFL Control (CU)"
        />
        <Menu.Item
          onPress={() => {
            setRole('RFL Assignment (ASU)');

            close(false);
          }}
          title="RFL Assignment (ASU)"
        />
        <Menu.Item
          onPress={() => {
            setRole('Readonly User(RU)');

            close(false);
          }}
          title="Readonly User(RU)"
        />
        <Menu.Item
          onPress={() => {
            setRole('RFL Maintainer (MA)');

            close(false);
          }}
          title="RFL Maintainer (MA)"
        />
      </View>
    );
  };
  //status
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
              name="monitor"
              size={24}
              color="black"
              style={{padding: 10, justifyContent: 'center'}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Username"
              value={username}
              onChangeText={username => setUsername(username)}
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
              name="call-split"
              size={24}
              color="black"
              type="material"
              style={{padding: 10}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Staff ID"
              value={staffNo}
              onChangeText={staffNo => setStaffNo(staffNo)}
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
                label="Role"
                value={role}
                onChangeText={''}
              />
            </Pressable>
          </View>
          <View>
            {menu1 && <RoleDropDown close={setMenu1} setRole={setRole} />}
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
              label="Password"
              value={password}
              onChangeText={password => setPassword(password)}
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
              label="Password Confirmation"
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
                onChangeText={''}
              />
            </View>
          </Pressable>
          <View style={{zIndex: 999}}>
            {menu2 && <StatusDropDown close={setMenu2} setStatus={setStatus} />}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 20,
              zIndex: 1,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'green',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
              }}
              onPress={() => {
                //  alert('hello');
                alert(
                  'msg' + username + displayName + password + status + staffNo,
                );
                createUser();
              }}>
              <Icon
                name="md-save-sharp"
                type="ionicon"
                size={24}
                color="green"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
              <Text style={{color: 'green'}}> Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default UserAccountCreate;
