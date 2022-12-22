// import React, { useState, useEffect } from 'react';
// import { View, Text, Button ,SafeAreaView,Image,StyleSheet} from 'react-native';
// import MonitoringCard from './MonitoringCard';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Constants from 'expo-constants';
// import { MaterialIcons } from '@expo/vector-icons';
// function Monitoring() {
//   const [data,setData]=useState('');
//     useEffect(() => {
//     fetch("https://gis2.ectrak.com.hk:8900/api/v2/options/usernameAsOptions", {
// 		method: 'GET',
// 		headers: {
// 			'X-Token': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdnJJZCI6IjIiLCJqdGkiOiIxNjcwNDY3MjcwNTQwIn0.feFtEwqG_fexnbvAjlV_IOcxRLCDED3Cr6_g9dftlic8_Rjhcg3Y9qe5WO5anQLSsOP3SH3SPMFmulMVRLzh-Q',
//             'Cache-Control':'no-cache',
//             'Accept':'*/*',
//             'Connection':'Keep-Alive',
//             'Accept-Encoding':'gzip'

// 		},
// 	})
//     .then(response => response.json())
//         // 4. Setting *dogImage* to the image url that we received from the response above
//     .then(data1 => console.log(data1)).catch(e=>{console.log(e)})
//   },[])
//   return (
//     <View style={styles.container}>
//       <View style={{alignSelf:'flex-start',flex:1,flexDirection:'row', flexDirection:'row'}}>
//       {/*<MaterialIcons name="add-box" size={24} color="blue" /> */}
//       <Text title="test" style={styles.button}>Add{data.length}</Text>
//       <Text title="test" style={styles.button}>2022-12-06 12:24:19</Text>
//             <Ionicons name="filter" size={32} style={{paddingLeft:30}} />
//   </View>
//   {data}
//       <MonitoringCard/>
//       <MonitoringCard/>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {

//     paddingTop: Constants.statusBarHeight+5,
//     padding: 8,alignItems:'flex-start'
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

// export default Monitoring;
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
const Monitoring = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
              marginRight: 5,
            }}>
            <Text style={{color: 'blue'}}>Add</Text>
          </View>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: 'blue'}}>2022-12-06 12:26:43</Text>
          </View>
        </View>
        <View style={{padding: 5}}></View>
      </View>
      <ScrollView style={{paddingBottom: 180}}>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Monitoring;
