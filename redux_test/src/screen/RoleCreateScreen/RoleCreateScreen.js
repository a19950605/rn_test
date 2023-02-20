import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon, Tab, TabView} from '@rneui/themed';
import {Tabs, TabScreen} from 'react-native-paper-tabs';

import RoleCreateForm from './components/RoleCreateForm';
import RolePermission from './components/RolePermssion';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../constants/styles';
import {useTranslation} from 'react-i18next';
import {resetErrorMsg} from '../../utils/resetErrorMsg';
import {FormValidator} from '../../utils/formValidator';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';

const RoleCreateScreen = () => {
  const [index, setIndex] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const {t} = useTranslation();

  const [form, setForm] = useState({
    code: '',
    displayName: '',
    rmks: '',
    status: 'ACTIVE',
  });
  const [isError, setIsError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');

  //permission,status,code,rmks,displayName
  const [listData, setListData] = useState([]);
  const [permission, setPermission] = useState([]);

  const userToken = useSelector(state => state.login.userToken?.Token);
  const navigation = useNavigation();

  const getRoleAsOptions = () => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.myfuncs}`,

      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('get role as option');
        //console.log(result.func[0].permissions); //5,4,2,3
        //console.log(result.func[1].permissions); //9,7,8,6
        //  console.log(result.func[2].permissions);
        console.log(result.func[8].permissions);
        let temp_arr = [];
        result?.func?.map(per => {
          temp_arr = temp_arr.concat(per.permissions);
        });
        // console.log('temp_arr');
        // console.log(temp_arr);
        // console.log(temp_arr.length);
        // return result;
        setListData(temp_arr);
      })
      .catch(error => console.log('error1', error));
  };
  useEffect(() => {
    getRoleAsOptions();
  }, []);

  return (
    <>
      <Tabs
        style={styles.whiteBackground}
        iconPosition="top"
        uppercase={false} // true/false | default=true | labels are uppercase
      >
        <TabScreen label={t('lamp.details')} icon="clipboard-text">
          <RoleCreateForm
            setForm={setForm}
            form={form}
            isSubmit={isSubmit}
            codeError={codeError}
            displayNameError={displayNameError}
          />
        </TabScreen>
        <TabScreen label="permissions" icon="map">
          <RolePermission listData={listData} setPermission={setPermission} />
        </TabScreen>
      </Tabs>

      <View style={styles.saveDeleteButtonGroup}>
        <TouchableOpacity
          style={styles.saveBtnContainer}
          onPress={() => {
            // alert('hello' + permission);
            setIsSubmit(true);
            setIsError(false);
            resetErrorMsg({
              errorSetter: [setCodeError, setDisplayNameError],
            });
            FormValidator({
              input: form.code,
              setValue: setCodeError,
              setIsError,
            });
            FormValidator({
              input: form.displayName,
              setValue: setDisplayNameError,
              setIsError,
            });
            if (!form.status || !form.code || !form.displayName) {
              alert('fill all required field');
            } else {
              createRole(userToken, form, permission, navigation);
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
    </>
  );
};

const createRole = (token, form, permission, navigation) => {
  var formdata = new FormData();
  formdata.append('teamId', 1);
  //code displayname rmks
  formdata.append('permissionIds', permission);
  formdata.append('status', form?.status || 'ACTIVE');
  formdata.append('code', form?.code);
  formdata.append('rmks', form?.rmks);
  formdata.append('displayName', form?.displayName);

  var requestOptions = {
    method: 'POST',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };

  fetch(`${appContextPaths[appDefDomain]}${EndPoint.role}`, requestOptions)
    .then(response => {
      if (response.status == 200) {
        alert('create success');
        navigation.navigate('RoleManagement');
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
export default RoleCreateScreen;
