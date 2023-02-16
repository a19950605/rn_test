import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {Icon, LinearProgress} from '@rneui/themed';
import {useWindowDimensions} from 'react-native';
import EventLogTable from './components/EventLogTable';

import SortDropDown from '../../utils/sortFilter';
import EventLogCard from './components/EventLogCard';
import {useIsFocused} from '@react-navigation/native';
import {useFetchEventLogData} from '../../hooks/ApiHook';
import {color, styles} from '../../constants/styles';

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
    <View style={styles.container}>
      <View style={styles.eventFlexEnd}>
        <TouchableOpacity style={styles.csvButton}>
          <Icon
            name="download"
            size={24}
            color="blue"
            type="material-community"
            style={styles.pr5}
          />
          <Text style={color.blue}>export current result to csv</Text>
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
        <LinearProgress style={styles.mtNeg5} color="red" />
      )}
    </View>
  );
}

export default EventLog;
