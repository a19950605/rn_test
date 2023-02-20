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
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState('');
  const [isReload, setIsReload] = useState(false);
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
      `${appContextPaths[appDefDomain]}${EndPoint.alarms}?deviceId=${deviceId}&page=${page}`,

      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('result alarms*******************************');
        console.log(result);
        // setData(prevArray => [...prevArray, res]);
        setData(result?.content);

        setTotalPages(result?.totalPages);
        setIsLastPage(result?.last);
      })
      .catch(error => console.log('error16', error));
  }, []);
  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    if (isLastPage == true || page == totalPages) {
      setIsReload(false);
      return;
    } else if (isReload == true) {
      fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.alarms}?deviceId=${deviceId}&page=${page}`,

        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;

          // setData(oldArray => [...oldArray, result?.content]);
          //  setData([...data, result?.content]);
          if (result?.content != undefined) {
            setData(prevArray => [...prevArray, ...result?.content]);
          }
          setIsLastPage(result?.last);
          setIsReload(false);
        })
        .catch(error => console.log('error19', error));
    }
  }, [isReload]);
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>
            Outstandingn alarm{totalPages || ''}
            {page || ''}
          </Text>
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
          //  keyExtractor={item}
          onEndReached={() => {
            alert('end react');
            if (totalPages > page) {
              setPage(page + 1);
              setIsReload(true);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Alarm;
