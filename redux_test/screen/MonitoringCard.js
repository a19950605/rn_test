import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
//monitoring
const MonitoringCard = ()=>{
  return(
    <View style={styles.card}>
    <View style={{padding:20}}>
      <Text>RFL ID: 2</Text>
      <Text>RFL: KT/R1/200</Text>
      <Text>EPIC: -</Text>
      <Text>Group: -</Text>
      <Text>Status As Of: 2022-12-06 12:23:19</Text>
      <Text>eRFL Readlines: Active (Available)</Text>
      <Text>Status:</Text>

      </View>
   <View style={styles.btn}>
        <Text style={styles.btns}>Details</Text>
        <Text style={styles.btns}>Control</Text>
      </View>
    </View>

  )

}
const styles = StyleSheet.create({
  card:{
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
       color:'blue'
     }
});
export default MonitoringCard;