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

import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const OutstandingAlarm = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 2,
            padding: 10,
            flexDirection: "row",
          }}
        >
     
          <Text style={{ color: "blue" }}>2022-12-06 12:26:43</Text>
        </View>
        <View style={{ padding: 5 }}>
        </View>
      </View>
      <ScrollView style={{marginBottom:60}}>
        <View>
          <View
            style={{
              backgroundColor: "green",
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Alarm ID:{" "}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Controller ID:{" "}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Triggered Datetime:{" "}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Status:{" "}
              </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "space-around",
              backgroundColor: "lightgreen",
              marginBottom: 2,
            }}
          >
            <View>
              <Text style={{ padding: 10, color: "blue" }}>Details</Text>
            </View>
            <View>
              <Text style={{ padding: 10, color: "blue" }}>ACK</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: "red",
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Alarm ID:{" "}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Controller ID:{" "}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Triggered Datetime:{" "}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Status:{" "}
              </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "space-around",
              backgroundColor: "pink",
              marginBottom: 2,
            }}
          >
            <View>
              <Text style={{ padding: 10, color: "blue" }}>Details</Text>
            </View>
            <View>
              <Text style={{ padding: 10, color: "blue" }}>ACK</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: "green",
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Alarm ID:{" "}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Controller ID:{" "}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Triggered Datetime:{" "}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Status:{" "}
              </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "space-around",
              backgroundColor: "lightgreen",
              marginBottom: 2,
            }}
          >
            <View>
              <Text style={{ padding: 10, color: "blue" }}>Details</Text>
            </View>
            <View>
              <Text style={{ padding: 10, color: "blue" }}>ACK</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "green",
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Alarm ID:{" "}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Controller ID:{" "}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Triggered Datetime:{" "}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Status:{" "}
              </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "space-around",
              backgroundColor: "lightgreen",
              marginBottom: 2,
            }}
          >
            <View>
              <Text style={{ padding: 10, color: "blue" }}>Details</Text>
            </View>
            <View>
              <Text  style={{padding:10,color:'blue'}}>ACK</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OutstandingAlarm;
