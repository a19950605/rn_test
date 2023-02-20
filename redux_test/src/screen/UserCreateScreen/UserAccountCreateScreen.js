import React, {useEffect, useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  HelperText,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useCreateUser} from '../../hooks/ApiHook';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';
import {styles} from '../../constants/styles';
import {FormValidationError} from '../../components/formValidationError';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DropDown} from '../../components/StatusDropDown';
import {createUser} from '../../redux/features/user/userSlice';
import {formBuilder} from '../../utils/formBuilder';
import {FormValidator} from '../../utils/formValidator';
import {resetErrorMsg} from '../../utils/resetErrorMsg';
import {ModalMessage} from '../../components/ModalMessage';

const UserAccountCreateScreen = () => {
  /**
   *  let form = {
                      status,
                      username,
                      displayName,
                      password,
                      staffNo,
                      rmks,
                      roleSubmit,
                    };
   */
  const [submitForm, setSubmitForm] = useState({
    status: 'ACTIVE',
    username: '',
    displayName: '',
    password: '',
    staffNo: '',
    rmks: '',
    role: '',
  });
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [role, setRole] = useState('');
  const [roleSubmit, setRoleSubmit] = useState('');
  const userToken = useSelector(state => state.login.userToken?.Token);
  const {createStatus} = useSelector(state => state.user);

  const navigation = useNavigation();
  const [isSubmit, setIsSubmit] = useState(false);
  const [option, setOption] = useState([]);
  const [roleOpt, setRoleOpt] = useState();
  const [status, setStatus] = useState('ACTIVE');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rmks, setRmks] = useState('');
  const [staffNo, setStaffNo] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');
  const [staffIdError, setStaffIdError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [color, setColor] = useState('red');
  const [icon, setIcon] = useState('alert');
  const dispatch = useDispatch();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
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
  useEffect(() => {
    let rOpt = [];

    option.map(d => {
      rOpt = [
        ...rOpt,
        {displayName: d.displayName + `(${d.code})`, formVal: d.id},
      ];
    });
    roleOpt;
    setRoleOpt(rOpt);
  }, [option]);

  useEffect(() => {
    if (isSubmit == true) {
    }
  }, [isSubmit]);
  return (
    <Provider>
      <KeyboardAwareScrollView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            setMenu1(false);
            setMenu2(false);
          }}>
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
                  onFocus={() => {
                    setMenu1(false);
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Username"
                  value={username}
                  underlineColor={usernameError && 'red'}
                  onChangeText={username => {
                    setUsername(username);
                    setSubmitForm({...submitForm, username: username});
                  }}
                />
              </View>
            </View>

            <FormValidationError
              value={usernameError}
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
                  onFocus={() => {
                    setMenu1(false);
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Display name"
                  value={displayName}
                  underlineColor={displayNameError && 'red'}
                  onChangeText={displayName => {
                    setDisplayName(displayName);
                    setSubmitForm({...submitForm, displayName: displayName});
                  }}
                />
              </View>
            </View>
            <FormValidationError value={displayNameError} isSubmit={isSubmit} />
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
                  onFocus={() => {
                    setMenu1(false);
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Staff ID"
                  value={staffNo}
                  underlineColor={staffIdError && 'red'}
                  onChangeText={staffNo => {
                    setStaffNo(staffNo.replace(/[^0-9]/g, ''));
                    setSubmitForm({...submitForm, staffNo: staffNo});
                  }}
                />
              </View>
            </View>
            <FormValidationError value={staffIdError} isSubmit={isSubmit} />
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
                    underlineColor={roleError && 'red'}
                    onChangeText={''}
                  />
                </View>
              </Pressable>
            </View>
            <FormValidationError value={roleError} isSubmit={isSubmit} />
            <View>
              {menu1 && (
                // <RoleDropDown
                //   close={setMenu1}
                //   setRole={setRole}
                //   data={option}
                // />
                <DropDown
                  close={setMenu1}
                  setForm={setSubmitForm}
                  form={submitForm}
                  setDisplay={setRole}
                  keyVal={'role'}
                  options={roleOpt}
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
                  onFocus={() => {
                    setMenu1(false);
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Password"
                  value={password}
                  secureTextEntry={true}
                  underlineColor={passwordError && 'red'}
                  onChangeText={password => {
                    setPassword(password);

                    setSubmitForm({...submitForm, password: password});
                  }}
                />
              </View>
            </View>
            <FormValidationError
              value={passwordError}
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
                  onFocus={() => {
                    setMenu1(false);
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Password Confirmation"
                  value={confirmPassword}
                  secureTextEntry={true}
                  underlineColor={confirmPasswordError && 'red'}
                  onChangeText={confirmPassword =>
                    setConfirmPassword(confirmPassword)
                  }
                />
              </View>
            </View>
            <FormValidationError
              value={confirmPasswordError}
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
                onFocus={() => {
                  setMenu1(false);
                  setMenu2(false);
                }}
                selectTextOnFocus={false}
                style={styles.textInputMobile}
                label="Remarks"
                value={rmks}
                onChangeText={rmks => {
                  setRmks(rmks);
                  setSubmitForm({...submitForm, rmks: rmks});
                }}
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
            <View style={{zIndex: 1111}}>
              {menu2 && (
                <DropDown
                  close={setMenu2}
                  setForm={setSubmitForm}
                  form={submitForm}
                  setDisplay={setStatus}
                  keyVal={'status'}
                  options={[
                    {displayName: 'Active', formVal: 'ACTiVE'},
                    {displayName: 'Maintenance', formVal: 'DISABLED'},
                  ]}
                />
              )}
            </View>
            <View style={styles.saveDeleteButtonGroupLessPad}>
              <TouchableOpacity
                style={styles.saveBtnContainer}
                onPress={() => {
                  //  alert('hello');
                  setIsSubmit(false);
                  setIsError(false);
                  resetErrorMsg({
                    errorSetter: [
                      setUserNameError,
                      setDisplayNameError,
                      setStaffIdError,
                      setRoleError,
                      setPasswordError,
                      setConfirmPasswordError,
                    ],
                  });
                  FormValidator({
                    input: username,
                    lengthChk: true,
                    length: 8,
                    setValue: setUserNameError,
                    setIsError,
                  });
                  FormValidator({
                    input: displayName,
                    setValue: setDisplayNameError,
                    setIsError,
                  });
                  FormValidator({
                    input: staffNo,
                    setValue: setStaffIdError,
                    setIsError,
                  });
                  FormValidator({
                    input: role,
                    setValue: setRoleError,
                    setIsError,
                  });
                  FormValidator({
                    input: password,
                    lengthChk: true,
                    length: 8,
                    setValue: setPasswordError,
                    setIsError,
                  });
                  FormValidator({
                    input: confirmPassword,
                    lengthChk: true,
                    length: 8,
                    pw: password,
                    setValue: setConfirmPasswordError,
                    setIsError,
                  });
                  setIsSubmit(true);
                  if (isSubmit == true) {
                    if (
                      isError == true ||
                      usernameError != '' ||
                      displayNameError != '' ||
                      roleError != '' ||
                      passwordError != '' ||
                      confirmPasswordError != ''
                    ) {
                      console.log('error');
                      //alert('error happened');
                    } else {
                      // useCreateUser({userToken, form: submitForm, navigation});

                      dispatch(
                        createUser({
                          userToken,
                          data: formBuilder([
                            {
                              key: 'username',
                              value: submitForm?.username || '',
                            },
                            {key: 'status', value: submitForm?.status || ''},

                            {
                              key: 'displayName',
                              value: submitForm?.displayName || '',
                            },
                            {
                              key: 'password',
                              value: submitForm?.password || '',
                            },
                            {
                              key: 'staffNo',
                              value: submitForm?.staffNo || '',
                            },
                            {key: 'rmks', value: submitForm?.rmks || ''},
                            {key: 'roleIds', value: [submitForm?.role]},
                          ]),
                        }),
                      )
                        .unwrap()
                        .then(originalPromiseResult => {
                          // handle result here

                          console.log(originalPromiseResult);
                          console.log('create success');
                          console.log(originalPromiseResult);
                          setAlertMessage('Create success' + `(id:`);
                          setIcon('check-circle');
                          setColor('green');
                          setShowModal(true);
                          navigation.navigate('UserAccount');
                        })
                        .catch(rejectedValueOrSerializedError => {
                          // handle error here
                          console.log('createfailed ');

                          console.log(rejectedValueOrSerializedError?.error);
                          console.log('createfailed ');
                          setIcon('alert');
                          setColor('red');
                          console.log('alert test');
                          setAlertMessage(
                            rejectedValueOrSerializedError?.error || '',
                          );
                          setShowModal(true);
                        });
                    }
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
            <View>
              {showModal && (
                <ModalMessage
                  message={alertMessage}
                  setShowModal={setShowModal}
                  color={color}
                  icon={icon}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Provider>
  );
};

export default UserAccountCreateScreen;
