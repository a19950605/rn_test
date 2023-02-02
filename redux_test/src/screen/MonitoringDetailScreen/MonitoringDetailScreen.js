import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

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
  const [index, setIndex] = React.useState(0);
  const [responseCode, setResponseCode] = useState();

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

  const updateRecord = token => {
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
          alert('update success' + result?.id);
          navigation.navigate('MonitoringTestSub');
        } else {
          alert('update fail: ' + responseCode + '\n' + result?.errorMsg);
        }
      })
      .catch(error => console.log('error13', error));
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
      `https://gis2.ectrak.com.hk:8900/api/v2/device/${props.route.params.id}`,
      requestOptions,
    )
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
          alert('delete success' + result?.id);
          navigation.navigate('MonitoringTestSub');
        } else {
          alert('delete fail: ' + responseCode + '\n' + result?.errorMsg);
        }
      })
      .catch(error => console.log('error1Z', error));
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
        console.log('device tst121');
        console.log(result);
        setData(result);

        setLoading(false);
      })
      .catch(error => console.log('error14', error));
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
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <>
          <Tab
            value={index}
            scrollable={true}
            onChange={e => setIndex(e)}
            containerStyle={{
              backgroundColor: 'white',
              color: 'black',
            }}
            indicatorStyle={{
              backgroundColor: 'red',
              height: 3,
            }}
            style={{backgroundColor: 'white'}}
            variant="default">
            <Tab.Item
              title="Details"
              titleStyle={{fontSize: 12}}
              icon={{name: 'clipboard-text', type: 'material-community'}}
            />
            <Tab.Item
              title="Status"
              titleStyle={{fontSize: 12}}
              icon={{name: 'insert-chart', type: 'material'}}
            />
            <Tab.Item
              title="Assignment"
              titleStyle={{fontSize: 12}}
              icon={{name: 'clipboard-text', type: 'material-community'}}
            />
            <Tab.Item
              title="Last Control"
              titleStyle={{fontSize: 12}}
              icon={{name: 'toggle-switch-off', type: 'material-community'}}
            />
            <Tab.Item
              title="Location"
              titleStyle={{fontSize: 12}}
              icon={{name: 'map', type: 'material'}}
            />
            <Tab.Item
              title="History"
              titleStyle={{fontSize: 12}}
              icon={{name: 'history'}}
            />
            <Tab.Item
              title="Alarm"
              titleStyle={{fontSize: 12}}
              icon={{name: 'alert', type: 'material-community'}}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <MonitoringDetailTab
                data={data}
                form={form}
                setForm={setForm}
                islandscapemode={islandscapemode}
              />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <StatusTab data={data} islandscapemode={islandscapemode} />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <AssignmentDetail islandscapemode={islandscapemode} />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <LastControlDetail
                data={data}
                islandscapemode={islandscapemode}
              />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <ImageDetailMon
                setImgX={setImgX}
                setImgY={setImgY}
                setLampX={setLampX}
                setLampY={setLampY}
                setUri={setUri}
                uri={uri}
                islandscapemode={islandscapemode}
              />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <HistoryTab deviceID={1} islandscapemode={islandscapemode} />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <Alarm islandscapemode={islandscapemode} />
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
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 5,
              }}
              onPress={() => {
                deleteConfirm(userToken);
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
                if (
                  uri == '' ||
                  form.deviceId == '' ||
                  form.controllerId == '' ||
                  form.rfl == '' ||
                  form.relayChannelIdx == ''
                ) {
                  alert('something missing');
                  //+ uri + JSON.stringify(form),
                } else {
                  updateRecord(userToken);
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
      )}
    </>
  );
};

export default MonitoringDetailScreen;