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

const Uabak = ({userData}) => {
  //user name
  //displayname
  //staffid
  //role (dropdown) default text first password, password confirmation remarks
  //status  active disabled
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();
  const [staffNo, setStaffNo] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [rmks, setRmks] = useState();
  const [status, setStatus] = useState();
  console.log('user data');
  console.log(userData?.detail?.roles);
  // userData?.detail?.displayName;
  // userData?.detail?.username;
  // userData?.detail?.staffNo;
  // userData?.detail?.rmks;
  // userData?.detail?.status;
  //userData?.detail?.roles
  // console.log(userData);

  useEffect(() => {
    setUsername(userData?.detail?.username);
    setDisplayName(userData?.detail?.displayName);
    setStaffNo(userData?.detail?.staffNo);
    setRmks(userData?.detail?.rmks);
    setStatus(userData?.detail?.status);
    setRole(
      userData?.detail?.roles[0]?.displayName +
        '(' +
        userData?.detail?.roles[0]?.code +
        ')',
    );
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
              name="monitor"
              size={24}
              color="black"
              style={{padding: 10, justifyContent: 'center'}}
            />
            <TextInput
              editable={false}
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
              editable={false}
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
                onChangeText={role => setRole(role)}
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
                    setRole('System Admin(SYSADM)');
                    setMenu1(false);
                  }}
                  title="System Admin(SYSADM)"
                />
                <Menu.Item
                  onPress={() => {
                    setRole('RFL Control (CU)');

                    setMenu1(false);
                  }}
                  title="RFL Control (CU)"
                />
                <Menu.Item
                  onPress={() => {
                    setRole('RFL Assignment (ASU)');

                    setMenu1(false);
                  }}
                  title="RFL Assignment (ASU)"
                />
                <Menu.Item
                  onPress={() => {
                    setRole('Readonly User(RU)');

                    setMenu1(false);
                  }}
                  title="Readonly User(RU)"
                />
                <Menu.Item
                  onPress={() => {
                    setRole('RFL Maintainer (MA)');

                    setMenu1(false);
                  }}
                  title="RFL Maintainer (MA)"
                />
              </View>
            )}
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
              value={confirmPassword}
              onChangeText={confirmPassword =>
                setConfirmPassword(confirmPassword)
              }
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
              value={rmks}
              onChangeText={rmks => setRmks(rmks)}
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
                onChangeText={status => setStatus(status)}
              />
            </View>
          </Pressable>

          <View>
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
                    setMenu2(false);
                  }}
                  title="ACTIVE"
                />
                <Menu.Item
                  onPress={() => {
                    setStatus('DISABLE');
                    setMenu2(false);
                  }}
                  title="Disabled"
                />
              </View>
            )}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 5,
              }}
              onPress={() => {
                alert('123');
              }}>
              <Icon
                name="md-save-sharp"
                type="ionicon"
                size={24}
                color="red"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
              <Text style={{color: 'red'}}> Delete</Text>
            </TouchableOpacity>
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
                alert('request body');
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

export default Uabak;
