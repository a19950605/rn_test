import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {Icon, LinearProgress} from '@rneui/themed';
import {useWindowDimensions} from 'react-native';
import EventLogTable from './components/EventLogTable';

import SortDropDown from '../../utils/sortFilter';
import {sortData} from '../../utils/sortData';
import EventLogCard from './components/EventLogCard';
import {getDate} from '../../utils/getDate';
import {useIsFocused} from '@react-navigation/native';
import {useFetchEventLogData} from '../../hooks/apiHook';

function EventLog() {
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('username');

  const sortOption = [
    {displayValue: 'User', apiValue: 'username'},
    {displayValue: 'Datetime', apiValue: 'time'},
    {displayValue: 'Function', apiValue: 'func'},
    {displayValue: 'Type', apiValue: 'type'},
    {displayValue: 'Data', apiValue: 'dest'},
  ];
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;

  let formdata = new FormData();
  formdata.append('userName', '');
  formdata.append('funcName', '');
  formdata.append('fromTime', getDate());
  formdata.append('toTime', getDate());
  const isFocused = useIsFocused();

  const [data, error] = useFetchEventLogData({
    userToken,
    loading,
    isFocused,
    setLoading,
    filterField,
    filterDesc,
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 2}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 5,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
            marginRight: 5,
            alignItems: 'center',
          }}>
          <Icon
            name="download"
            size={24}
            color="blue"
            type="material-community"
            style={{paddingRight: 5}}
          />
          <Text style={{color: 'blue'}}>export current result to csv</Text>
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
      {!loading ? (
        isLandscapeMode ? (
          <EventLogTable data={data} />
        ) : (
          <FlatList
            data={data?.reverse()}
            renderItem={props => <EventLogCard {...props} />}
          />
        )
      ) : (
        <LinearProgress style={{marginTop: -5}} color="red" />
      )}
    </View>
  );
}

export default EventLog;
