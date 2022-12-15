import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//monitoring
const MonitoringCard = props => {
  console.log('component load');
  console.log(props.item);

  return (
    <View style={styles.card}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>RFL ID: </Text>
          <Text>{props.item.code}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>RFL : </Text>
          <Text>{JSON.stringify(props.item.id)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>EPIC : </Text>
          <Text>{props.item.activeAssignment?.epicName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>GROUP : </Text>
          <Text>{props.item.activeAssignment?.groupName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Status As Of:</Text>
          <Text>{props.item.activeAssignment?.dtCreate || '-'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>eRFL Readlines:</Text>
          <Text>{props.item.status}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Status:</Text>
          <Text> -</Text>
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
  );
};
const styles = StyleSheet.create({
  card: {},
  btn: {
    width: '100%',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btns: {
    alignItems: 'center',
    padding: '20',
    color: 'blue',
  },
});
export default MonitoringCard;
