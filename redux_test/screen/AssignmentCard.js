import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssignmentCard() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={{fontWeight:'bold'}}>RFL:  </Text>
        <Text>KT/R1/002</Text>
      </View>
      <View style={styles.row}>
        <Text style={{fontWeight:'bold'}}>eRFL Readliness: </Text>
        <Text style={{color:'lightgreen'}}>Active (Available)</Text>
      </View>
      <View style={styles.row}>
        <Text style={{fontWeight:'bold'}}>Group:  </Text>
        <Text>-</Text>
      </View>  
      <View style={styles.row}>
        <Text style={{fontWeight:'bold'}}>EPIC:  </Text>
        <Text>-</Text>
      </View>      

      <View style={styles.row}>
        <Text style={{fontWeight:'bold'}}>Assigned Date:  </Text>
        <Text>-</Text>
      </View> 

      <View style={styles.rowX}>
        <Text style={{fontWeight:'bold'}}>Status:  </Text>
        <Text>   {/*   <Ionicons name="light-bulb" size={26} color="green" />*/}</Text>
      </View> 
      
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  row:{
    flex:1, 
    flexDirection:'row'
  },
  rowX:{
    flex:1,alignItems:'center',    flexDirection:'row',
    paddingTop:10

  }
});
