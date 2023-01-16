import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Monitoring from './Monitoring';
import MonitoringCard from './MonitoringCard';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MonitoringDetail from './components/monitoring/MonitoringDetail';
import MonitoringTab from './MonitoringTab';
import MonitoringCreate from './MonitoringCreate';
import {Icon} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../features/login/loginSlice';
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  HelperText,
} from 'react-native-paper';
const MonitoringTest = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={MonitoringTestSub} />
      <Stack.Screen name="MonitoringDetail" component={MonitoringTab} />
      <Stack.Screen name="Create Monitoring" component={MonitoringCreate} />
    </Stack.Navigator>
  );
};
const MonitoringTestSub = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setInterval(function () {
      setLoading(true);
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
        setData(result);
        setLoading(false);
      })
      .catch(error => console.log('error1', error.status));
  }, [filterDesc, filterField, loading]);

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
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('rflid');
            close(false);
          }}
          title="RFL ID"
        />
        <Menu.Item
          onPress={() => {
            setFilterDesc(!filterDesc);
            setFilterField('epic');

            close(false);
          }}
          title="EPIC"
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        <View>
          <TouchableOpacity
            onPress={() => {
              setShowFilter(!showFilter);
            }}>
            <Icon
              name="filter"
              size={24}
              color="black"
              type="ionicon"
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
        {showFilter && <SortDropDown close={setShowFilter} />}
      </View>

      <View style={{padding: 5}}></View>

      {loading ? (
        <Text>loading</Text>
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
