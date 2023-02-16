import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';
import {styles} from '../../constants/styles';
import {requestOptions} from '../../utils/requestOptions';
import OutstandingAlarmCard from '../OutstandingAlarm/components/OutstandingAlarmCard';

const AlarmHistory = () => {
  const [data, setData] = useState([]);
  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.alarm}`,
      requestOptions({method: 'GET', userToken}),
    )
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
      </View>
    </View>
  );
};

export default AlarmHistory;
