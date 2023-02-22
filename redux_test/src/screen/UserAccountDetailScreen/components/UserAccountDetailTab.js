import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Alert,
  useWindowDimensions,
} from 'react-native';
import {TextInput, Menu, Provider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../constants/styles';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {permissionCheck} from '../../../utils/permissionCheck';

const UserAccountDetailTab = ({userData}) => {
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
  const [roleSubmit, setRoleSubmit] = useState();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [rmks, setRmks] = useState();
  const [status, setStatus] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const {userFunc} = useSelector(state => state.roleUserFunc);

  const navigation = useNavigation();
  const [option, setOption] = useState();
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  console.log('user data');
  console.log(userData?.roles);
  // userData?.displayName;
  // userData?.username;
  // userData?.staffNo;
  // userData?.rmks;
  // userData?.status;
  //userData?.roles
  // console.log(userData);

  useEffect(() => {
    setUsername(userData?.username);
    setDisplayName(userData?.displayName);
    setStaffNo(userData?.staffNo);
    setRmks(userData?.rmks);
    setStatus(userData?.status);
    setRole(
      userData?.roles[0]?.displayName + '(' + userData?.roles[0]?.code + ')',
    );
  }, []);
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
      `${appContextPaths[appDefDomain]}${EndPoint.opRoles}`,

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
  const deleteConfirm = token => {
    return Alert.alert(
      'Delete',
      'Are you sure you want to remove this record?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            deleteRecord(token);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );
  };
  const deleteRecord = token => {
    var requestOptions = {
      method: 'DELETE',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
    };
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.user}/${userData?.id}`,
      requestOptions,
    )
      .then(response => {
        if (response.status == 200) {
          alert('delete success');
          navigation.navigate('UserAccount');
        } else {
          alert('delete fail: ' + response.status);
        }

        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('submit result');
        // console.log(result);

        //  if (responseCode == 200) {
        //    alert('delete success' + result?.id);
        //  navigation.navigate('RoleManagement');
        //  } else {
        //   alert('delete fail: ' + responseCode + '\n' + result?.errorMsg);
        //  }
      })
      .catch(error => console.log('error1Z', error));
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
              editable={false}
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
              editable={false}
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{
                  width: isLandscapeMode
                    ? '95%'
                    : isLandscapeMode
                    ? '95%'
                    : '85%',
                  backgroundColor: '#f5f6f7',
                }}
                label="Role"
                value={role}
                onChangeText={role => setRole(role)}
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
            <TextInput
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
              type="material"
              style={{padding: 10}}
            />
            <TextInput
              selectTextOnFocus={false}
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
              style={{
                width: isLandscapeMode
                  ? '95%'
                  : isLandscapeMode
                  ? '95%'
                  : '85%',
                backgroundColor: '#f5f6f7',
              }}
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
                style={{
                  width: isLandscapeMode
                    ? '95%'
                    : isLandscapeMode
                    ? '95%'
                    : '85%',
                  backgroundColor: '#f5f6f7',
                }}
                label="Status"
                value={status}
                onChangeText={status => setStatus(status)}
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
          <View style={styles.saveDeleteButtonGroup}>
            {permissionCheck({permissionCode: 'SYSUSR_D', userFunc}) && (
              <TouchableOpacity
                style={styles.deleteBtnContainer}
                onPress={() => {
                  deleteConfirm(userToken);
                }}>
                <Icon
                  name="md-save-sharp"
                  type="ionicon"
                  size={24}
                  color="red"
                  style={styles.btnIconPadding}
                />
                <Text style={styles.delBtnTitle}> Delete</Text>
              </TouchableOpacity>
            )}
            {permissionCheck({permissionCode: 'SYSUSR_U', userFunc}) && (
              <TouchableOpacity
                style={styles.saveBtnContainer}
                //
                onPress={() => {
                  updateUser(
                    userToken,
                    {
                      status,
                      username,
                      displayName,
                      role,
                      password,
                      staffNo,
                      rmks,
                      roleSubmit,
                    },
                    navigation,
                    userData?.id,
                  );
                  //updateUser = (token, form, navigation, id)
                }}>
                <Icon
                  name="md-save-sharp"
                  type="ionicon"
                  size={24}
                  color="green"
                  style={styles.btnIconPadding}
                />
                <Text style={{color: 'green'}}> Save</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Provider>
  );
};
const updateUser = (token, form, navigation, id) => {
  var formdata = new FormData();
  formdata.append('teamId', 1);
  //code displayname rmks

  formdata.append('status', form?.status || 'ACTIVE');
  formdata.append('username', form?.username);
  formdata.append('rmks', form?.rmks);
  formdata.append('displayName', form?.displayName);
  formdata.append('password', form?.password);
  formdata.append('staffNo', form?.staffNo);
  formdata.append('roleIds', [form?.roleSubmit]);
  console.log('update');
  console.log(form?.role);
  var requestOptions = {
    method: 'PUT',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };

  fetch(`${appContextPaths[appDefDomain]}${EndPoint.user}` + id, requestOptions)
    .then(response => {
      if (response.status == 200) {
        alert('update success');
        navigation.navigate('UserAccount');
      } else {
        alert('update fail');
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
      // return result;
    })
    .catch(error => console.log('error1', error));
};

export default UserAccountDetailTab;
