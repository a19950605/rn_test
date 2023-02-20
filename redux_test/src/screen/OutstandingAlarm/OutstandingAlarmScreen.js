import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native-gesture-handler';

import OutstandingAlarmCard from './components/OutstandingAlarmCard';
import OutstandingDetailTab from '../OutstandingAlarmDetailScreen/OutstandingDetailScreen';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {useWindowDimensions} from 'react-native';
import TableTest2 from './components/TableTest2';
import SortDropDown from '../../components/sortFilter';
import {sortData} from '../../utils/sortData';
import {getDate} from '../../utils/getDate';
import {styles} from '../../constants/styles';
import moment from 'moment';
const OutstandingAlarmScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('username');
  const {height, width} = useWindowDimensions();
  const userToken = useSelector(state => state.login.userToken?.Token);

  const isLandscapeMode = width > height ? true : false;

  const sortOption = [
    {displayValue: 'Alarm ID', apiValue: 'id'},
    {displayValue: 'Type', apiValue: 'alarmType'},
    {displayValue: 'Controller ID', apiValue: 'controllerCode'},
    {displayValue: 'RFL', apiValue: 'code'},
    {displayValue: 'Triggered Datetime', apiValue: 'dtCreate'},
    {displayValue: 'Status', apiValue: 'status'},
  ];
  // const {
  //   data: alarms,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetOutStandingAlarmQuery(userToken);

  // if (isLoading) {
  //   console.log('redux event log loading');
  // } else if (isSuccess) {
  //   // setData(eventLogs);
  // } else if (isError) {
  //   console.log('get event log error');
  //   console.log(error);
  // }
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/v2/alarms', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        setData(sortData(result, filterField, filterDesc));

        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  }, [loading]);

  // console.log('outStandand alarm');
  return (
    <>
      {loading ? (
        <View>
          <Text>loading</Text>
        </View>
      ) : (
        <View>
          <View style={styles.spaceBetweenP10}>
            <TouchableOpacity
              onPress={() => {
                setLoading(true);
              }}
              style={styles.csvHeader}>
              <Text style={styles.blue}>
                {moment().format('YYYY-MM-DD HH:mm:ss')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowFilter(!showFilter);
              }}>
              <Icon name="filter" size={24} color="black" type="ionicon" />
            </TouchableOpacity>

            {showFilter && (
              <SortDropDown
                close={setShowFilter}
                setFilterDesc={setFilterDesc}
                setFilterField={setFilterField}
                setLoading={setLoading}
                sortOption={sortOption}
                filterDesc={filterDesc}
                filterField={filterField}
              />
            )}
          </View>
          <View style={isLandscapeMode ? styles.mb60p5 : styles.mb60}>
            {isLandscapeMode ? (
              <TableTest2 data={data} />
            ) : (
              <FlatList
                data={data}
                renderItem={props => (
                  <OutstandingAlarmCard {...props} navigation={navigation} />
                )}
                keyExtractor={item => item.id}
              />
            )}
            {/* <OutstandingAlarmCard />
        <OutstandingAlarmCard2 />
      */}
          </View>
        </View>
      )}
    </>
  );
};

export default OutstandingAlarmScreen;
