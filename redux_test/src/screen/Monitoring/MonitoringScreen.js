import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import MonitoringCard from './components/MonitoringCard';
import {useNavigation} from '@react-navigation/native';

import {Icon, LinearProgress} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import TableTest from './components/TableTest';
import {getDate} from '../../utils/getDate';
import CreateButton from '../../components/CreateButton';
import {useFetchMonitorData, useFetchMonitorTest} from '../../hooks/apiHook';
import SortDropDown from '../../utils/sortFilter';
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

const MonitoringScreen = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('rflid');
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const [roleOption, setRoleOption] = useState([]);
  const [userOption, setUserOption] = useState([]);

  console.log('islandscapemode' + isLandscapeMode);
  const isFocused = useIsFocused();

  useEffect(() => {
    setInterval(function () {
      // setLoading(true);
      setCurrentDate(getDate());
    }, 30000);
  }, []);

  const [data, error] = useFetchMonitorTest({
    userToken,
    loading,
    isFocused,
    setLoading,
    filterField,
    filterDesc,
    setCurrentDate,
  });
  const sortOption = [
    {displayValue: 'RFL ID', apiValue: 'rflid'},
    {displayValue: 'RFL', apiValue: 'rfl'},
    {displayValue: 'EPIC', apiValue: 'epic'},
    {displayValue: 'Group', apiValue: 'Group'},
    {displayValue: 'Status As Of', apiValue: 'statusasof'},
  ];

  return (
    <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <CreateButton navigation={navigation} navLoc={'Create Monitoring'} />

          <TouchableOpacity
            onPress={() => {
              setLoading(true);
            }}
            style={{
              borderColor: loading ? 'gray' : 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: loading ? 'gray' : 'blue'}}>
              {loading ? 'loading' : currentDate}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
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

      <View style={{padding: 5}}></View>

      {loading ? (
        <LinearProgress style={{marginTop: -5}} color="red" />
      ) : isLandscapeMode ? (
        <TableTest
          data={data}
          navigation={navigation}
          filterDesc={filterDesc}
          filterField={filterField}
          setFilterDesc={setFilterDesc}
          setFilterField={setFilterField}
          setLoading={setLoading}
        />
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

export default MonitoringScreen;
