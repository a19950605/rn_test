import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OutstandingAlarmMonCard from '../../OutstandingAlarm/components/OutstandingAlarmMonCard';
import {useSelector} from 'react-redux';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';

const Alarm = ({deviceId}) => {
  const [data, setData] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  console.log('arlarm deviceid');
  console.log(deviceId);
  //KT/R1/002
  var formdata = new FormData();
  formdata.append('deviceId', deviceId);
  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.alarms}?deviceId=`,

      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('result123');
        console.log(result);
        setData(result?.content);
      })
      .catch(error => console.log('error16', error));
  }, []);
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Outstandingn alarm</Text>
        </View>
        <View>
          <Text>filter</Text>
        </View>
      </View>
      {/** History list */}

      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={props => <OutstandingAlarmMonCard {...props} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Alarm;
