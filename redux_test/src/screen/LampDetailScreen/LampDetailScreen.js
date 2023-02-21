import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView, Overlay} from '@rneui/themed';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import axios from 'axios';
import {Input, Icon} from '@rneui/themed';
import RNFetchBlob from 'rn-fetch-blob';

import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import StatusTab from './components/StatusTab';
import AssignmentDetail from './components/AssignmentDetail';
import LastControlDetail from './components/LastControlDetail';

import HistoryTab from './components/HistoryTab';
import Alarm from './components/Alarm';
import LampDetailTab from './components/LampDetailTab';
import ImageDetailMon from './components/ImageDetailMon';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color} from '@rneui/base';
import {ActivityIndicator} from 'react-native-paper';
import {Loading} from '../../components/Loading';
import {ModalMessage} from '../../components/ModalMessage';
import {styles} from '../../constants/styles';
import {getLampDetail} from '../../redux/features/lamp/lampSlice';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';

const LampDetailScreen = props => {
  console.log('monitoring tab1');

  const {height, width} = useWindowDimensions();
  const islandscapemode = width > height ? true : false;
  const navigation = useNavigation();

  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [lampX, setLampX] = useState(0);
  const [lampY, setLampY] = useState(0);
  const [uri, setUri] = useState('');
  const [index, setIndex] = useState(0);
  const [responseCode, setResponseCode] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('red');
  const [icon, setIcon] = useState('alert');
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();

  const [data, setData] = useState('');
  const userToken = useSelector(state => state.login.userToken?.Token);
  const {userFunc} = useSelector(state => state.roleUserFunc);

  const {device, isLoading} = useSelector(state => state.lamp);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });

  const fetchDevice = (userToken, id) => {
    dispatch(getLampDetail({userToken, id}))
      .then(() => {
        console.log('dispatch success');
      })
      .catch(e => {
        console.log('dispatch failed');
      });

    //props.route.params.id
  };
  useEffect(() => {
    fetchDevice(userToken, props.route.params.id);
  }, []);

  const updateRecord = (token, form) => {
    console.log('update test');
    console.log(form);
    var formdata = new FormData();
    formdata.append('controllerCode', form?.controllerId);
    formdata.append('code', form?.rfl);

    formdata.append('controllerDeviceId', parseInt(form?.deviceId));
    formdata.append('lampPositionY', form?.lampX);
    formdata.append('lampPositionX', form?.lampY);
    formdata.append('imageW', form?.imgX);
    formdata.append('imageH', form?.imgY);
    formdata.append('relayChannelIdx', form?.relayChannelIdx);
    formdata.append('xxoo', {
      uri: form?.uri,
      type: 'image/jpeg',
      name: 'xxoo',
    });
    formdata.append('status', form?.status);
    //set form first

    var requestOptions = {
      method: 'PUT',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
      body: formdata,
    };
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${props.route.params.id}`,
      requestOptions,
    )
      .then(async response => {
        console.log('response create');
        let data = await response.json();
        console.log(data);
        if (response.status == 200) {
          setAlertMessage('update success' + `(id:${data?.id})`);
          setIcon('check-circle');
          setColor('green');
          setShowModal(true);

          navigation.navigate('MonitoringTestSub');
        } else {
          setIcon('alert');
          setColor('red');
          setAlertMessage(
            'update fail: ' + response.status + '\n' + data?.errorMsg,
          );
          setShowModal(true);
        }
      })
      // .then(result => {
      //   //  console.log(result);
      //   // return result;
      //   console.log('submit result');
      //   console.log(result);

      //   if (responseCode == 200) {
      //     alert('update success' + result?.id);
      //     navigation.navigate('MonitoringTestSub');
      //   } else {
      //     alert('update fail: ' + responseCode + '\n' + result?.errorMsg);
      //   }
      // })
      .catch(error => console.log('error13', error));
  };
  const deleteConfirm = (token, id) => {
    return Alert.alert(
      'Delete',
      'Are you sure you want to remove this record?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            deleteRecord({token, id});
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
  const deleteRecord = ({token, id}) => {
    var requestOptions = {
      method: 'DELETE',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
    };
    console.log('deleterecord');
    console.log(token);
    console.log(id);
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${props.route.params.id}`,
      requestOptions,
    )
      .then(async response => {
        let data = await response.json();
        console.log(data);
        if (response.status == 200) {
          setAlertMessage('Delete success' + `(id:${data?.id})`);
          setIcon('check-circle');
          setColor('green');
          setShowModal(true);

          navigation.navigate('MonitoringTestSub');
        } else {
          setIcon('alert');
          setColor('red');
          setAlertMessage(
            'Delete fail: ' + response.status + '\n' + data?.errorMsg,
          );
          setShowModal(true);
        }
      })

      .catch(error => console.log('error1', error));
  };
  useEffect(() => {
    //diu i no use
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    // https://gis2.ectrak.com.hk:8900/api/data/device/img/37
    //hardcode the id at this moment
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${props.route.params.id}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        //   setData(result);
        console.log('device tst1211');
        console.log(result);
        setData(result);

        setLoading(false);
      })
      .catch(error => console.log('error14', error));
    var requestOptions2 = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
        redirect: 'follow',
      },
    };
  }, []);

  useEffect(() => {
    //
    RNFetchBlob.config({
      fileCache: true,
      // by adding this option, the temp files will have a file extension
      appendExt: 'png',
    })
      .fetch(
        'GET',
        `${appContextPaths[appDefDomain]}${EndPoint.lampImg}/${props.route.params.id}`,
        {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': userToken,
          redirect: 'follow',
        },
      )
      .then(res => {
        let status = res.info().status;

        if (status == 200) {
          // the conversion is done in native code
          // the following conversions are done in js, it's SYNC

          // let path = res.path();
          console.log('status blob 200');
          console.log(res.path());
          let base64Str = res.base64();
          // the following conversions are done in js, it's SYNC
          let text = res.text();
          setUri('file://' + res.path());
          // // let json = res.json();
          console.log('base64');
          // console.log(base64Str);
          // setUri(base64Str);
          // console.log('text');
          // console.log(text);
          // console.log('json');
          // console.log(json);
        } else {
          console.log('blob status not 200');
          // handle other status codes
        }
      })
      // Something went wrong:
      .catch((errorMessage, statusCode) => {
        // error handling
        console.log('error on fetch blob');
        console.log(errorMessage);
        console.log(statusCode);
      });
  }, []);
  useEffect(() => {
    /*
    var config = {
      method: 'get',
      url: 'https://gis2.ectrak.com.hk:8900/api/data/device/img/38',
      headers: {
        'X-Token': userToken,
      },
    };

    axios(config)
      .then(function (response) {
        console.log('axios,test');
        console.log(response.data);

        console.log(JSON.stringify(response.data));
        setUri(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });*/
  }, []);

  useEffect(() => {
    setForm({
      controllerId: device.controllerCode,
      deviceId: device.controllerDeviceId,
      rfl: device.code,
      relayChannelIdx: device?.relayChannel?.channelIdx || '',
      status: 'ACTIVE',
    });
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Tabs
            defaultIndex={0} // default = 0
            uppercase={false} // true/false | default=true | labels are uppercase
            // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
            iconPosition="top" // leading, top | default=leading
            style={styles.bgWhite} // works the same as AppBar in react-native-paper
            // dark={false} // works the same as AppBar in react-native-paper
            // theme={{color: 'black'}} // works the same as AppBar in react-native-paper
            mode="scrollable" // fixed, scrollable | default=fixed
            // onChangeIndex={(newIndex) => {}} // react on index change
            showLeadingSpace={false} //  (default=true) show leading space in scrollable tabs inside the header
            // disableSwipe={false} // (default=false) disable swipe to left/right gestures
          >
            <TabScreen label="Detail" icon="clipboard-text">
              <LampDetailTab
                data={device}
                form={form}
                setForm={setForm}
                isSubmit={isSubmit}
                islandscapemode={islandscapemode}
              />
            </TabScreen>
            <TabScreen label="Status" icon="chart-box">
              <StatusTab data={device} islandscapemode={islandscapemode} />
            </TabScreen>
            <TabScreen label="Assignment" icon="clipboard-text">
              <AssignmentDetail islandscapemode={islandscapemode} />
            </TabScreen>
            <TabScreen label="Last Control" icon="toggle-switch-off">
              <LastControlDetail
                data={device}
                islandscapemode={islandscapemode}
              />
            </TabScreen>
            <TabScreen label="Location" icon="map">
              <ImageDetailMon
                setImgX={setImgX}
                setImgY={setImgY}
                setLampX={setLampX}
                setLampY={setLampY}
                setUri={setUri}
                uri={uri}
                islandscapemode={islandscapemode}
              />
            </TabScreen>
            <TabScreen label="History" icon="history">
              <HistoryTab deviceID={1} islandscapemode={islandscapemode} />
            </TabScreen>

            <TabScreen label="Alarm" icon="alert">
              <Alarm islandscapemode={islandscapemode} deviceId={device?.id} />
            </TabScreen>
          </Tabs>

          <View style={styles.saveDeleteButtonGroup}>
            {userFunc?.find(o => o.code === 'RFL_MONITOR_D') != undefined && (
              <TouchableOpacity
                style={styles.deleteBtnContainer}
                onPress={() => {
                  deleteConfirm(userToken, props?.route?.params?.id);
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
            {userFunc?.find(o => o.code === 'RFL_MONITOR_U') != undefined && (
              <TouchableOpacity
                style={styles.saveBtnContainer}
                onPress={() => {
                  console.log('request body');
                  console.log(JSON.stringify(form));
                  setIsSubmit(true);
                  if (
                    uri == '' ||
                    form.deviceId == '' ||
                    form.controllerId == '' ||
                    form.rfl == '' ||
                    form.relayChannelIdx == '' ||
                    form.status == ''
                  ) {
                    console.log('formdata');
                    console.log({uri, ...form});
                    setAlertMessage('Missing required field!');
                    setShowModal('true');
                    //+ uri + JSON.stringify(form),
                  } else {
                    updateRecord(userToken, {
                      uri,
                      imgX,
                      imgY,
                      lampX,
                      lampY,
                      ...form,
                    });
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
            )}
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
      )}
    </>
  );
};

export default LampDetailScreen;
