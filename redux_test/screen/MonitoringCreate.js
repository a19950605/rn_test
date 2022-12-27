import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import MonitoringCreateTab from './components/monitoring/MonitoringCreateTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MonitoringCreate = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: '',
  });
  const [file, setFile] = useState();
  useEffect(() => {
    const url =
      'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553';
    const fileName = 'myFile.jpg';

    fetch(url).then(async response => {
      const contentType = response.headers.get('content-type');
      const blob = await response.blob();
      // eslint-disable-next-line no-undef
      const file1 = new File([blob], fileName, {contentType});
      console.log('file test');
      setFile(file1);
      console.log(file);
    });
  }, []);

  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }
  //   //formdata.append("xxoo", fileInput.files[0], "/C:/Users/stoneroad/Pictures/test.jpg");
  const createNewRecord = () => {
    const url =
      'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553';

    var formdata = new FormData();
    formdata.append('controllerCode', form.controllerId);
    formdata.append('code', form.rfl);

    formdata.append('controllerDeviceId', form.deviceId);
    formdata.append('lampPositionY', 50);
    formdata.append('lampPositionX', 50);
    formdata.append('imageW', 20);
    formdata.append('imageH', 50);
    formdata.append('relayChannelIdx', form.relayChannelIdx);
    formdata.append('xxoo', {
      uri: url,
      type: 'image/jpeg',
      name: 'xxoo',
    });
    formdata.append('status', form.status);

    getData().then(res => {
      //set form first

      var requestOptions = {
        method: 'POST',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
        body: formdata,
      };
      fetch('https://gis2.ectrak.com.hk:8900/api/v2/device', requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;
          console.log('result');
          console.log(result);
        })
        .catch(error => console.log('error1', error));
    });
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
          icon={{name: 'rowing', color: 'black'}}
        />
        <Tab.Item
          title="Location"
          titleStyle={{fontSize: 12, color: 'black'}}
          icon={{name: 'rowing', color: 'black'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <MonitoringCreateTab setForm={setForm} form={form} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Text h1>Location</Text>
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
            alert('hello' + JSON.stringify(form));
            createNewRecord();
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
