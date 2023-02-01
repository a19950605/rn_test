import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import MonitoringCard from '../MonitoringCard';
import {useNavigation} from '@react-navigation/native';

import {Icon} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../features/login/loginSlice';
import {Menu} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import TableTest from '../TableTest';
// const MonitoringTest = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
//       <Stack.Screen name="MonitoringTestSub" component={MonitoringTestSub} />
//       <Stack.Screen name="MonitoringDetail" component={MonitoringTab} />
//       <Stack.Screen name="Create Monitoring" component={MonitoringCreate} />
//     </Stack.Navigator>
//   );
// };
////rflid=id , rlf=code,
function sortData(list, key, filterDesc) {
  if (key == 'rflid') {
    if (filterDesc) {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  }
  if (key == 'rfl') {
    if (filterDesc) {
      return list.sort((a, b) => (a.code > b.code ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.code > b.code ? 1 : -1));
    }
  }
}

const MonitoringTest = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('rflid');
  const [showFilter, setShowFilter] = useState(false);
  console.log('islandscapemode' + isLandscapeMode);
  const isFocused = useIsFocused();

  useEffect(() => {
    setInterval(function () {
      //setLoading(true);
      var date = new Date();

      var dateStr =
        date.getFullYear() +
        '-' +
        ('00' + (date.getMonth() + 1)).slice(-2) +
        '-' +
        ('00' + date.getDate()).slice(-2) +
        '-' +
        ' ' +
        ('00' + date.getHours()).slice(-2) +
        ':' +
        ('00' + date.getMinutes()).slice(-2) +
        ':' +
        ('00' + date.getSeconds()).slice(-2);
      setCurrentDate(dateStr);
    }, 30000);
  }, []);

  useEffect(() => {
    var date = new Date();

    var dateStr =
      date.getFullYear() +
      '-' +
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('00' + date.getDate()).slice(-2) +
      '-' +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);
    setCurrentDate(dateStr);
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      'https://gis2.ectrak.com.hk:8900/api/v2/options/devices?showOnlyActive=1',
      requestOptions,
    )
      .then(response => {
        console.log('response.status: ', response.status); // 👉️ 200
        if (response.status == 403) {
          dispatch(signout());
        }
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        setData(sortData(result, 'rflid', filterDesc));
        setLoading(false);
      })
      .catch(error => console.log('error12', error.status));
  }, [loading, isFocused]);

  console.log('monitoring test data');
  console.log(data);

  const SortDropDown = ({close}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 999,

          right: 0,
          top: 40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Menu.Item
          trailingIcon={
            filterField == 'rflid'
              ? filterDesc
                ? 'arrow-up'
                : 'arrow-down'
              : ''
          }
          style={{
            backgroundColor: filterField == 'rflid' ? 'lightgray' : 'white',
          }}
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('rflid');
            setData(sortData(data, 'rflid', filterDesc));

            close(false);
          }}
          title="RFL ID"
        />
        <Menu.Item
          style={{
            backgroundColor: filterField == 'rfl' ? 'lightgray' : 'white',
          }}
          trailingIcon={
            filterField == 'rfl' ? (filterDesc ? 'arrow-up' : 'arrow-down') : ''
          }
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('rfl');
            setData(sortData(data, 'rfl', filterDesc));

            close(false);
          }}
          title="rfl"
        />

        <Menu.Item
          trailingIcon={
            filterField == 'epic'
              ? filterDesc
                ? 'arrow-up'
                : 'arrow-down'
              : ''
          }
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('epic');

            close(false);
          }}
          title="EPIC"
        />
        <Menu.Item
          trailingIcon={
            filterField == 'Group'
              ? filterDesc
                ? 'arrow-up'
                : 'arrow-down'
              : ''
          }
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('Group');
            close(false);
          }}
          title="Group"
        />
        <Menu.Item
          trailingIcon={
            filterField == 'statusasof'
              ? filterDesc
                ? 'arrow-up'
                : 'arrow-down'
              : ''
          }
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('statusasof');
            close(false);
          }}
          title="Status As Of"
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
              marginRight: 5,
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Create Monitoring');
            }}>
            <Icon
              name="add-box"
              size={24}
              color="blue"
              type="material"
              style={{paddingRight: 5}}
            />
            <Text style={{color: 'blue'}}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLoading(true);
            }}
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: 'blue'}}>{currentDate}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowFilter(!showFilter);
            }}>
            <Icon name="filter" size={24} color="black" type="ionicon" />
          </TouchableOpacity>
        </View>
        {showFilter && <SortDropDown close={setShowFilter} />}
      </View>

      <View style={{padding: 5}}></View>
      <Modal isVisible={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              padding: 20,
              backgroundColor: 'white',
            }}>
            <Text>I am the modal content!</Text>
          </View>
        </View>
      </Modal>
      {loading ? (
        <Text>loading</Text>
      ) : isLandscapeMode ? (
        <TableTest data={data} navigation={navigation} />
      ) : (
        <FlatList
          data={data}
          renderItem={props => (
            <MonitoringCard {...props} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default MonitoringTest;
