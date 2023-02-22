import {useIsFocused, useNavigation} from '@react-navigation/native';
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
import {OutStandingAlarmModal} from './components/OutstandAlarmModal';
const OutstandingAlarmScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(true);
  const [filterField, setFilterField] = useState('id');
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
  const isFocused = useIsFocused();
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState('');
  const [isReload, setIsReload] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterAlarmType, setFilterAlarmType] = useState('');
  const [showMainModal, setShowMainModal] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  // }, [isFocused]);
  useEffect(() => {
    setPage(0);
    setData('');
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    }; //
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/v2/alarm/search?deviceId=&status=${filterStatus?.toUpperCase()}&alarmType=${filterAlarmType
        ?.toUpperCase()
        .replace(' ', '_')}&sort=${filterField},${
        filterDesc == true ? 'desc' : 'asc'
      }&page=${page}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        setData(result?.content);
        setTotalPages(result?.totalPages);
        setIsLastPage(result?.last);
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  }, [loading, isFocused]);
  //isFocused,loading
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    if (isLastPage == true || page == totalPages || isReload == false) {
      setIsReload(false);
      return;
    } else {
      fetch(
        `https://gis2.ectrak.com.hk:8900/api/v2/alarm/search?deviceId=&status=${filterStatus?.toUpperCase()}&alarmType=${filterAlarmType
          ?.toUpperCase()
          .replace(' ', '_')}&sort=${filterField},${
          filterDesc == true ? 'desc' : 'asc'
        }&page=${page}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          //  console.log(result);
          // return result;
          if (result?.content != undefined) {
            setData(prevArray => [...prevArray, ...result?.content]);
          }
          setIsReload(false);
        })
        .catch(error => console.log('error1', error));
    }
  }, [isReload]);
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setShowMainModal(true);
                }}>
                <Icon name="search" size={24} color="black" type="ionicon" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowFilter(!showFilter);
                }}>
                <Icon name="filter" size={24} color="black" type="ionicon" />
              </TouchableOpacity>
            </View>

            {showFilter && (
              <SortDropDown
                closeFilter={setShowFilter}
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
                // keyExtractor={item => item.id}
                onEndReached={() => {
                  alert('end react');
                  if (totalPages > page) {
                    setPage(page + 1);
                    setIsReload(true);
                  }
                }}
              />
            )}
            {/* <OutstandingAlarmCard />
        <OutstandingAlarmCard2 />
      */}
            <View style={{marginBottom: -40}}></View>
          </View>
          <OutStandingAlarmModal
            showMainModal={showMainModal}
            setShowMainModal={setShowMainModal}
            filterStatus={filterStatus}
            setLoading={setLoading}
            setFilterStatus={setFilterStatus}
            filterAlarmType={filterAlarmType}
            setFilterAlarmType={setFilterAlarmType}
          />
        </View>
      )}
    </>
  );
};

export default OutstandingAlarmScreen;
