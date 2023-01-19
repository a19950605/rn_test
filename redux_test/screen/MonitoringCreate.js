import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import MonitoringCreateTab from './components/monitoring/MonitoringCreateTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageUploadTest from './ImageUploadTest';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const MonitoringCreate = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [lampX, setLampX] = useState(0);
  const [lampY, setLampY] = useState(0);
  const [uri, setUri] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const userToken = useSelector(state => state.login.userToken?.Token);

  const navigation = useNavigation();
  const [responseCode, setResponseCode] = useState();
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });

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
    formdata.append('relayChannelIdx', form.relayChannelIdx);
    formdata.append('xxoo', {
      uri: uri,
      type: 'image/jpeg',
      name: 'xxoo',
    });
    formdata.append('status', 'ACTIVE');
    console.log('relaychidx');
    console.log(form.relayChannelIdx);
    //set form first

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
      .then(response => {
        setResponseCode(response.status);

        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('submit result');
        console.log(result);

        if (responseCode == 200) {
          alert('create success' + result?.id);
          navigation.navigate('MonitoringTestSub');
        } else {
          alert('create fail: ' + responseCode + '\n' + result?.errorMsg);
        }
      })
      .catch(error => console.log('error1', error));
  };

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'red',
          height: 3,
          color: 'black',
        }}
        containerStyle={{
          backgroundColor: 'white',
          color: 'black',
        }}
        variant="primary">
        <Tab.Item
          title="Details"
          titleStyle={{fontSize: 12, color: 'black'}}
          icon={{
            name: 'clipboard-text',
            color: 'black',
            type: 'material-community',
          }}
        />
        <Tab.Item
          title="Location"
          titleStyle={{fontSize: 12, color: 'black'}}
          icon={{name: 'map', color: 'black', type: 'material'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <MonitoringCreateTab
            setForm={setForm}
            form={form}
            isSubmit={isSubmit}
          />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/* <Text h1>Location</Text> */}
          <ImageUploadTest
            setImgX={setImgX}
            setImgY={setImgY}
            setLampX={setLampX}
            setLampY={setLampY}
            setUri={setUri}
            uri={uri}
          />
        </TabView.Item>
      </TabView>
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
              form.relayChannelIdx == ''
            ) {
              alert('you have missing something' + uri + JSON.stringify(form));
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
          <Text style={{color: 'green'}}> Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MonitoringCreate;
