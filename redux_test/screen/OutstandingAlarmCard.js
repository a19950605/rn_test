import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
//monitoring
const OutstandingAlarmCard = ()=>{
  return(
    <View style={styles.card}>
    <View style={{padding:20}}>
      <Text>Alarm ID: 408</Text>
      <Text>Type: Lamp Fault</Text>
      <Text>Controller ID:C001</Text>
      <Text>RFL: KT/R1/001</Text>
      <Text>Triggered Datetime: 2022-12-06 12:23:19</Text>
      <Text>Status: Active</Text>

      </View>
   <View style={styles.btn}>
        <View style={styles.btns}><Text>Details</Text></View>
        <View style={styles.btns}><Text>Control</Text></View>
      </View>
    </View>

  )

}
const styles = StyleSheet.create({
  card:{
    backgroundColor:'green',
           width:'100%',

     },
     btn:{
       width:'100%',
       
       flex:1,
       flexDirection:'row',
       justifyContent:'space-around'
     },
     btns:{
       alignItems:'center',
       padding:'20',
       color:'blue',
       backgroundColor:'lightgreen'
     }
});
export default OutstandingAlarmCard;