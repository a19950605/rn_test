import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import {Button, Title, Paragraph} from 'react-native-paper';
import MonitoringCreateTab from './components/MonitoringCreateTab';
import ImageUploadTest from './components/ImageUploadTest';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ModalMessage} from '../../components/ModalMessage';
import {useTranslation} from 'react-i18next';
const MonitoringCreateScreen = () => {
  const [index, setIndex] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [lampX, setLampX] = useState(0);
  const [lampY, setLampY] = useState(0);
  const [uri, setUri] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('red');
  const [icon, setIcon] = useState('alert');
  const [isSubmit, setIsSubmit] = useState(false);
  const userToken = useSelector(state => state.login.userToken?.Token);

  const navigation = useNavigation();
  const [responseCode, setResponseCode] = useState();
  const [alertMessage, setAlertMessage] = useState('');
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });

  //api/v2/options/rolesAsOptions
  const {t} = useTranslation();

  const getRoleAsOptions = userToken => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(`https://gis2.ectrak.com.hk:8900/api/rolesAsOptions`, requestOptions)
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
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  };
  //   //formdata.append("xxoo", fileInput.files[0], "/C:/Users/stoneroad/Pictures/test.jpg");
  const createNewRecord = token => {
    var formdata = new FormData();
    formdata.append('controllerCode', form.controllerId);
    formdata.append('code', form.rfl);

    formdata.append('controllerDeviceId', parseInt(form.deviceId));
    formdata.append('lampPositionY', lampX);
    formdata.append('lampPositionX', lampY);
    formdata.append('imageW', imgX);
    formdata.append('imageH', imgY);
    formdata.append('relayChannelIdx', parseInt(form.relayChannelIdx));
    formdata.append('xxoo', {
      uri: uri,
      type: 'image/jpeg',
      name: 'xxoo',
    });
    formdata.append('status', 'ACTIVE');
    console.log('relaychidx');

    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
      body: formdata,
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/v2/device', requestOptions)
      .then(async response => {
        setResponseCode(response.status);

        console.log('response create');
        let data = await response.json();
        console.log(data);
        if (response.status == 200) {
          setAlertMessage('Create success' + `(id:${data?.id})`);
          setIcon('check-circle');
          setColor('green');
          setShowModal(true);

          navigation.navigate('MonitoringTestSub');
        } else {
          setIcon('alert');
          setColor('red');
          setAlertMessage(
            'create fail: ' + response.status + '\n' + data?.errorMsg,
          );
          setShowModal(true);
        }

        // return response.json();
      })
      // .then(result => {
      //   console.log('submit result');
      //   console.log(result);
      //   // setAlertMessage(alertMessage + `(id:${result?.id})`);

      //   // if (responseCode == 200) {
      //   //   alert('create success' + result?.id);
      //   //   navigation.navigate('MonitoringTestSub');
      //   // } else {
      //   //   alert('create fail: ' + responseCode + '\n' + result?.errorMsg);
      //   // }
      // })
      .catch(error => console.log('error1', error));
  };

  return (
    <>
      <Tabs
        style={{backgroundColor: 'white'}}
        iconPosition="top"
        uppercase={false} // true/false | default=true | labels are uppercase
      >
        <TabScreen label={t('lamp.details')} icon="clipboard-text">
          <MonitoringCreateTab
            setForm={setForm}
            form={form}
            isSubmit={isSubmit}
            t={t}
          />
        </TabScreen>
        <TabScreen label={t('lamp.location')} icon="map">
          <ImageUploadTest
            setImgX={setImgX}
            setImgY={setImgY}
            setLampX={setLampX}
            setLampY={setLampY}
            setUri={setUri}
            uri={uri}
            t={t}
          />
        </TabScreen>
      </Tabs>
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
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => {
            console.log('request body');
            console.log(JSON.stringify(form));
            setIsSubmit(true);
            if (
              uri == '' ||
              form.deviceId == '' ||
              form.controllerId == '' ||
              form.rfl == '' ||
              (form.relayChannelIdx == '' && form.relayChannelIdx != 0)
            ) {
              setAlertMessage('Missing required field!');
              setShowModal(true);
            } else {
              createNewRecord(userToken);
            }
          }}>
          <Icon
            name="md-save-sharp"
            type="ionicon"
            size={24}
            color="green"
            style={{justifyContent: 'center', paddingRight: 5}}
          />
          <Text style={{color: 'green'}}> {t('lamp.save')}</Text>
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
    </>
  );
};

export default MonitoringCreateScreen;
