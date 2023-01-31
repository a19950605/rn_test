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
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useCreateUserMutation} from '../../features/api/userApiSlice';

const UserAccountCreate = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [role, setRole] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const navigation = useNavigation();

  const [status, setStatus] = useState('ACTIVE');
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [createUser, response] = useCreateUserMutation();
  const [rmks, setRmks] = useState();
  const [staffNo, setStaffNo] = useState();
  const RoleDropDown = ({close, setRole}) => {
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
            setStatus('ACTIVE');
            close(false);
          }}
          title="ACTIVE"
        />
        <Menu.Item
          onPress={() => {
            setStatus('DISABLE');
            close(false);
          }}
          title="Disabled"
        />
      </View>
    );
  };

  var formdata = new FormData();
  formdata.append('status', status || '');
  formdata.append('username', username || '');
  formdata.append('displayName', displayName || '');
  formdata.append('password', password || '');
  formdata.append('staffNo', staffNo || '');
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
              style={{
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: 'center',
              }}
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
              name="user-circle-o"
              size={24}
              color="gray"
              type="font-awesome"
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
              name="hash"
              size={24}
              color="gray"
              type="feather"
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
              name="shield-account-variant"
              size={24}
              color="gray"
              type="material-community"
              style={{padding: 10}}
            />
            <Pressable
              style={{width: '100%'}}
              onPress={() => {
                setMenu1(!menu1);
                setMenu2(false);
              }}>
              <View>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={{width: '85%', backgroundColor: 'transparent'}}
                  label="Role"
                  value={role}
                  onChangeText={''}
                />
              </View>
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
              name="vpn-key"
              size={24}
              color="gray"
              type="material"
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
              name="vpn-key"
              size={24}
              color="gray"
              type="vpn-key"
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
              name="pencil"
              size={24}
              color="gray"
              type="material-community"
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
                name="settings"
                size={24}
                color="gray"
                type="material"
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
                if (
                  !status ||
                  !username ||
                  !displayName ||
                  !password ||
                  !staffNo
                ) {
                  alert('pless fill all fields ');
                } else if (
                  password != confirmPassword &&
                  password.length >= 8
                ) {
                  alert('password not match');
                } else {
                  createNewUser(
                    userToken,
                    {
                      status,
                      username,
                      displayName,
                      password,
                      staffNo,
                      rmks,
                    },
                    navigation,
                  );
                  // createUser({userToken, formdata})
                  //   .unwrap()
                  //   .then(() => {
                  //     alert('error message1');
                  //   })
                  //   .then(error => {
                  //     alert('error message');
                  //     console.log(error);
                  //   });
                }
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

const createNewUser = (token, form, navigation) => {
  var formdata = new FormData();
  formdata.append('status', form?.status || '');
  formdata.append('username', form?.username || '');
  formdata.append('displayName', form?.displayName || '');
  formdata.append('password', form?.password || '');
  formdata.append('staffNo', form?.staffNo || '');
  formdata.append('rmks', form?.rmks || '');

  // createUser({token, formdata})
  //   .unwrap()
  //   .then(() => {})
  //   .then(error => {
  //     console.log(error);
  //   });
  var requestOptions = {
    method: 'POST',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };
  fetch('https://gis2.ectrak.com.hk:8900/api/system/user', requestOptions)
    .then(response => {
      if (response.status == 200) {
        alert('create success');
        navigation.navigate('UserAccount');
      } else {
        alert('create fail');
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
      // return result;
    })
    .catch(error => console.log('error1', error));
};

export default UserAccountCreate;
