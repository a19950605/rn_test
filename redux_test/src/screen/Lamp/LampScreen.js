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

const LampScreen = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loadingController, setLoadingController] = useState();

  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('rflid');
  const [showFilter, setShowFilter] = useState(false);
  const {t} = useTranslation();

  const [filterRFL, setFilterRFL] = useState('All');
  const [filterRFLCode, setFilterRFLCode] = useState('');

  const [filterCONNStatus, setFilterCONNStatus] = useState('All');
  const [filterGroup, setFilterGroup] = useState('All');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('ACTIVE');
  const [showMainModal, setShowMainModal] = useState(false);
  const isFocused = useIsFocused();
  const [date, setDate] = React.useState(undefined);
  const [openDate, setOpenDate] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpenDate(false);
  }, [setOpenDate]);

  const onConfirmSingle = React.useCallback(
    params => {
      setOpenDate(false);
      setDate(params.date);
    },
    [setOpenDate, setDate],
  );
  useEffect(() => {
    setInterval(function () {
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
    filterStatus,
    filterCONNStatus,
    filterRFLCode,
  });

  const [data2, error2] = useFetchMonitorData({
    userToken,
    loading2,
    isFocused,
    setLoading2,
    filterField,
    filterDesc,
    setCurrentDate,
  });
  const [data3, error3] = useFetchControllerList({
    userToken,
    loading,
    isFocused,
  });

  useEffect(() => {
    if (!isFocused) {
      setShowFilter(false);
    }
  }, [isFocused]);

  const sortOption = [
    {displayValue: 'RFL ID', apiValue: 'rflid'},
    {displayValue: 'RFL', apiValue: 'rfl'},
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
              navLoc={'Create Lamp'}
              dropDown1={data3}
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

        {loading ? (
          <LinearProgress style={styles.mtNeg5} color="red" />
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
            rflDropDown={data2}
            filterRFL={filterRFL}
            setFilterRFL={setFilterRFL}
            setFilterRFLCode={setFilterRFLCode}
            filterGroup={filterGroup}
            setFilterGroup={setFilterGroup}
            setOpenDate={setOpenDate}
            date={date}
          />
        )}
        <DatePickerModal
          locale="en"
          mode="single"
          visible={openDate}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LampScreen;
