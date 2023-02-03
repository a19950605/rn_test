import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  HelperText,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useCreateUser} from '../../hooks/apiHook';

const UserAccountCreateScreen = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [role, setRole] = useState();
  const [roleSubmit, setRoleSubmit] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const navigation = useNavigation();
  const [isSubmit, setIsSubmit] = useState(false);
  const [option, setOption] = useState();
  const [status, setStatus] = useState('ACTIVE');
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [rmks, setRmks] = useState();
  const [staffNo, setStaffNo] = useState();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/v2/options/rolesAsOptions`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('get role as option');
        console.log(result);
        setOption(result);
      })
      .catch(error => console.log('error1', error));
  }, []);

  const RoleDropDown = ({close, setRole, data}) => {
    console.log('role dropdown');
    console.log(data);
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
        {data.map(d => {
          return (
            <Menu.Item
              key={d.id}
              onPress={() => {
                setRole(`${d.displayName}(${d.code})`);
                setRoleSubmit(d.id);
                close(false);
              }}
              title={`${d.displayName}(${d.code})`}
            />
          );
        })}
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
            <View style={{width: '100%'}}>
              <TextInput
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
                label="Username"
                value={username}
                onChangeText={username => setUsername(username)}
              />
              <HelperText
                type="error"
                visible={username == null && isSubmit}
                style={{marginBottom: -30}}>
                required
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
              name="user-circle-o"
              size={24}
              color="gray"
              type="font-awesome"
              style={{padding: 10}}
            />
            <View style={{width: '100%'}}>
              <TextInput
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
                label="Display name"
                value={displayName}
                onChangeText={displayName => setDisplayName(displayName)}
              />
              <HelperText
                type="error"
                visible={displayName == null && isSubmit}
                style={{marginBottom: -30}}>
                required
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
              color="gray"
              type="feather"
              style={{padding: 10}}
            />
            <View style={{width: '100%'}}>
              <TextInput
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
                label="Staff ID"
                value={staffNo}
                onChangeText={staffNo => setStaffNo(staffNo)}
              />
              <HelperText
                type="error"
                visible={staffNo == null && isSubmit}
                style={{marginBottom: -30}}>
                required
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
              <View style={{width: '100%'}}>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={{width: '85%', backgroundColor: '#f5f6f7'}}
                  label="Role"
                  value={role}
                  onChangeText={''}
                />
              </View>
              <HelperText
                type="error"
                visible={roleSubmit == null && isSubmit}
                style={{marginBottom: -30}}>
                required
              </HelperText>
            </Pressable>
          </View>
          <View>
            {menu1 && (
              <RoleDropDown close={setMenu1} setRole={setRole} data={option} />
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
              name="vpn-key"
              size={24}
              color="gray"
              type="material"
              style={{padding: 10}}
            />
            <View style={{width: '100%'}}>
              <TextInput
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />
              <HelperText
                type="error"
                visible={password == null && isSubmit}
                style={{marginBottom: -30}}>
                required
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
              name="vpn-key"
              size={24}
              color="gray"
              type="vpn-key"
              style={{padding: 10}}
            />
            <View style={{width: '100%'}}>
              <TextInput
                selectTextOnFocus={false}
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
                label="Password Confirmation"
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={confirmPassword =>
                  setConfirmPassword(confirmPassword)
                }
              />
              <HelperText
                type="error"
                visible={confirmPassword == null && isSubmit}
                style={{marginBottom: -30}}>
                required
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
              name="pencil"
              size={24}
              color="gray"
              type="material-community"
              style={{padding: 10}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{width: '85%', backgroundColor: '#f5f6f7'}}
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
                style={{width: '85%', backgroundColor: '#f5f6f7'}}
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
                setIsSubmit(true);

                if (
                  !status ||
                  !username ||
                  !displayName ||
                  !password ||
                  !staffNo
                ) {
                  alert('fill missing fields ');
                } else if (
                  password != confirmPassword &&
                  password.length >= 8
                ) {
                  alert('password not match');
                } else {
                  let form = {
                    status,
                    username,
                    displayName,
                    password,
                    staffNo,
                    rmks,
                    roleSubmit,
                  };
                  useCreateUser({userToken, form, navigation});
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

export default UserAccountCreateScreen;
