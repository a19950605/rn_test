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
import MonitoringDetailTab from './components/MonitoringDetailTab';
import ImageDetailMon from './components/ImageDetailMon';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color} from '@rneui/base';
import {ActivityIndicator} from 'react-native-paper';
import {Loading} from '../../components/Loading';
import {ModalMessage} from '../../components/ModalMessage';

const MonitoringDetailScreen = props => {
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

  const [data, setData] = useState('');
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });

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
      `https://gis2.ectrak.com.hk:8900/api/v2/device/${props.route.params.id}`,
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
    fetch(`https://gis2.ectrak.com.hk:8900/api/v2/device/${id}`, requestOptions)
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
      // .then(result => {
      //   //  console.log(result);
      //   // return result;
      //   console.log('submit result');
      //   console.log(result);

      //   if (responseCode == 200) {
      //     alert('delete success' + result?.id);
      //     navigation.navigate('MonitoringTestSub');
      //   } else {
      //     alert('delete fail: ' + responseCode + '\n' + result?.errorMsg);
      //   }
      // })
      .catch(error => console.log('error1', error));
  };
  useEffect(() => {
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
      `https://gis2.ectrak.com.hk:8900/api/v2/device/${props.route.params.id}`,
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
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/data/device/img/${props.route.params.id}`,
      requestOptions2,
    )
      .then(response => {
        console.log('img res');
        console.log(response.url);

        // console.log(response);

        console.log(response);
        console.log(response.headers);

        return response.blob();
      })
      .then(result => {
        console.log('res');
        console.log(result);
        // return result;
        //   setData(result);
        //image_picker6597993569716493407.jpg
        // const imageObjectURL = URL.createObjectURL(result);
        const imgtst = new File([result], 'test.png', {type: 'image/png'});
        console.log(imgtst);
        const imageObjectURL = URL.createObjectURL(imgtst);

        console.log('imagetest');
        console.log(imageObjectURL);
        // setUri(result);
      })
      .catch(error => console.log('error14', error));
  }, []);

  useEffect(() => {
    RNFetchBlob.fetch(
      'GET',
      '`https://gis2.ectrak.com.hk:8900/api/data/device/img/${props.route.params.id}`',
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
          let base64Str = res.base64();
          // the following conversions are done in js, it's SYNC
          let text = res.text();
          let json = res.json();
          let path = res.path();
          console.log('status blob 200');
          console.log(path);
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
      controllerId: data?.device?.controllerCode,
      deviceId: data?.device?.controllerDeviceId,
      rfl: data?.device?.code,
      relayChannelIdx: data?.device?.relayChannel?.channelIdx || '',
      status: 'ACTIVE',
    });
  }, [data]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Tabs
            defaultIndex={0} // default = 0
            uppercase={false} // true/false | default=true | labels are uppercase
            // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
            iconPosition="top" // leading, top | default=leading
            style={{backgroundColor: 'white'}} // works the same as AppBar in react-native-paper
            // dark={false} // works the same as AppBar in react-native-paper
            // theme={{color: 'black'}} // works the same as AppBar in react-native-paper
            mode="scrollable" // fixed, scrollable | default=fixed
            // onChangeIndex={(newIndex) => {}} // react on index change
            showLeadingSpace={false} //  (default=true) show leading space in scrollable tabs inside the header
            // disableSwipe={false} // (default=false) disable swipe to left/right gestures
          >
            <TabScreen label="Detail" icon="clipboard-text">
              <MonitoringDetailTab
                data={data}
                form={form}
                setForm={setForm}
                isSubmit={isSubmit}
                islandscapemode={islandscapemode}
              />
            </TabScreen>
            <TabScreen label="Status" icon="chart-box">
              <StatusTab data={data} islandscapemode={islandscapemode} />
            </TabScreen>
            <TabScreen label="Assignment" icon="clipboard-text">
              <AssignmentDetail islandscapemode={islandscapemode} />
            </TabScreen>
            <TabScreen label="Last Control" icon="toggle-switch-off">
              <LastControlDetail
                data={data}
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
              <Alarm
                islandscapemode={islandscapemode}
                deviceId={data?.device?.code}
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
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 5,
              }}
              onPress={() => {
                deleteConfirm(userToken, props?.route?.params?.id);
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
                style={{justifyContent: 'center', paddingRight: 5}}
              />
              <Text style={{color: 'green'}}> Save</Text>
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
      )}
    </>
  );
};

export default MonitoringDetailScreen;
