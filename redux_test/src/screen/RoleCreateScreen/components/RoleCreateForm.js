import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {styles} from '../../../constants/styles';
import {FormValidationError} from '../../../components/formValidationError';

const RoleCreateForm = ({
  setForm,
  form,
  isSubmit,
  codeError,
  displayNameError,
}) => {
  const userToken = useSelector(state => state.login.userToken?.Token);
  //permission,status,code,rmks,displayName
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [status, setStatus] = useState('ACTIVE');
  const [displayName, setDisplayName] = useState('');
  const [code, setCode] = useState('');

  const [rmks, setRmks] = useState('');

  return (
    <Provider>
      <TouchableWithoutFeedback
        onPress={() => {
          setMenu2(false);
        }}>
        <View style={styles.filterBody}>
          <View style={styles.p10}>
            <View style={styles.inputRow}>
              <Icon
                name="user-circle"
                size={24}
                color="gray"
                type="font-awesome"
                style={styles.createIconPadd}
              />
              <View style={styles.width100}>
                <TextInput
                  onFocus={() => {
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Display name"
                  value={displayName}
                  onChangeText={displayName => {
                    setDisplayName(displayName);
                    setForm({...form, displayName: displayName});
                  }}
                />
              </View>
            </View>
            <View>
              <FormValidationError
                value={displayNameError}
                isSubmit={isSubmit}
              />
            </View>

            <View style={styles.inputRow}>
              <Icon
                name="flag"
                size={24}
                color="gray"
                type="material"
                style={styles.createIconPadd}
              />
              <View style={styles.width100}>
                <TextInput
                  onFocus={() => {
                    setMenu2(false);
                  }}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Code"
                  value={code}
                  onChangeText={code => {
                    setCode(code);

                    setForm({...form, code: code});
                  }}
                />
              </View>
            </View>
            <View>
              <FormValidationError
                value={displayNameError}
                isSubmit={isSubmit}
              />
            </View>
            <View style={styles.inputRow}>
              <Icon
                name="pencil"
                size={24}
                color="gray"
                type="material-community"
                style={styles.createIconPadd}
              />
              <TextInput
                onFocus={() => {
                  setMenu2(false);
                }}
                selectTextOnFocus={false}
                style={styles.textInputMobile}
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
              <View style={styles.inputRow}>
                <Icon
                  name="insert-chart"
                  size={24}
                  color="gray"
                  type="material"
                  style={styles.createIconPadd}
                />
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={styles.textInputMobile}
                  label="Status"
                  value={status}
                  onChangeText={status => setStatus(status)}
                />
              </View>
            </Pressable>
            <View style={{zIndex: 999}}>
              {menu2 && (
                <View style={styles.dropDownContainer}>
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
      </TouchableWithoutFeedback>
    </Provider>
  );
};

export default RoleCreateForm;
