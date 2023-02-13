import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';
import {styles} from '../../constants/styles';
import OutstandingAlarmCard from '../OutstandingAlarm/components/OutstandingAlarmCard';

const AlarmHistory = () => {
  const [data, setData] = useState([]);
  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(`${appContextPaths[appDefDomain]}${EndPoint.alarm}`, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        setData(result);
        //console.log('data test');
        // console.log(data);
      })
      .catch(error => console.log('error', error));

    console.log('outStandand alarm121');
    data.map(d => {
      console.log(d.id, d.status);
    });
  }, []);

  return (
    <View>
      <View style={styles.flexEnd}>
        <TouchableOpacity style={styles.csvHeader}>
          <Text style={{color: 'blue'}}>Export 30 day csv</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="filter"
            size={24}
            color="black"
            type="ionicon"
            style={styles.p10}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mb60}>
        <FlatList
          data={data}
          renderItem={OutstandingAlarmCard}
          keyExtractor={item => item.id}
        />

        {/* <OutstandingAlarmCard />
        <OutstandingAlarmCard2 />
      */}
      </View>
    </View>
  );
};

export default AlarmHistory;
