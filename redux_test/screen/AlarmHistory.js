// import { View, Text, Button ,SafeAreaView,Image,StyleSheet} from 'react-native';
// import MonitoringCard from './MonitoringCard';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Constants from 'expo-constants';
// import { MaterialIcons } from '@expo/vector-icons';
// import OutstandingAlarmCard from './OutstandingAlarmCard'

// function OutstandingAlarm() {
//   return (
//     <View style={styles.container}>

//       <View style={{alignSelf:'flex-start',flex:1,flexDirection:'row', flexDirection:'row'}}>
//       {/*<MaterialIcons name="add-box" size={24} color="blue" /> */}
//       <Text title="test" style={styles.button}>2022-12-06 12:24:19</Text>
//       <Ionicons name="filter" size={32} style={{paddingLeft:120}} />
//   </View>

//       <OutstandingAlarmCard/>
//       <OutstandingAlarmCard/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {

//     paddingTop: Constants.statusBarHeight+5,
//     alignItems:'flex-start'
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button:{borderColor:'blue',color:'blue', borderWidth: 1,borderRadius:2,padding:10, alignSelf:'flex-start',marginRight:5},
//   right:{
//     paddingLeft:'50'
//   }
// });

// export default OutstandingAlarm;

import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import OutstandingAlarmCard from './OutstandingAlarmCard';
import OutstandingAlarmCard2 from './OutstandingAlarmCard2';

const AlarmHistory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let token =
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwOTE3Nzk3OTEyIn0.PRKOlfc-TKLBPmo_5IT0PSpdzmof_pUSLRCrXQu7X6QPPOOkdQSG1yPCqRb2rLvCIH2aQIlT8hq4idfMh2kGVQ';
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
    };
    fetch('https://gis2.ectrak.com.hk:8900/api/v2/alarms', requestOptions)
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 10,
        }}>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'blue'}}>Export 30 day csv</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="filter"
            size={24}
            color="black"
            type="ionicon"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 60}}>
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
