import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {useWindowDimensions} from 'react-native';
import EventLogTable from './components/EventLogTable';

import SortDropDown from '../../utils/sortFilter';
import {sortData} from '../../utils/sortData';
import EventLogCard from './components/EventLogCard';

function EventLog() {
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('username');
  const [data, setData] = useState();

  const sortOption = [
    {displayValue: 'User', apiValue: 'username'},
    {displayValue: 'Datetime', apiValue: 'time'},
    {displayValue: 'Function', apiValue: 'func'},
    {displayValue: 'Type', apiValue: 'type'},
    {displayValue: 'Data', apiValue: 'dest'},
  ];
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;

  var date = new Date();

  var dateStr =
    date.getFullYear() +
    ('00' + (date.getMonth() + 1)).slice(-2) +
    ('00' + date.getDate()).slice(-2);

  let formdata = new FormData();
  formdata.append('userName', '');
  formdata.append('funcName', '');
  formdata.append('fromTime', dateStr);
  formdata.append('toTime', dateStr);

  // if (loading) {
  //   getEventLog({userToken, formdata})
  //     .unwrap()
  //     .then(data => {
  //       console.log('get alarm');
  //       consosle.log(data);
  //       console.log(response);
  //     })
  //     .then(error => {
  //       console.log(error);
  //       console.log(response);
  //     });
  //   setLoading(false);
  // }

  useEffect(() => {
    // listEventLog(body_obj, token).then(res => {
    //   console.log('json');
    //   console.log(res);
    // });
    var requestOptions = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
      body: formdata,
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/data/eventlog', requestOptions)
      .then(response => {
        console.log('response');
        return response.json();
      })
      .then(result => {
        console.log('result');
        console.log(result);
        setData(sortData(result, filterField, filterDesc));

        setLoading(false);
      })
      .catch(error => console.log('error', error));
  }, [loading]);
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
      {isLandscapeMode ? (
        <EventLogTable data={data} />
      ) : (
        <FlatList
          data={data?.reverse()}
          renderItem={props => <EventLogCard {...props} />}
        />
      )}
    </View>
  );
}

export default EventLog;
