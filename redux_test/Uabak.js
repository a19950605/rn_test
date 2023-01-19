import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {TextInput, Button, Menu, Divider, Provider} from 'react-native-paper';

const Uabak = ({userData}) => {
  //user name
  //displayname
  //staffid
  //role (dropdown) default text first password, password confirmation remarks
  //status  active disabled
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
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: 'transparent'}}
              label="Role"
              value={role}
              onChangeText={role => setRole(role)}
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
              onChangeText={status => setStatus(status)}
            />
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
