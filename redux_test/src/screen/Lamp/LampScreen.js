import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import LampCard from './components/LampCard';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Icon, LinearProgress} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import TableTest from './components/TableTest';
import {getDate} from '../../utils/getDate';
import CreateButton from '../../components/CreateButton';
import {
  useFetchControllerList,
  useFetchMonitorData,
  useFetchMonitorTest,
} from '../../hooks/ApiHook';
import SortDropDown from '../../utils/sortFilter';
import {LampFilterModal} from './components/LampFilterModal';
import {color, styles} from '../../constants/styles';
import {useTranslation} from 'react-i18next';
import {DatePickerModal} from 'react-native-paper-dates';
import {ReloadButton} from '../../components/ReloadButton';
import moment from 'moment';
import {fetchActiveDevices} from '../../features/lamp/activeLampSlice';
import {getControllers} from '../../features/controller/controllerSlice';
import {getDevices} from '../../features/lamp/lampsSlice';
import {formBuilder} from '../../utils/formBuilder';
import {getConnStatus, getFilterStatus} from '../../utils/getStatus';

const LampScreen = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loadingController, setLoadingController] = useState();

  const dispatch = useDispatch();
  const {t} = useTranslation();

  const [currentDate, setCurrentDate] = useState(
    moment().format('YYYY-MM-DD HH:mm:ss'),
  );
  const userToken = useSelector(state => state.login.userToken?.Token);
  const {activeDeviceList} = useSelector(state => state.activeLamps);
  const {devices, isLoading, error} = useSelector(state => state.lamps);
  const {controllerList} = useSelector(state => state.controllers);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('id');
  const [showFilter, setShowFilter] = useState(false);

  const [filterRFL, setFilterRFL] = useState('All');
  const [filterRFLCode, setFilterRFLCode] = useState('');

  const [filterCONNStatus, setFilterCONNStatus] = useState('All');
  const [filterGroup, setFilterGroup] = useState('All');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('ACTIVE');
  const [showMainModal, setShowMainModal] = useState(false);
  const isFocused = useIsFocused();
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    params => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );
  useEffect(() => {
    setInterval(function () {
      setCurrentDate(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 30000);
  }, []);
  // const [data, error] = useFetchMonitorTest({
  //   userToken,
  //   loading,
  //   isFocused,
  //   setLoading,
  //   filterField,
  //   filterDesc,
  //   setCurrentDate,
  //   filterStatus,
  //   filterCONNStatus,
  //   filterRFLCode,
  // });

  useEffect(() => {
    //fetchActiveDevices;
    if (loading == true) {
      getDevicesList(userToken);
    }
  }, [isFocused, filterField, filterDesc, loading]);

  useEffect(() => {
    //fetchActiveDevices
    getFilterDevices(userToken);
    getControllersList(userToken);
  }, []);

  const getDevicesList = userToken => {
    try {
      //  const users = await dispatch(fetchUsers(userToken));

      let conn = getConnStatus(filterCONNStatus);
      let status_f = getFilterStatus(filterStatus);
      dispatch(
        getDevices({
          userToken,
          filterDesc,
          filterField,
          formdata: formBuilder([
            {
              key: 'status',
              value: getFilterStatus(filterStatus),
            },
            {key: 'connectionStatus', value: getConnStatus(filterCONNStatus)},
            {key: 'deviceId', value: filterRFLCode},
          ]),
        }),
      )
        .then(() => {
          // alert('fetch list success');
          setLoading(false);
        })
        .catch(e => {
          //  alert('fetch list failed');
        });
    } catch (err) {}
  };

  const getFilterDevices = userToken => {
    dispatch(fetchActiveDevices(userToken))
      .then(() => {})
      .catch(e => {
        console.log('fetch filter list failed');
      });
  };
  const getControllersList = userToken => {
    dispatch(getControllers(userToken))
      .then(() => {
        // alert('success cont');
      })
      .catch(e => {
        //alert('failed cont');
      });
  };

  useEffect(() => {
    if (!isFocused) {
      setShowFilter(false);
    }
  }, [isFocused]);

  const sortOption = [
    {displayValue: 'RFL ID', apiValue: 'id'},
    {displayValue: 'RFL', apiValue: 'code'},
    {displayValue: 'EPIC', apiValue: 'epic'},
    {displayValue: 'Group', apiValue: 'Group'},
    {displayValue: 'Status As Of', apiValue: 'statusasof'},
  ];
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowFilter(false);
      }}>
      <View style={styles.screenInit}>
        <View style={styles.spaceBetween}>
          <View style={{flexDirection: 'row'}}>
            <CreateButton
              navigation={navigation}
              navLoc={'Create Monitoring'}
              dropDown1={controllerList}
            />
            <ReloadButton
              setLoading={setLoading}
              loading={loading}
              currentDate={currentDate}
            />
          </View>
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

        <View style={styles.p5}></View>

        {isLoading ? (
          <LinearProgress style={styles.mtNeg5} color="red" />
        ) : isLandscapeMode ? (
          <TableTest
            data={devices}
            navigation={navigation}
            filterDesc={filterDesc}
            filterField={filterField}
            setFilterDesc={setFilterDesc}
            setFilterField={setFilterField}
            setLoading={setLoading}
          />
        ) : (
          <FlatList
            data={devices}
            renderItem={props => (
              <LampCard {...props} navigation={navigation} />
            )}
          />
        )}
        {showMainModal && (
          <LampFilterModal
            setLoading={setLoading}
            setShowMainModal={setShowMainModal}
            showMainModal={showMainModal}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            setFilterCONNStatus={setFilterCONNStatus}
            filterCONNStatus={filterCONNStatus}
            rflDropDown={activeDeviceList}
            filterRFL={filterRFL}
            setFilterRFL={setFilterRFL}
            setFilterRFLCode={setFilterRFLCode}
            filterGroup={filterGroup}
            setFilterGroup={setFilterGroup}
            setOpenDate={setOpen}
            date={date}
          />
        )}
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LampScreen;
