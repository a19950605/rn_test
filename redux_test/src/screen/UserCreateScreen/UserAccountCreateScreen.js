import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  KeyboardAvoidingView,
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
import {useCreateUser} from '../../hooks/ApiHook';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';
import {styles} from '../../constants/styles';
import {FormValidationError} from '../../components/formValidationError';

const UserAccountCreateScreen = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [role, setRole] = useState();
  const [roleSubmit, setRoleSubmit] = useState('');
  const userToken = useSelector(state => state.login.userToken?.Token);
  const navigation = useNavigation();
  const [isSubmit, setIsSubmit] = useState(false);
  const [option, setOption] = useState();
  const [status, setStatus] = useState('ACTIVE');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rmks, setRmks] = useState('');
  const [staffNo, setStaffNo] = useState('');

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    //拆出黎
    //appContextPaths[appDefDomain]
    //opRoles
    fetch(`${appContextPaths[appDefDomain]}${EndPoint.opRoles}`, requestOptions)
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
      <View style={styles.dropDownContainer}>
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
      <View style={styles.dropDownContainer}>
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
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.p10}>
            <View style={styles.inputRow}>
              <Icon
                name="user-circle"
                size={24}
                color="gray"
                type="font-awesome"
                style={styles.userFirstIcon}
              />
              <View style={styles.width100}>
                <TextInput
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Username"
                  value={username}
                  onChangeText={username => setUsername(username)}
                />
              </View>
            </View>

            <FormValidationError
              value={username}
              isSubmit={isSubmit}
              lengthChk={true}
              length={6}
            />
            <View style={styles.inputRow}>
              <Icon
                name="user-circle-o"
                size={24}
                color="gray"
                type="font-awesome"
                style={styles.p10}
              />
              <View style={styles.width100}>
                <TextInput
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Display name"
                  value={displayName}
                  onChangeText={displayName => setDisplayName(displayName)}
                />
              </View>
            </View>
            <FormValidationError value={displayName} isSubmit={isSubmit} />
            <View style={styles.inputRow}>
              <Icon
                name="hash"
                size={24}
                color="gray"
                type="feather"
                style={styles.p10}
              />
              <View style={styles.width100}>
                <TextInput
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Staff ID"
                  value={staffNo}
                  onChangeText={staffNo => setStaffNo(staffNo)}
                />
              </View>
            </View>
            <FormValidationError value={staffNo} isSubmit={isSubmit} />
            <View style={styles.inputRow}>
              <Icon
                name="shield-account-variant"
                size={24}
                color="gray"
                type="material-community"
                style={styles.p10}
              />
              <Pressable
                style={styles.width100}
                onPress={() => {
                  setMenu1(!menu1);
                  setMenu2(false);
                }}>
                <View style={styles.width100}>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={styles.textInputMobile}
                    label="Role"
                    value={role}
                    onChangeText={''}
                  />
                </View>
              </Pressable>
            </View>
            <FormValidationError value={roleSubmit} isSubmit={isSubmit} />
            <View>
              {menu1 && (
                <RoleDropDown
                  close={setMenu1}
                  setRole={setRole}
                  data={option}
                />
              )}
            </View>
            <View style={styles.inputRow}>
              <Icon
                name="vpn-key"
                size={24}
                color="gray"
                type="material"
                style={styles.p10}
              />
              <View style={styles.width100}>
                <TextInput
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={password => setPassword(password)}
                />
              </View>
            </View>
            <FormValidationError
              value={password}
              isSubmit={isSubmit}
              lengthChk={true}
              length={8}
            />
            <View style={styles.inputRow}>
              <Icon
                name="vpn-key"
                size={24}
                color="gray"
                type="vpn-key"
                style={styles.p10}
              />
              <View style={styles.width100}>
                <TextInput
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Password Confirmation"
                  value={confirmPassword}
                  secureTextEntry={true}
                  onChangeText={confirmPassword =>
                    setConfirmPassword(confirmPassword)
                  }
                />
              </View>
            </View>
            <FormValidationError
              value={confirmPassword}
              isSubmit={isSubmit}
              lengthChk={true}
              length={8}
              confirmPw={true}
              pw={password}
            />
            <View style={styles.inputRow}>
              <Icon
                name="pencil"
                size={24}
                color="gray"
                type="material-community"
                style={styles.p10}
              />
              <TextInput
                selectTextOnFocus={false}
                style={styles.textInputMobile}
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
              <View style={styles.inputRow}>
                <Icon
                  name="settings"
                  size={24}
                  color="gray"
                  type="material"
                  style={styles.p10}
                />
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Status"
                  value={status}
                  onChangeText={''}
                />
              </View>
            </Pressable>
            <View style={{zIndex: 999}}>
              {menu2 && (
                <StatusDropDown close={setMenu2} setStatus={setStatus} />
              )}
            </View>
            <View style={styles.saveDeleteButtonGroupLessPad}>
              <TouchableOpacity
                style={styles.saveBtnContainer}
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
                  style={styles.btnIconPadding}
                />
                <Text style={styles.saveBtnTitle}> Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default UserAccountCreateScreen;
