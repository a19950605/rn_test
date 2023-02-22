import {Icon, LinearProgress} from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {color, styles} from '../../constants/styles';
import {SysParamsCard} from './components/SysParamsCard';

export const SysParams = () => {
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const userToken = useSelector(state => state.login.userToken?.Token);

  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('name');
  const sortOption = [
    {displayValue: 'Name', apiValue: 'name'},
    {displayValue: 'Value', apiValue: 'value'},
  ];
  const [data, setData] = useState('');

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    }; //
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/v2/systemParameters`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        setData(result?.SYSTEM_PARAMETERS);
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  }, [loading]);

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

        {/* {showFilter && (
        <SortDropDown
          close={setShowFilter}
          setFilterDesc={setFilterDesc}
          setFilterField={setFilterField}
          setLoading={setLoading}
          sortOption={sortOption}
          filterDesc={filterDesc}
          filterField={filterField}
        />
      )} */}
      </View>
      {!loading ? (
        isLandscapeMode ? (
          <FlatList
            data={data}
            renderItem={props => <SysParamsCard {...props} />}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={props => <SysParamsCard {...props} />}
          />
        )
      ) : (
        <LinearProgress style={styles.mtNeg5} color="red" />
      )}
    </View>
  );
};
